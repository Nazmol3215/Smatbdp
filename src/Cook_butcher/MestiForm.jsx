import React, { useState } from 'react';
import axios from 'axios';

// রিইউজেবল ইনপুট কম্পোনেন্ট
const InputField = ({ name, placeholder, value, onChange, emoji }) => (
  <input
    name={name}
    placeholder={`${emoji} ${placeholder}`}
    value={value}
    onChange={onChange}
    required
    style={{
      width: '100%',
      padding: '12px 16px',
      margin: '10px 0',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.3)',
      backdropFilter: 'blur(10px)',
      fontSize: '16px',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#fff',
      transition: 'all 0.3s ease-in-out',
    }}
  />
);

const MestiForm = () => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    imageName: '',
    phone: '',
    type: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://bdback-5ofz.onrender.com/api/users', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ imageUrl: '', imageName: '', phone: '', type: '', address: '' });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '40px 20px',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: '400% 400%',
        animation: 'gradientBG 15s ease infinite',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '420px',
          padding: '30px',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(12px)',
          color: '#fff',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          transition: 'all 0.5s ease-in-out',
          animation: 'fadeSlideIn 1s ease',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>ইউজার ফর্ম</h2>

        <InputField name="imageUrl" placeholder="ইমেজ লিংক" value={formData.imageUrl} onChange={handleChange} emoji="🖼️" />
        <InputField name="imageName" placeholder="ইমেজের নাম" value={formData.imageName} onChange={handleChange} emoji="🏷️" />
        <InputField name="phone" placeholder="মোবাইল নাম্বার" value={formData.phone} onChange={handleChange} emoji="📞" />
        <InputField name="type" placeholder="ধরন" value={formData.type} onChange={handleChange} emoji="🏠" />
        <InputField name="address" placeholder="ঠিকানা" value={formData.address} onChange={handleChange} emoji="📌" />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            marginTop: '10px',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(135deg, #ff6a00, #ee0979)',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 0 10px rgba(255,255,255,0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          ✨ জমা দিন
        </button>

        <button
          type="button"
          style={{
            width: '100%',
            marginTop: '15px',
            padding: '10px',
            background: 'transparent',
            border: '1px solid #fff',
            borderRadius: '10px',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '14px',
            transition: '0.3s',
          }}
          onClick={() => window.location.href = "/Cook_butcher_1"}
        >
          🔍 সকল প্রোফাইল দেখুন
        </button>

        {submitted && (
          <div style={{ marginTop: '15px', color: 'lightgreen', textAlign: 'center' }}>
           ✅ তথ্য জমা হয়েছে!\n📋 প্রফাইলটি এখন সাইটে দেখা যাবে।
          </div>
        )}
      </form>

      {/* কাস্টম CSS keyframes */}
      <style>
        {`
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }

          @media (max-width: 500px) {
            form {
              padding: 20px !important;
              font-size: 15px;
            }

            input, button {
              font-size: 14px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MestiForm;
