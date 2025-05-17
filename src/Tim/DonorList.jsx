import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DonorList() {
  const [donors, setDonors] = useState([]);
  const [editingDonor, setEditingDonor] = useState(null);
  const [editData, setEditData] = useState({});
  const [secretCode, setSecretCode] = useState('');

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = () => {
    axios.get('http://localhost:5000/api/donors').then(res => setDonors(res.data));
  };

  const getEligibility = date => {
    const today = new Date();
    const lastDate = new Date(date);
    const diff = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
    if (diff >= 90) return '✅ এখন রক্ত দিতে পারবেন';
    else return `❌ ${90 - diff} দিন পর রক্ত দিতে পারবেন`;
  };

  const toBengaliDate = (date) => {
    const d = new Date(date);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return d.toLocaleDateString('bn-BD', options);
  };

  const handleEdit = (donor) => {
    setEditingDonor(donor);
    setEditData({ ...donor });
    setSecretCode('');
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:5000/api/donors/${editingDonor._id}`, { ...editData, secretCode });
    setEditingDonor(null);
    fetchDonors();
  };

  const handleDelete = async (id) => {
    const code = prompt('অনুগ্রহ করে আপনার সিক্রেট কোড দিন:');
    if (!code) return;
    await axios.delete(`http://localhost:5000/api/donors/${id}`, { data: { secretCode: code } });
    fetchDonors();
  };

  return (
    <div style={{ padding: 20 }}>
      {donors.map((donor, idx) => (
        <div key={idx} style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10, borderRadius: 10 }}>
          <h3>{donor.name} ({donor.bloodGroup})</h3>
          <p>ফোন: {donor.phone}</p>
          <p>ঠিকানা: {donor.address}</p>
          <p>সর্বশেষ রক্তদান: {toBengaliDate(donor.lastDonationDate)}</p>
          <p style={{ color: getEligibility(donor.lastDonationDate).includes('✅') ? 'green' : 'red' }}>
            {getEligibility(donor.lastDonationDate)}
          </p>
          <button onClick={() => handleEdit(donor)}>✏️ এডিট</button>
          <button onClick={() => handleDelete(donor._id)}>🗑️ ডিলিট</button>
        </div>
      ))}

      {editingDonor && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%',
          height: '100%', background: 'rgba(0,0,0,0.6)',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{ background: '#fff', padding: 20, borderRadius: 10, width: 300 }}>
            <h3>প্রোফাইল আপডেট করুন</h3>
            <input value={editData.name} onChange={e => setEditData({ ...editData, name: e.target.value })} placeholder="নাম" /><br />
            <input value={editData.bloodGroup} onChange={e => setEditData({ ...editData, bloodGroup: e.target.value })} placeholder="রক্তের গ্রুপ" /><br />
            <input value={editData.phone} onChange={e => setEditData({ ...editData, phone: e.target.value })} placeholder="ফোন" /><br />
            <input value={editData.address} onChange={e => setEditData({ ...editData, address: e.target.value })} placeholder="ঠিকানা" /><br />
            <input type="date" value={editData.lastDonationDate?.split('T')[0]} onChange={e => setEditData({ ...editData, lastDonationDate: e.target.value })} /><br />
            <input type="password" value={secretCode} onChange={e => setSecretCode(e.target.value)} placeholder="সিক্রেট কোড" /><br />
            <button onClick={handleUpdate}>✅ আপডেট</button>
            <button onClick={() => setEditingDonor(null)}>❌ বন্ধ করুন</button>
          </div>
        </div>
      )}
    </div>
  );
}
