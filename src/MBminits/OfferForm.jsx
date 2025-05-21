import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// রিইউজেবল ইনপুট ফিল্ড কম্পোনেন্ট
function InputField({ label, name, value, onChange, type = "text", required = false, placeholder, emoji }) {
  return (
    <div style={{ marginBottom: 16, width: '100%' }}>
      <label style={{ display: 'block', marginBottom: 6, fontWeight: 'bold', color: '#fff' }}>
        {emoji} {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '10px 15px',
          borderRadius: 10,
          border: 'none',
          outline: 'none',
          fontSize: 16,
          background: 'rgba(255,255,255,0.15)',
          color: '#fff',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          transition: '0.3s ease-in-out',
        }}
      />
    </div>
  );
}

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

      if (res.ok) {
        setMessage('✅ অফার সফলভাবে যোগ করা হয়েছে!');
        setFormData({
          type: 'MB',
          price: '',
          name: '',
          duration: '',
          adminPassword: '',
        });
      } else {
        setMessage(data.message || '❌ কিছু ভুল হয়েছে');
      }
    } catch (error) {
      setMessage('❌ সার্ভার সংযোগে সমস্যা হয়েছে');
    }
  };

  useEffect(() => {
    const bg = document.getElementById('animated-bg');
    let angle = 0;
    const interval = setInterval(() => {
      angle += 0.5;
      bg.style.background = `linear-gradient(${angle}deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb, #a18cd1)`;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* উপরের রাউট বাটন */}
      <div style={{
        position: 'fixed',
        top: 10,
        right: 10,
        zIndex: 999,
        background: '#ffffff20',
        padding: '10px 20px',
        borderRadius: 20,
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      }}>
        <Link to="/OfferList" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
          👉 সকল প্রোফাইল দেখুন
        </Link>
      </div>

      {/* ব্যাকগ্রাউন্ড */}
      <div id="animated-bg" style={{
        minHeight: '100vh',
        padding: 20,
        background: 'linear-gradient(45deg, #ff9a9e, #fad0c4)',
        transition: 'background 1s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        {/* গ্লাস ফর্ম কার্ড */}
        <div style={{
          width: '100%',
          maxWidth: 400,
          background: 'rgba(255,255,255,0.1)',
          borderRadius: 20,
          padding: 30,
          backdropFilter: 'blur(15px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          color: 'white',
          animation: 'fadeSlide 1s ease',
        }}>

          <h2 style={{ textAlign: 'center', marginBottom: 20 }}>✨ নতুন অফার যোগ করুন</h2>
          <form onSubmit={handleSubmit}>
            {/* টাইপ */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 6, fontWeight: 'bold', color: '#fff' }}>
                🔘 ধরনের নির্বাচন করুন:
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: 10,
                  borderRadius: 10,
                  border: 'none',
                  fontSize: 16,
                  background: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <option value="MB">MB</option>
                <option value="Minute">Minute</option>
              </select>
            </div>

            <InputField
              emoji="💰"
              label="মূল্য (৳)"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="যেমন: ২০"
            />
            <InputField
              emoji="🏷️"
              label="অফারের নাম"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="যেমন: ২ জিবি প্যাক"
            />
            <InputField
              emoji="⏳"
              label="মেয়াদ"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              placeholder="যেমন: ৩ দিন"
            />
            <InputField
              emoji="🔒"
              label="এডমিন পাসওয়ার্ড"
              name="adminPassword"
              type="password"
              value={formData.adminPassword}
              onChange={handleChange}
              required
              placeholder="********"
            />

            <button type="submit" style={{
              width: '100%',
              padding: 12,
              border: 'none',
              borderRadius: 10,
              fontSize: 18,
              background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
              color: '#fff',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: '0.3s',
            }}
              onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(to right, #43e97b, #38f9d7)'}
              onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(to right, #ff758c, #ff7eb3)'}
            >
              ➕ অফার যোগ করুন
            </button>

            {/* ভ্যালিডেশন মেসেজ */}
            {message && <p style={{
              marginTop: 15,
              color: message.includes('✅') ? '#00ffcc' : '#ffcccb',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>{message}</p>}
          </form>
        </div>
      </div>

      {/* Keyframe Animation */}
      <style>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
