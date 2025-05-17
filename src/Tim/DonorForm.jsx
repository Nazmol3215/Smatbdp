import React, { useState } from 'react';
import axios from 'axios';

export default function DonorForm() {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    phone: '',
    address: '',
    lastDonationDate: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/donors', formData);
    alert('Donor added!');
    setFormData({
      name: '',
      bloodGroup: '',
      phone: '',
      address: '',
      lastDonationDate: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20, maxWidth: 400 }}>
      <input name="name" placeholder="নাম" value={formData.name} onChange={handleChange} required /><br />
      <input name="bloodGroup" placeholder="রক্তের গ্রুপ" value={formData.bloodGroup} onChange={handleChange} required /><br />
      <input name="phone" placeholder="ফোন" value={formData.phone} onChange={handleChange} required /><br />
      <input name="address" placeholder="ঠিকানা" value={formData.address} onChange={handleChange} required /><br />
      <input type="date" name="lastDonationDate" value={formData.lastDonationDate} onChange={handleChange} required /><br />
      <button type="submit">ডোনার যোগ করুন</button>
    </form>
  );
}
