import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ এটুকু একবার import করতে হবে

export default function OfferForm() {
  const [formData, setFormData] = useState({
    type: 'MB',
    price: '',
    name: '',
    duration: '',
    adminPassword: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('https://bdback-5ofz.onrender.com/api/offers/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if(res.ok){
        setMessage('অফার সফলভাবে যোগ করা হয়েছে!');
        setFormData({
          type: 'MB',
          price: '',
          name: '',
          duration: '',
          adminPassword: '',
        });
      } else {
        setMessage(data.message || 'কিছু ভুল হয়েছে');
      }
    } catch (error) {
      setMessage('সার্ভার সংযোগে সমস্যা হয়েছে');
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        👉 সব অফার দেখতে এখানে
        <Link to="/OfferList" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>
           ক্লিক 
        </Link>
        করুন
      </div>

      <div style={{ maxWidth: 400, margin: 'auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
        <h2>নতুন অফার যোগ করুন</h2>
        <form onSubmit={handleSubmit}>
          <label>
            ধরনের নির্বাচন করুন (MB / Minute):
            <select name="type" value={formData.type} onChange={handleChange} required>
              <option value="MB">MB</option>
              <option value="Minute">Minute</option>
            </select>
          </label><br/><br/>

          <label>
            মূল্য (৳):
            <input 
              type="number" 
              name="price" 
              value={formData.price} 
              onChange={handleChange} 
              required 
              min="0"
            />
          </label><br/><br/>

          <label>
            অফারের নাম:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </label><br/><br/>

          <label>
            মেয়াদ (যেমন: 3 দিন):
            <input 
              type="text" 
              name="duration" 
              value={formData.duration} 
              onChange={handleChange} 
              required 
            />
          </label><br/><br/>

          <label>
            এডমিন পাসওয়ার্ড:
            <input 
              type="password" 
              name="adminPassword" 
              value={formData.adminPassword} 
              onChange={handleChange} 
              required 
            />
          </label><br/><br/>

          <button type="submit">অফার যোগ করুন</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}
