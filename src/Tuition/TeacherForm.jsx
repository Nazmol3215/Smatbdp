import React, { useState } from 'react';
import axios from 'axios';

const InputField = ({ name, placeholder, type = 'text', onChange, value, emoji }) => (
  <div style={styles.inputContainer}>
    <label style={styles.label}>{emoji} {placeholder}</label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      style={styles.input}
      required
    />
  </div>
);

const TeacherForm = () => {
  const [form, setForm] = useState({
    imageLink: '',
    imageName: '',
    title: '',
    phone: '',
    position: '',
    education: '',
    experience: '',
    subject: '',
    classLevel: '',
    location: ''
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://bdback-5ofz.onrender.com/api/teachers", form);
    alert("✅ Submitted successfully!");
  };

  return (
    <div style={styles.page}>
      <button style={styles.topButton} onClick={() => window.location.href = "/TeacherList_1"}>📋 সকল প্রফাইল দেখুন</button>

      <form onSubmit={handleSubmit} style={styles.form}>

        <h2 style={styles.heading}>📚 শিক্ষক প্রফাইল ফর্ম</h2>

        <InputField name="imageLink" placeholder="আপনার ইমেজ লিংক" value={form.imageLink} onChange={handleChange} emoji="🖼️" />
        <InputField name="imageName" placeholder="আপনার নাম" value={form.imageName} onChange={handleChange} emoji="🏷️" />
        <InputField name="title" placeholder="যেই কলেজে লেখাপড়া করেছেন তার নাম লিখুন" value={form.title} onChange={handleChange} emoji="🎓" />
        <InputField name="phone" placeholder="মোবাইল নম্বর" value={form.phone} onChange={handleChange} emoji="📞" />
        <InputField name="position" placeholder="পদবী" value={form.position} onChange={handleChange} emoji="💼" />

        <div style={styles.inputContainer}>
          <label style={styles.label}>🎓 শিক্ষাগত যোগ্যতা</label>
          <select name="education" value={form.education} onChange={handleChange} style={styles.select}>
            <option value="">সিলেক্ট করুন</option>
            <option value="HSC">HSC</option>
            <option value="Honors">Honors</option>
            <option value="Masters">Masters</option>
          </select>
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>👨‍🏫 অভিজ্ঞতা</label>
          <select name="experience" value={form.experience} onChange={handleChange} style={styles.select}>
            <option value="">সিলেক্ট করুন</option>
            <option value="1 year">1 year</option>
            <option value="2-3 years">2-3 years</option>
            <option value="5+ years">5+ years</option>
          </select>
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>📘 বিষয়</label>
          <select name="subject" value={form.subject} onChange={handleChange} style={styles.select}>
            <option value="">সিলেক্ট করুন</option>
            <option value="Math">যেকোন বিষয়</option>
            <option value="Math">আরবী</option>
            <option value="English">ইংরেজী</option>
            <option value="Physics">পদার্থবিদ্যা</option>
            <option value="Physics">গনিত</option>
            <option value="Physics">বিজ্ঞান</option>
          </select>
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>🏫 শ্রেণি</label>
          <select name="classLevel" value={form.classLevel} onChange={handleChange} style={styles.select}>
            <option value="">সিলেক্ট করুন</option>
            <option value="Class 5-8">Class 5-8</option>
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
          </select>
        </div>

        <InputField name="location" placeholder="যেই এলাকায় আাপনি পড়াতে পারবেন তার ঠিকানা" value={form.location} onChange={handleChange} emoji="📍" />

        <button type="submit" style={styles.submitButton}>✅ সাবমিট করুন</button>
      </form>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    padding: '30px 10px',
    background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: 'fadeIn 1s ease-in',
  },
  topButton: {
    marginBottom: 20,
    padding: '10px 20px',
    borderRadius: '30px',
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    color: 'white',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  },
  form: {
    width: '100%',
    maxWidth: '500px',
    padding: '30px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    animation: 'slideIn 1s ease-out',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '24px',
    color: '#333',
  },
  inputContainer: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#444',
  },
  input: {
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '16px',
  },
  select: {
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  callButton: {
    marginBottom: '15px',
    textAlign: 'center',
    background: '#00b894',
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    display: 'block',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background 0.3s',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    borderRadius: '15px',
    border: 'none',
    background: 'linear-gradient(to right, #00f260, #0575e6)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  },
};

// Keyframe styles (for reference if using global CSS)
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideIn { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

export default TeacherForm;
