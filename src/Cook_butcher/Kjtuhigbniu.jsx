import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // নতুন লাইন

// ম্যানুয়ালি এড করা প্রোফাইল
const manualProfiles = [
  
  { name: 'নুরুল ইসলাম', phone: '01709158834', profession: 'কসাই', address: 'তামাট বাজার' },
  { name: 'লুৎফর রহমান', phone: '01762152244', profession: 'কসাই', address: 'নারাঙ্গি উথুরা, ভালুকা' },
  { name: 'জহির', phone: '01709158834', profession: 'বাবুর্চি', address: 'ভালুকা' },
  { name: 'তারা মিয়া ( তারেক )', phone: '০১৭৪৫৯৭০৫৩৪', profession: 'কসাই', address: 'ভালুকা উপজেলা স্বাস্থ্য কমপ্লেক্স রোড, ব্রিজ মোড় এ। শাহজালাল গোস্তো বিতান।' },
  { name: 'জুয়েল', phone: '+8801720043197', profession: 'বাবুর্চি', address: 'মেদিলা' },
  { name: 'Mazahar', phone: '+8801847871258', profession: 'কসাই', address: 'মুছার ভিটা' },
  { name: 'সাইদুর কসাই', phone: '+8801716854285', profession: 'কসাই', address: 'জামুর ভিটা' },
  { name: 'আঃ মতিন', phone: '01731151630', profession: 'কসাই', address: 'বরটিলা, কলেজ বাজার' },
  { name: 'মো:উজ্জল মিয়া', phone: '01791952018', profession: 'বাবুর্চি', address: 'রাজৈ ভালুকা' },
  { name: 'মোঃ আব্দুল হামিদ', phone: '01708446664', profession: 'বাবুর্চি', address: 'গ্রাম: নিঝুরী, ইউনিয়ন: মেদুয়ারি' },
  { name: 'খোরশেদ আলম খসরু (mfimsl)', phone: '০১৭৮৩৮০৯৭৮২', profession: 'বাবুর্চি', address: 'আঙ্গারগাড়া, ইস্তারঘাট, ডাকাতিয়া, ভালুকা।' },
  { name: 'কালাম বাবুর্চি', phone: '০১৯৬০১০৯২৪৯', profession: 'বাবুর্চি', address: 'কাশর হবিরবাড়ি ভালুকা ময়মনসিংহ' },
  { name: 'মো ফিরোজ মিয়া', phone: '০১৭৭১৯০৯২১১', profession: 'বাবুর্চি', address: 'পুরুরা' },
  { name: 'সিরাজুল ইসলাম (সিরু)', phone: '+8801722260268', profession: 'কসাই', address: 'জিবনতলা, হবিরবাড়ী, ভালুকা, ময়মনসিংহ' },
  { name: 'মো নুরুল ইসলাম', phone: '01737575740', profession: 'বাবুর্চি', address: 'বাঁশিল ভালুকা' },
  { name: 'রনি , মাহিম, ওয়ালিদ, রুদ্র', phone: '01618062549', profession: 'বাবুর্চি', address: 'বাঁশীল' },
  { name: 'সেলিম কসাই', phone: '01776541458', profession: 'কসাই', address: 'মেদুয়ারী, ভালুকা। মাংসা কাটার জন্য যোগাযোগ করুন।' },
  { name: 'মোঃ খাইরুল ইসলাম (হাক্কুল)', phone: '01720450867', profession: 'বাবুর্চি', address: 'নারাঙ্গী, ১নং উথুরা ইউনিয়ন, ভালুকা, ময়মনসিংহ।' },
  { name: 'মোঃ সাইফুল ইসলাম', phone: '01776622330', profession: 'বাবুর্চি', address: 'মেনজেনা, ১নং উথুরা ইউনিয়ন, ভালুকা, ময়মনসিংহ।' },
  { name: 'মোঃ সাইদুল ইসলাম', phone: '01716616697', profession: 'বাবুর্চি', address: 'নারাঙ্গী, ১নং উথুরা ইউনিয়ন, ভালুকা, ময়মনসিংহ।' },
  { name: 'আবদুল খালেক', phone: '01760309751', profession: 'বাবুর্চি', address: 'ধাইরাপাড়া ভালুকা' },
  { name: 'জামান খান', phone: '+8801795010248', profession: 'বাবুর্চি', address: 'সাতেংগা ভালুকা' },
  


];

