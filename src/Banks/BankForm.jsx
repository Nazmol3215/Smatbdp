import React, { useState } from 'react';
import axios from 'axios';

export default function HotelForm() {
  const [formData, setFormData] = useState({
    imageLink: '',
    imageName: '',
    phone: '',
    address: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.imageLink || !formData.imageName || !formData.phone || !formData.address) {
      alert("⚠️লক্ষ্য করে সকল ঘর পূরণ করুন!");
      return;
    }
    await axios.post('https://bdback-5ofz.onrender.com/hotel/add', formData);
    setSubmitted(true);
    setFormData({ imageLink: '', imageName: '', phone: '', address: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: 'none',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    color: '#fff',
    fontSize: '16px',
    transition: '0.3s ease',
    boxShadow: '0 0 8px rgba(255,255,255,0.2)'
  };

  const placeholderHints = [
    "🖼️ ইমেজ লিংক",
    "🏷️ ইমেজের নাম",
    "📞 মোবাইল নম্বর",
    "📍 ঠিকানা"
  ];

  const buttonStyle = {
    padding: '12px 25px',
    borderRadius: '25px',
    border: 'none',
    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
    boxShadow: '0 0 12px rgba(0, 114, 255, 0.5)',
    transition: 'all 0.3s ease',
  };

  const formContainerStyle = {
    maxWidth: '410px',
    margin: '63px auto',
    padding: '30px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 0 30px rgba(0,0,0,0.2)',
    animation: 'slideFadeIn 1s ease both',
  };

  const pageStyle = {
    minHeight: '100vh',
    padding: '20px',
    background: 'linear-gradient(-45deg, #1d2b64, #f8cdda, #1fa2ff, #a6ffcb)',
    backgroundSize: '400% 400%',
    animation: 'bgAnimation 10s ease infinite',
    color: '#fff',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };

  return (
    <div style={pageStyle}>
      <button
        onClick={() => window.location.href = "/BankList"}
        style={{ ...buttonStyle, position: 'fixed', top: 20, right: 20, zIndex: 1000 }}
      >
        সকল ব্যাংকের লিস্ট দেখুন।
      </button>

      <div style={formContainerStyle}>
        <h2 style={{ marginBottom: '20px' }}>📄 তথ্য জমা ফর্ম</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder={placeholderHints[0]}
            style={inputStyle}
            value={formData.imageLink}
            onChange={e => setFormData({ ...formData, imageLink: e.target.value })}
          />
          <input
            placeholder={placeholderHints[1]}
            style={inputStyle}
            value={formData.imageName}
            onChange={e => setFormData({ ...formData, imageName: e.target.value })}
          />
          <input
            placeholder={placeholderHints[2]}
            style={inputStyle}
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
          <input
            placeholder={placeholderHints[3]}
            style={inputStyle}
            value={formData.address}
            onChange={e => setFormData({ ...formData, address: e.target.value })}
          />

          <button
            type="submit"
            style={{
              ...buttonStyle,
              width: '100%',
              background: submitted
                ? 'linear-gradient(to right, #00b09b, #96c93d)'
                : buttonStyle.background
            }}
          >
            {submitted ? '✅ জমা হয়েছে!' : '📤 জমা দিন'}
          </button>
        </form>

        <button
          onClick={() => window.location.href = "/BankList"}
          style={{ ...buttonStyle, marginTop: '20px', width: '100%', background: 'linear-gradient(to right, #ff758c, #ff7eb3)' }}
        >
          👥 সকল প্রফাইল দেখুন
        </button>
      </div>

      <style>
        {`
          @keyframes slideFadeIn {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bgAnimation {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }

          input:focus {
            outline: none;
            box-shadow: 0 0 15px #fff;
            background: rgba(255,255,255,0.4);
          }

          button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(0,0,0,0.4);
          }

          @media (max-width: 500px) {
            form {
              padding: 10px;
            }
          }
        `}
      </style>
    </div>
  );
}
