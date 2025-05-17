import React, { useState } from 'react';
import axios from 'axios';

// রিইউজেবল ইনপুট ফিল্ড কম্পোনেন্ট
const InputField = ({ name, value, onChange, placeholder, icon }) => (
  <div style={{
    marginBottom: '15px',
    width: '100%',
    position: 'relative'
  }}>
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`${icon} ${placeholder}`}
      style={{
        width: '100%',
        padding: '12px 20px',
        fontSize: '16px',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.4)',
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(8px)',
        color: '#fff',
        outline: 'none',
        boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
        transition: '0.4s ease',
      }}
    />
  </div>
);

const CleaningForm = () => {
  const [data, setData] = useState({
    imageLink: '',
    imageName: '',
    phone: '',
    profession: '',
    address: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("https://bdback-5ofz.onrender.com/api/profiles", data);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setData({ imageLink: '', imageName: '', phone: '', profession: '', address: '' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(120deg, #00c6ff, #0072ff)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      animation: 'fadeIn 1.5s ease-in'
    }}>
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes bgMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>

      <div style={{
        maxWidth: '400px',
        width: '100%',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(10px)',
        animation: 'slideIn 1s ease-out',
        color: 'white'
      }}>
        <button
          onClick={() => window.location.href = "/Cleaning_staff_1"}
          style={{
            marginBottom: '15px',
            width: '100%',
            background: 'linear-gradient(to right, #fc466b, #3f5efb)',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            transition: '0.3s',
          }}
        >
          সকল প্রোফাইল দেখুন 🚀
        </button>

        <form onSubmit={handleSubmit}>
          <InputField name="imageLink" value={data.imageLink} onChange={handleChange} placeholder="ইমেজ লিংক" icon="🖼️" />
          <InputField name="imageName" value={data.imageName} onChange={handleChange} placeholder="ইমেজের নাম" icon="🏷️" />
          <InputField name="phone" value={data.phone} onChange={handleChange} placeholder="মোবাইল" icon="📞" />
          <InputField name="profession" value={data.profession} onChange={handleChange} placeholder="পেশা" icon="💼" />
          <InputField name="address" value={data.address} onChange={handleChange} placeholder="ঠিকানা" icon="📍" />

          <button type="submit" style={{
            width: '100%',
            background: 'linear-gradient(45deg, #ff6ec4, #7873f5)',
            padding: '12px',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer',
            transition: '0.3s',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            সাবমিট করুন ✅
          </button>
        </form>

        {success && (
          <div style={{
            marginTop: '15px',
            padding: '10px',
            borderRadius: '10px',
            background: 'rgba(0, 255, 150, 0.2)',
            color: '#00ff9d', 
            textAlign: 'center',
            transition: '0.3s ease'
          }}>
            ✅ ডেটা সফলভাবে সাবমিট হয়েছে!
          </div>
        )}
      </div>
    </div>
  );
};

export default CleaningForm;
