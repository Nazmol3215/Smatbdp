import React from 'react';
import { useNavigate } from 'react-router-dom';

const Component3 = () => {
  const navigate = useNavigate();

  const cardStyle = {
    padding: '20px',
    margin: '10px',
    backgroundColor: '#f0f8ff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: '0.3s',
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#e6f7ff',
    minHeight: '100vh',
  };

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div style={containerStyle}>
        <h3
    style={{
      color: "#005f5f",
      fontWeight: "700",
      fontSize: "24px",
      marginBottom: "20px",
      fontFamily: "'Noto Sans Bengali', sans-serif",
      letterSpacing: "0.5px",
    }}
  >
    ইমাম-উলামা পরিষদ মল্লিক বাড়ি শাখা কমিটির সকল সদস্যবৃন্দের পরিচিতি
  </h3>
      <div style={cardStyle} onClick={() => handleClick('/about-us')}>আমাদের সম্পর্কে বিস্তারিত।</div>
      <div style={cardStyle} onClick={() => handleClick('/Olama')}>আমাদে সকল সদস্যের তালিকা</div>
      <div style={cardStyle} onClick={() => handleClick('/completed-works')}>আমরা যে কাজগুলো  সম্পূর্ণ করেছি।</div>
      <div style={cardStyle} onClick={() => handleClick('/Announcement')}>গুরুত্বপূর্ণ নোটিশ</div>
      <div style={cardStyle} onClick={() => handleClick('/assemblies')}>সমাবেশগুলো</div>
      <div style={cardStyle} onClick={() => handleClick('/speeches')}>বক্তব্য সমগ্র</div>
    </div>
  );
};

export default Component3;
