import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // React Router থেকে Link ইমপোর্ট করা হয়েছে
import diojgn1 from "../assets/Images/aggonipnf.jpg";
import diojgn2 from "../assets/Images/anser.png";
import diojgn3 from "../assets/Images/bank-asia.png";
import diojgn4 from "../assets/Images/brack.png";
import diojgn5 from "../assets/Images/first.png";
import diojgn6 from "../assets/Images/islami.png";
import diojgn7 from "../assets/Images/jonata.png";
import diojgn8 from "../assets/Images/kisi.png";
import diojgn9 from "../assets/Images/kormosoition.png";
import diojgn11 from "../assets/Images/nasanal.png";
import diojgn12 from "../assets/Images/nrc.png";
import diojgn13 from "../assets/Images/povali.png";
import diojgn14 from "../assets/Images/premium.png";
import diojgn15 from "../assets/Images/sahgalala.png";
import diojgn16 from "../assets/Images/sonali.png";
import diojgn17 from "../assets/Images/uttrapng.jpg";

export default function BankList() {
  const manualProfiles = [
    {
      _id: 'm1',
      imageLink: diojgn5,
      imageName: 'ফার্স্ট সিকিউরিটি ইসলামী ব্যাংক, ভালুকা',
      phone: '01708-160168',
      address: 'ভালুকা হৃদয় সুপার মার্কেট',
    },
    {
      _id: 'm2',
      imageLink: diojgn1,
      imageName: 'অগ্রণী ব্যাংক লিমিটেড',
      phone: '01700000002',
      address: 'ভালুকা হক মার্কেট',
    },
    {
      _id: 'm3',
      imageLink: diojgn2,
      imageName: 'আনসার বিডিপি উন্নয়ন ব্যাংক',
      phone: '০১৭৪৬-১২৬৫৬৩',
      address: 'ভালুকা বাজার রোড,মধ্য বাজার তালুকদার প্লাজা, ভালুকা',
    },
    {
      _id: 'm4',
      imageLink: diojgn3,
      imageName: 'সেবা ব্যাংক',
      phone: '01700000002',
      address: 'চন্দ্রা মোড়, ভালুকা',
    },
    {
      _id: 'm5',
      imageLink: diojgn4,
      imageName: 'ব্র্যাক ব্যাংক',
      phone: '01700000002',
      address: 'ভালুকা বাসস্ট্যান্ড রাস্তার পূর্ব পাশে, ভালুকা',
    },
    {
      _id: 'm6',
      imageLink: diojgn6,
      imageName: 'ইসলামী ব্যাংক বাংলাদেশ পিএলসি',
      phone: '01708-457116',
      address: 'সালাউদ্দিন প্লাজা মোহাম্মদিয়া হাসপাতাল সংলগ্ন, ভালুকা',
    },
    {
      _id: 'm7',
      imageLink: diojgn7,
      imageName: 'জনতা ব্যাংক লিমিটেড',
      phone: '09022 56120',
      address: 'ভালুকা বাসস্ট্যান্ড রাস্তার পূর্ব পাশে গফরগাঁও রোড, ভালুকা',
    },
    {
      _id: 'm8',
      imageLink: diojgn8,
      imageName: 'বাংলাদেশ কৃষি ব্যাংক',
      phone: '01737-728778',
      address: 'চন্দ্রা মোড়, ভালুকা',
    },
    {
      _id: 'm9',
      imageLink: diojgn9,
      imageName: 'কর্মসংস্থান ব্যাংক',
      phone: '01700000002',
      address: 'ভালুকা কৃষি ব্যাংক সংলগ্ন, ভালুকা',
    },
    {
      _id: 'm10',
      imageLink: diojgn11,
      imageName: 'ন্যাশনাল ব্যাংক লিমিটেড',
      phone: '01713-425942',
      address: 'ভালুকা আসাদ মার্কেট বাজার রোড, ভালুকা',
    },
    {
      _id: 'm11',
      imageLink: diojgn12,
      imageName: 'এনআরবিসি ব্যাংক ভালুকা সাব-ব্রাঞ্চ',
      phone: '01766-098909',
      address: 'ভালুকা প্লাজা',
    },
    {
      _id: 'm12',
      imageLink: diojgn13,
      imageName: 'পূবালী ব্যাংক লিমিটেড',
      phone: '01987-706859',
      address: 'ভালুকা রায় মার্কেট বাজার রোড, ভালুকা',
    },
    {
      _id: 'm13',
      imageLink: diojgn14,
      imageName: 'প্রিমিয়ার ব্যাংক',
      phone: '01700000002',
      address: 'ভালুকা হক মার্কেট, ভালুকা',
    },
    {
      _id: 'm14',
      imageLink: diojgn15,
      imageName: 'শাহজালাল ইসলামী ব্যাংক লিমিটেড',
      phone: '017 55556154',
      address: 'ভালুকা বাজার রোড, ভালুকা',
    },
    {
      _id: 'm15',
      imageLink: diojgn16,
      imageName: 'সোনালী ব্যাংক লিমিটেড',
      phone: '01700000002',
      address: 'ভালুকা পৌরসভা মার্কেট. ভালুকা',
    },
    {
      _id: 'm16',
      imageLink: diojgn17,
      imageName: 'উত্তরা ব্যাংক পিএলসি, ভালুকা ব্রাঞ্চ',
      phone: '01700000003',
      address: 'ভালুকা বাজার রোড',
    }
  ];

  const [data, setData] = useState(manualProfiles);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://bdback-5ofz.onrender.com/bank/all')
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
      ব্যাংক সম্পর্কিত তথ্য জমা দিতে  
        <Link to="/BankForm" style={{
          fontSize: '16px',
          color: '#007bff',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          ক্লীক করুন
        </Link>
      </div>

      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>ব্যাংক তালিকা</h2>

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
