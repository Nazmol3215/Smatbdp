import React, { useState } from 'react';

const CattleForm = () => {
  const [formData, setFormData] = useState({
    imageLink: '',
    imageName: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/cattle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    alert('গরুর তথ্য জমা হয়েছে!');
    setFormData({ imageLink: '', imageName: '', phone: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', background: '#f0f0f0', borderRadius: '10px' }}>
      <h2>গরুর তথ্য দিন</h2>
      <input type="text" placeholder="ইমেজ লিংক" value={formData.imageLink} onChange={(e) => setFormData({ ...formData, imageLink: e.target.value })} required />
      <input type="text" placeholder="ইমেজের ঠিকানা" value={formData.imageName} onChange={(e) => setFormData({ ...formData, imageName: e.target.value })} required />
      <input type="text" placeholder="মোবাইল নাম্বার" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
      <textarea placeholder="গরু সম্পর্কে বিস্তারিত লিখুন" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
      <button type="submit">জমা দিন</button>
    </form>
  );
};

export default CattleForm;
