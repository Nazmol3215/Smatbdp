import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // React Router থেকে Link ইমপোর্ট করা হয়েছে
import diojgn1 from "../assets/Images/shad.png";
import diojgn2 from "../assets/Images/seven.png";
import diojgn3 from "../assets/Images/sarabala.png";
import diojgn4 from "../assets/Images/sapnabilas.png";
import diojgn5 from "../assets/Images/rajdani.png";
import diojgn6 from "../assets/Images/matirhotel.png";
import diojgn7 from "../assets/Images/kafa.png";
import diojgn8 from "../assets/Images/foodpara.png";
import diojgn9 from "../assets/Images/cityGarden2.png";


export default function Hotel() {
  const manualProfiles = [
    {
      _id: 'm1',
      imageLink: diojgn5,
      imageName: 'হোটেল রাজধানী, ভালুকা',
      phone: '01708-160168',
      address: 'ভালুকা হৃদয় সুপার মার্কেট, ভালুকা',
    },
    {
      _id: 'm2',
      imageLink: diojgn1,
      imageName: 'হোটেল স্বাদ, ভালুকা',
      phone: '01700000002',
      address: 'ভালুকা ',
    },
    {
      _id: 'm3',
      imageLink: diojgn2,
      imageName: 'হোটেল সেভেন স্টার, ভালুকা',
      phone: '০১৭৪৬-১২৬৫৬৩',
      address: 'ভালুকা বাজার রোড,ভালুকা',
    },
    {
      _id: 'm4',
      imageLink: diojgn3,
      imageName: 'সারাবেলা ফুড গার্ডেন, ফাস্ট ফুড',
      phone: '01700000002',
      address: 'চন্দ্রা মোড়, ভালুকা',
    },
    {
      _id: 'm5',
      imageLink: diojgn4,
      imageName: 'স্বপ্ন বিলাস রেস্টুরেন্ট',
      phone: '01700000002',
      address: 'ভালুকা বাসস্ট্যান্ড রাস্তার পূর্ব পাশে, ভালুকা',
    },
    {
      _id: 'm6',
      imageLink: diojgn6,
      imageName: 'মাটির হোটেল',
      phone: '01708-457116',
      address: 'সালাউদ্দিন প্লাজা মোহাম্মদিয়া হাসপাতাল সংলগ্ন, ভালুকা',
    },
    {
      _id: 'm7',
      imageLink: diojgn7,
      imageName: 'ডক্টরস ক্যাফে',
      phone: '09022 56120',
      address: 'ভালুকা বাসস্ট্যান্ড রাস্তার পূর্বে, ভালুকা',
    },
    {
      _id: 'm8',
      imageLink: diojgn8,
      imageName: 'ফুড প্যারাডাইস রেস্টুরেন্ট এন্ড বিরিয়ানি হাউস',
      phone: '01737-728778',
      address: 'চন্দ্রা মোড়, ভালুকা',
    },

    {
      _id: 'm9',
      imageLink: diojgn9,
      imageName: 'তানভীর গেস্ট হাউস,আবাসিক হোটেল',
      phone: '0170********2',
      address: 'সেভেন স্টারের সাথে, ভালুকা',
    },
    {
      _id: 'm8',
      // imageLink: diojgn8,
      imageName: 'সারাবেলা আবাসিক হোটেল,আবাসিক হোটেল',
      phone: '018550240095',
      address: 'নতুন বাসস্ট্যান্ড, ভালুকা, ভালুকা',
    },
    {
      _id: 'm9',
      // imageLink: diojgn9,
      imageName: 'হোটেল নিরব,আবাসিক হোটেল',
      phone: '01700000002',
      address: 'সারাবেলা হক মার্কেট',
    },
    {
      _id: 'm8',
      // imageLink: diojgn8,
      imageName: 'হোটেল উত্তরা,আবাসিক হোটেল',
      phone: '০১৭১১-১৮৯৯০৯',
      address: 'ভালুকা বাসস্ট্যান্ডেের পশ্চিম পাশে, ভালুকা',
    },
    {
      _id: 'm9',
      // imageLink: diojgn9,
      imageName: 'হোটেল নদী বাংলা, আবাসিক হোটেল',
      phone: '০১৭১৬-৭৭২১৪৬',
      address: 'ভালুকা পাচ রাস্তার মোড় ব্রীজ সংলগ্ন, ভালুকা',
    },
  ];

  const [data, setData] = useState(manualProfiles);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/hotel/all')
      .then(res => {
        const allData = [...manualProfiles, ...res.data];
        setData(allData);
      })
      .catch(err => {
        console.log('ডেটা আনার সময় সমস্যা:', err);
      });
  }, []);

  const filteredData = data.filter(item =>
    item.imageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', backgroundColor: '#f7f9fc', minHeight: '100vh' }}>

      {/* New top text line with link */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
     হোটেল বা আবাসিক হোটেল এর তথ্য যোগ করতে  <br />
        <Link to="/HotelForm" style={{
          fontSize: '16px',
          color: '#007bff',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          ক্লীক করুন
        </Link>
      </div>

      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>ব্যাংক সমূহের তালিকা</h2>

      <input
        type="text"
        placeholder="ব্যাংকের নাম বা ঠিকানা দিয়ে খুঁজুন..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '400px',
          display: 'block',
          margin: '0 auto 30px auto',
          padding: '10px 15px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px' 
      }}>
        {filteredData.map(item => (
          <div key={item._id} style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            textAlign: 'center',
            transition: 'transform 0.3s',
          }}>
            <img 
              src={item.imageLink} 
              alt={item.imageName} 
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
            />
            <h3 style={{ margin: '15px 0 10px', color: '#2c3e50' }}>{item.imageName}</h3>
            <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>ফোন:</strong> {item.phone}</p>
            <p style={{ margin: '5px 0', fontSize: '14px' }}><strong>ঠিকানা:</strong> {item.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
