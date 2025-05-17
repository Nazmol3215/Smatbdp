import React, { useState } from 'react';
import axios from 'axios';

const MemberForm = () => {
  const [form, setForm] = useState({ image: '', imageName: '', phone: '', designation: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    await axios.post('https://bdback-5ofz.onrender.com/api/members/add', form);

    alert('সফলভাবে জমা হয়েছে!');
    setForm({ image: '', imageName: '', phone: '', designation: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>মেম্বার ফরম</h2>
      <form onSubmit={submitData}>
        <input type="text" name="image" placeholder="ইমেজ লিংক" value={form.image} onChange={handleChange} /><br /><br />
        <input type="text" name="imageName" placeholder="ইমেজের নাম" value={form.imageName} onChange={handleChange} /><br /><br />
        <input type="text" name="phone" placeholder="📞 মোবাইল" value={form.phone} onChange={handleChange} /><br /><br />
        <input type="text" name="designation" placeholder="পদবী" value={form.designation} onChange={handleChange} /><br /><br />
        <button type="submit">জমা দিন</button>
      </form>
    </div>
  );
};

export default MemberForm;
