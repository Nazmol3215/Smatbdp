import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [access, setAccess] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:5000/bank/all')
      .then(res => setData(res.data));
  };

  const handleLogin = () => {
    axios.post('http://localhost:5000/admin/login', { password })
      .then(res => {
        if (res.data.access) {
          setAccess(true);
          fetchData();
        } else {
          alert("ভুল পাসওয়ার্ড");
        }
      });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/admin/delete/${id}`);
    fetchData();
  };

  const handleUpdate = async (id) => {
    const newName = prompt("নতুন নাম দিন:");
    if (newName) {
      await axios.put(`http://localhost:5000/admin/update/${id}`, { imageName: newName });
      fetchData();
    }
  };

  return access ? (
    <div>
      <h2>এডমিন ড্যাশবোর্ড</h2>
      {data.map(item => (
        <div key={item._id} style={{ border: '1px solid gray', margin: 10, padding: 10 }}>
          <img src={item.imageLink} alt={item.imageName} width={100} />
          <h3>{item.imageName}</h3>
          <p>{item.phone} | {item.address}</p>
          <button onClick={() => handleUpdate(item._id)}>আপডেট</button>
          <button onClick={() => handleDelete(item._id)}>ডিলিট</button>
        </div>
      ))}
    </div>
  ) : (
    <div>
      <input type="password" placeholder="এডমিন পাসওয়ার্ড" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>লগইন</button>
    </div>
  );
}
