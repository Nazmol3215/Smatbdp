import React, { useState, useEffect } from 'react';

const Announcement = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-05-15T11:00:00'); // ১৫ মে সকাল ১১:০০
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      দিন: Math.floor(difference / (1000 * 60 * 60 * 24)),
      ঘণ্টা: Math.floor((difference / (1000 * 60 * 60)) % 24),
      মিনিট: Math.floor((difference / 1000 / 60) % 60),
      সেকেন্ড: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      background: 'linear-gradient(145deg, #f1f8e9, #ffffff)',
      border: '1px solid #c8e6c9',
      borderRadius: '20px',
      padding: '30px 25px',
      maxWidth: '850px',
      margin: '50px auto',
      boxShadow: '0 10px 25px rgba(0, 100, 0, 0.1)',
      fontFamily: "'Noto Sans Bengali', sans-serif",
      color: '#1b5e20',
      lineHeight: '1.9',
      textAlign: 'justify',
      transition: 'all 0.3s ease'
    }}>
      
      {/* Countdown Timer */}
      {timeLeft ? (
        <div style={{
          backgroundColor: '#75ff33',
          padding: '10px',
          borderRadius: '10px',
          textAlign: 'center',
          marginBottom: '20px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#33691e'
        }}>
          ⏳ পরিচিতি সভা শুরু হতে বাকি: {' '}
          {timeLeft.দিন} দিন {timeLeft.ঘণ্টা} ঘণ্টা {timeLeft.মিনিট} মিনিট {timeLeft.সেকেন্ড} সেকেন্ড
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#d32f2f',
          marginBottom: '20px'
        }}>
          ✅ পরিচিতি সভা শুরু হয়ে গেছে!
        </div>
      )}

      <h2 style={{
        textAlign: 'center',
        color: '#2e7d32',
        marginBottom: '25px',
        fontSize: '30px',
        fontWeight: 'bold',
        borderBottom: '2px dashed #a5d6a7',
        paddingBottom: '10px'
      }}>
        ≈ পরিচিতি সভা ≈
      </h2>

      <p style={{ fontSize: '18px', marginBottom: '15px' }}>
        <strong>আসসালামু আলাইকুম ওয়া রহমাতুল্লাহ,</strong>
      </p>

      <p style={{ fontSize: '17px' }}>
        সম্মানিত ইমাম-উলামায়ে কেরামগণ! <br />
        পরিষদের পক্ষ থেকে আপনাদের সকলকে বিশেষ দাওয়াত জানানো যাচ্ছে—{' '}
        <span style={{ fontWeight: 'bold', color: '#33691e' }}>
          ইমাম-উলামা পরিষদ মল্লিক বাড়ি শাখা কমিটির
        </span> সকল সদস্যবৃন্দের এক বিশেষ পরিচিতি সভার আয়োজন করা হয়েছে।
      </p>

      <div style={{
        background: '#f9fbe7',
        border: '1px solid #dcedc8',
        borderRadius: '12px',
        padding: '18px',
        marginTop: '20px',
        marginBottom: '20px'
      }}>
        <p style={{ fontSize: '17px', margin: '10px 0' }}>
          <strong>📍 স্থানঃ</strong> কেরাতুল কোরআন মাদরাসা <br />
          (গুবুদিয়া, সবুজ বাংলা স্কুলের পাশে।)
        </p>
        <p style={{ fontSize: '17px', margin: '10px 0' }}>
          <strong>🕰️ সময়ঃ</strong> আগামী বুধবার (১৪ তারিখ) সকাল ১১ টায় ইনশাআল্লাহ
        </p>
        <p style={{ fontSize: '17px', margin: '10px 0' }}>
          <strong>🍛 বিঃদ্রঃ</strong> দুপুরের খাবার দাওয়াত মাদরাসায় সকলেই শরিক হবো ইনশাআল্লাহ।
        </p>
      </div>

      <p style={{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '18px',
        color: '#1b5e20',
        marginTop: '30px'
      }}>
        অনুগ্রহ করে সবাই গুরুত্ব সহকারে উপস্থিত থেকে <br />
        দাওয়াত গ্রহণ করার জন্য বিনীত আমন্ত্রণ রইলো। <br />
        <span style={{ fontSize: '19px', color: '#33691e' }}>জাযাকুমুল্লাহু খাইরান।</span>
      </p>
    </div>
  );
};

export default Announcement;
