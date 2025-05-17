import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get("https://bdback-5ofz.onrender.com/api/teachers").then(res => setTeachers(res.data));
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    padding: '40px 20px',
    background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '25px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const cardStyle = {
    width: '320px',
    borderRadius: '18px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
    color: '#111',
    transition: 'transform 0.3s ease',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    borderRadius: '15px',
    objectFit: 'cover',
    marginBottom: '15px',
    boxShadow: '0 6px 14px rgba(0, 0, 0, 0.3)',
  };

  const headingStyle = {
    fontSize: '22px',
    fontWeight: '700',
    margin: '10px 0 15px',
    color: '#1a1a1a',
    textAlign: 'center',
    borderBottom: '2px solid #555',
    paddingBottom: '6px',
  };

  const infoGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginBottom: '15px',
  };

  const infoItemStyle = {
    fontSize: '15px',
    padding: '8px',
    background: '#f9f9f9',
    borderRadius: '10px',
    borderBottom: '2px solid #333',
    boxShadow: 'inset 0 -2px 0 rgba(0,0,0,0.3)',
  };

  const phoneStyle = {
    display: 'block',
    marginTop: '10px',
    padding: '12px 16px',
    background: 'linear-gradient(to right, #36d1dc, #5b86e5)',
    color: '#fff',
    borderRadius: '12px',
    textDecoration: 'none',
    fontWeight: 'bold',
    textAlign: 'center',
    boxShadow: '0 6px 14px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={containerStyle}>
      <p style={{ width: '100%', textAlign: 'center', marginBottom: '30px', fontSize: '18px' }}>
        লস্টি করতে <Link to="/TeacherForm" style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>ক্লীক</Link> করুন
      </p>
      {teachers.map((t) => (
        <div key={t._id} style={cardStyle}>
          <img src={t.imageLink} alt={t.imageName} style={imageStyle} />
          <h3 style={headingStyle}>{t.imageName}</h3>
          <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#333', textAlign: 'center', marginBottom: '15px', background: '#d9f2ff', padding: '8px', borderRadius: '8px' }}>📚 পড়াতে চাই</h3>
          <div style={infoGridStyle}>
            <div style={infoItemStyle}>📛 লেখাপড়ার কলেজ: {t.title}</div>
            <div style={infoItemStyle}>🏷️ শিক্ষাগত যোগ্যতা: {t.position}</div>
            <div style={infoItemStyle}>🎓 শিক্ষা প্রতিষ্ঠান: {t.education}</div>
            <div style={infoItemStyle}>💼 অভিজ্ঞতা: {t.experience}</div>
            <div style={infoItemStyle}>📘 বিষয়: {t.subject}</div>
            <div style={infoItemStyle}>🏫 শ্রেণি: {t.classLevel}</div>
            <div style={infoItemStyle}>📍 অবস্থান: {t.location}</div>
          </div>
          <a href={`tel:${t.phone}`} style={phoneStyle}>📞 ফোন: {t.phone}</a>
        </div>
      ))}
    </div>
  );
};

export default TeacherList;
