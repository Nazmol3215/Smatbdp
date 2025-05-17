import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    number: '',
    type: '',
    address: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://bdback-5ofz.onrender.com/api/users', formData);
    alert('✅ তথ্য জমা হয়েছে!\n📋 প্রফাইলটি এখন সাইটে দেখা যাবে।');
    setFormData({ image: '', name: '', number: '', type: '', address: '' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(-45deg, #ff9a9e, #fad0c4, #fbc2eb, #a1c4fd)',
      backgroundSize: '400% 400%',
      animation: 'gradientBG 10s ease infinite'
    }}>
      <form 
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '420px',
          padding: '30px',
          borderRadius: '15px',
          background: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 12px 25px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          animation: 'fadeIn 1s ease-out'
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#333' }}>
          🛠️ নতুন প্রফাইল যুক্ত করুন
        </h2>

        <InputField name="image" placeholder="🖼️ ইমেজ লিংক" value={formData.image} onChange={handleChange} />
        <InputField name="name" placeholder="👤 নাম" value={formData.name} onChange={handleChange} />
        <InputField name="number" type="tel" placeholder="📞 মোবাইল নাম্বার" value={formData.number} onChange={handleChange} pattern="^(?:\+?88)?01[3-9]\d{8}$" />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          style={{ ...inputStyle, backgroundColor: '#fff' }}
        >
          <option value="">🔧 - ধরণ নির্বাচন করুন -</option>
          <option value="রাজমিস্ত্রী">রাজমিস্ত্রী</option>
          <option value="কাঠমিস্ত্রী">কাঠমিস্ত্রী</option>
          <option value="ইলেকট্রিক মিস্ত্রি">ইলেকট্রিক মিস্ত্রি</option>
          <option value="টাইলস মিস্ত্রি">টাইলস মিস্ত্রি</option>
          <option value="স্যানিটারি মিস্ত্রি">স্যানিটারি মিস্ত্রি</option>
          <option value="রং মিস্ত্রি">রং মিস্ত্রি</option>
          <option value="গাড়ির মিস্ত্রি">গাড়ির মিস্ত্রি</option>
          <option value="এসি মিস্ত্রি">এসি মিস্ত্রি</option>
          <option value="ফ্রিজ মিস্ত্রি">ফ্রিজ মিস্ত্রি</option>
          <option value="সিসি ক্যামেরা মিস্ত্রি">সিসি ক্যামেরা মিস্ত্রি</option>
          <option value="গ্যাস মিস্ত্রি">গ্যাস মিস্ত্রি</option>
          <option value="থাই গ্লাস মিস্ত্রি">থাই গ্লাস মিস্ত্রি</option>
          <option value="ইন্টেরিয়র ডিজাইন">ইন্টেরিয়র ডিজাইন</option>
          <option value="কসাই">কসাই</option>
          <option value="কম্পিউটার মিস্ত্রি">কম্পিউটার মিস্ত্রি</option>
          <option value="টিভি মিস্ত্রি">টিভি মিস্ত্রি</option>
          <option value="সুইং মেকানিক">সুইং মেকানিক</option>
        </select>

        <InputField name="address" placeholder="📍 ঠিকানা" value={formData.address} onChange={handleChange} />

        <button
          type="submit"
          style={submitButtonStyle}
          onMouseOver={e => e.target.style.backgroundColor = '#1e7e34'}
          onMouseOut={e => e.target.style.backgroundColor = '#28a745'}
        >
          ✅ জমা দিন
        </button>

        <button
          type="button"
          onClick={() => navigate('/Mestiri_1')}
          style={{
            ...submitButtonStyle,
            backgroundColor: '#007bff',
            marginTop: '8px'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={e => e.target.style.backgroundColor = '#007bff'}
        >
          🔍 সকল প্রফাইল দেখুন
        </button>
      </form>

      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const InputField = ({ name, placeholder, value, onChange, type = "text", pattern }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required
    pattern={pattern}
    style={inputStyle}
  />
);

const inputStyle = {
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '16px',
  transition: 'all 0.3s ease',
  outline: 'none'
};

const submitButtonStyle = {
  padding: '12px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s'
};

export default UserForm;
