import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EnhancedServiceGrid = () => {
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const services = [
    { name: '🩸 এমভি মিনিট', link: '/OfferList', desc: 'অফার লিস্ট' },
    { name: '🩸 ব্লাড ডোনার', link: '/DonorCard_1', desc: 'রক্তদাতার তালিকা' },
    { name: '🛠️ সকল মিস্ত্রী', link: '/Mestiri_1', desc: 'বিভিন্ন পেশার মিস্ত্রী' },
    { name: '🏠 বাসা ভাড়া', link: '/House_rental_1', desc: 'ভাড়া দেওয়ার জন্য বাসা' },
    { name: '🍖 কসাই বাবুর্চি', link: '/Cook_butcher_1', desc: 'খাবার রান্না ও কাটা' },
    { name: '🧹 ক্লিনিং স্টাফ', link: '/Cleaning_staff_1', desc: 'পরিষ্কার কর্মী' },
    { name: '👮 উলামা পরিষদ', link: '/Olama_1', desc: 'উলামা মল্লিক বাড়ি শাখা' },
    { name: '🏥 হাসপাতাল', link: '/Hospitals_Bhaluka_1', desc: 'সেবা প্রদানকারী হাসপাতাল' },
    { name: '🏦 ব্যাংকসমূহ', link: '/BankList', desc: 'উপজেলার ব্যাংক তালিকা' },
    { name: '🩺 ডাক্তার নার্স', link: '/Doctors_Valukka_1', desc: 'স্বাস্থ্যসেবা প্রদানকারী' },
    { name: '🩺 টিউশনি', link: '/TeacherList_1', desc: 'স্বাস্থ্যসেবা প্রদানকারী' },
    { name: '🚑 এ্যাম্বুলেন্স', link: '/Ambulance_1', desc: 'জরুরি পরিবহন সেবা' },
    { name: '🏨 হোটেলসমূহ', link: '/Hotel', desc: 'থাকার জায়গা' },
    { name: '📰 সাংবাদিকগন', link: '/JournalistsList_1', desc: 'সাংবাদিকদের তালিকা' },
    { name: '👮 থানা পুলিশ', link: '/Cleaning_staff_1', desc: 'নিরাপত্তা বাহিনী' },
    { name: '🔥 ফায়ার সার্ভিস', link: '/Fire_service_1', desc: 'অগ্নিনির্বাপন কর্মী' },
    { name: '⚖️ আনজীবী', link: '/Lawyer_1', desc: 'আইনজীবী' },
    { name: '🏛️ উপজেলা', link: '/Bhaluka_Upazila_1', desc: 'প্রশাসনিক অঞ্চল' },
    { name: '🌟 প্রসিদ্ধ ব্যক্তি', link: '/Famous_person', desc: 'উল্লেখযোগ্য ব্যক্তিত্ব' },
    { name: '🏢 উপজেলা প্রশাসন', link: '/UpazilaAdmin_1', desc: 'প্রশাসনের তথ্য' },
    { name: '🏙️ পৌরসভা', link: '/ValukaMunicipality_1', desc: 'পৌর পরিষেবা' },
    { name: '🌾 ইউনিয়ন', link: '/Union_1', desc: 'গ্রামীণ প্রশাসনিক এলাকা' },
  ];

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div
      className="container mt-4"
      style={{
        backgroundColor: darkMode ? '#1e1e1e' : '#f8f9fa',
        minHeight: '100vh',
        transition: 'all 0.3s ease',
        padding: '1px',
      }}
    >
      {/* 🟨 Hero Section */}
      <div
        className="text-center mb-4 p-4"
        style={{
          borderRadius: '20px',
          background: darkMode
            ? 'linear-gradient(to right, #222, #333)'
            : 'linear-gradient(to right, #d4fc79, #96e6a1)',
          color: darkMode ? '#fff' : '#000',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          animation: 'fadeIn 1s ease-in',
        }}
      >
        <h2 style={{ fontWeight: 'bold', fontSize: '22px', marginBottom: '10px' }}>
          স্মার্ট ভালুকায় স্বাগতম 🌟
        </h2>
        <input
          type="text"
          placeholder="সেবা অনুসন্ধান করুন..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            width: '80%',
            maxWidth: '500px',
            padding: '10px 20px',
            borderRadius: '25px',
            border: '2px solid green',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            backgroundColor: darkMode ? '#333' : '#fff',
            color: darkMode ? '#fff' : '#000',
            marginBottom: '1px',
          }}
        />
        <br />
        {/* <Link to="/about">
          <button
            style={{
              backgroundColor: darkMode ? '#28a745' : '#007bff',
              color: '#fff',
              padding: '8px 18px',
              borderRadius: '25px',
              border: 'none',
              marginTop: '10px',
              fontWeight: 'bold',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              cursor: 'pointer',
            }}
          >
            আমাদের সম্পর্কে জানুন
          </button>
        </Link> */}
      </div>

      {/* 🌗 Dark Mode Toggle */}
      <div className="text-end mb-3">
        <button
          className="btn btn-sm"
          style={{
            backgroundColor: darkMode ? '#444' : '#e0ffe0',
            color: darkMode ? '#fff' : '#000',
            borderRadius: '20px',
            padding: '5px 15px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          }}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ লাইট মোড' : '🌙 ডার্ক মোড'}
        </button>
      </div>

      {/* মোট সংখ্যা */}
      {/* <p className="text-center mb-4" style={{ color: darkMode ? '#ccc' : '#333' }}>
        মোট সেবা: <strong>{filteredServices.length}</strong>
      </p> */}

      {/* ✅ সার্ভিস গ্রিড */}
      <div className="row">
        {filteredServices.length > 0 ? (
          filteredServices.map((item, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-3 mb-4"
              style={{
                animation: 'fadeIn 0.6s ease both',
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div
                  className="card text-center position-relative"
                  style={{
                    border: '2px solid green',
                    borderRadius: '20px',
                    background: darkMode
                      ? 'linear-gradient(135deg, #333, #444)'
                      : 'linear-gradient(135deg, #e0ffe0, #ffffff)',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    padding: '1px',
                    color: darkMode ? '#fff' : '#000',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 128, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {index < 3 && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '3px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        fontSize: '10px',
                        padding: '2px 8px',
                        borderRadius: '12px',
                      }}
                    >
                      NEW
                    </span>
                  )}

                  <div className="card-body">
                    <h5 style={{ fontSize: '15px', fontWeight: 'bold' }}>{item.name}</h5>
                    <p style={{ fontSize: '12px', color: darkMode ? '#ccc' : '#6c757d' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-12 text-center text-danger">
            <h6>দুঃখিত, কিছুই পাওয়া যায়নি!</h6>
          </div>
        )}
      </div>

      {/* FadeIn CSS */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default EnhancedServiceGrid;