const callPhone = (phone) => {
  window.location.href = `tel:${phone}`;
};

const ProfileCard = ({ profile }) => {
  return (
    <div className="card text-center shadow-sm w-100" style={{ borderRadius: "15px", padding: "1px", backgroundColor: "#f9f9f9", border: "1px solid #ddd" }}>
      <img 
        src={profile.image || "https://via.placeholder.com/100"} 
        className="card-img-top rounded-circle mx-auto mt-3" 
        style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid #007bff" }} 
        alt="Profile" 
      />
      <div style={{ padding: "1px 2px", margin: "4px" }} className="card-body">
        <h5 className="card-title" style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#333" }}>{profile.name}</h5>
        <table className="table table-bordered" style={{ fontSize: "0.9rem", backgroundColor: "#fff" }}>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>নাম্বার</td>
              <td>
                {profile.phone}
                <button 
                  className="btn btn-sm btn-outline-success ms-2" 
                  onClick={() => callPhone(profile.phone)}
                  style={{ padding: "1px 5px", fontSize: "0.8rem", fontWeight: "bold" }}
                >
                  <i className="bi bi-telephone-fill"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>ধরন</td>
              <td>{profile.profession || profile.type}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", backgroundColor: "#f1f1f1" }}>ঠিকানা</td>
              <td>{profile.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Kjtuhigbniu = () => {
  const [allProfiles, setAllProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [professionFilter, setProfessionFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://bdback-5ofz.onrender.com/api/users');
        const mongoUsers = res.data.map(user => ({
          name: user.imageName,
          phone: user.phone,
          profession: user.type,
          address: user.address,
          image: user.imageUrl
        }));
        const combined = [...manualProfiles, ...mongoUsers].sort(() => 0.5 - Math.random());
        setAllProfiles(combined);
      } catch (err) {
        console.error("ডেটা আনতে সমস্যা হয়েছে:", err);
        setAllProfiles([...manualProfiles]); // fallback only manual profiles
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = allProfiles.filter(p => {
      const matchProfession = professionFilter === "" || p.profession === professionFilter;
      const matchLocation = locationFilter === "" || p.address === locationFilter;
      const matchName = searchName === "" || p.name.toLowerCase().includes(searchName.toLowerCase());
      return matchProfession && matchLocation && matchName;
    });
    setFilteredProfiles(filtered);
  }, [allProfiles, professionFilter, locationFilter, searchName]);

  const uniqueProfessions = [...new Set(allProfiles.map(p => p.profession))];
  const uniqueLocations = [...new Set(allProfiles.map(p => p.address))];

  return (
    <>
      {/* উপরের টেক্সট */}
      <div className="text-center mt-3 mb-4">
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          লিস্ট করতে এখানে <Link to="/MestiForm" style={{ color: "#007bff", textDecoration: "underline" }}>ক্লীক</Link> করুন
        </span>
      </div>

      <div className="container mt-4">
        {/* ফিল্টার UI */}
        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <select
              className="form-select"
              value={professionFilter}
              onChange={e => setProfessionFilter(e.target.value)}
            >
              <option value="">সব পেশা</option>
              {uniqueProfessions.map((prof, i) => (
                <option key={i} value={prof}>{prof}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-2">
            <select
              className="form-select"
              value={locationFilter}
              onChange={e => setLocationFilter(e.target.value)}
            >
              <option value="">সব ঠিকানা</option>
              {uniqueLocations.map((addr, i) => (
                <option key={i} value={addr}>{addr}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-2">
            <input 
              type="text"
              className="form-control"
              placeholder="নাম দিয়ে খুঁজুন"
              value={searchName}
              onChange={e => setSearchName(e.target.value)}
            />
          </div>
        </div>

        {/* প্রোফাইল কার্ডগুলো */}
        <div className="row g-3">
          {filteredProfiles.map((profile, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <ProfileCard profile={profile} />
            </div>
          ))}
          {filteredProfiles.length === 0 && (
            <div className="text-center text-muted py-5">
              <h5>কোনো প্রোফাইল খুঁজে পাওয়া যায়নি</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Kjtuhigbniu;
