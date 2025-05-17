import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import jjkmvbgredio1 from "../assets/Images/609-831188.png";
import jjkmvbgredio2 from "../assets/Images/711-988159.png";
import jjkmvbgredio3 from "../assets/Images/722-575152.png";
import jjkmvbgredio4 from "../assets/Images/734-268284.png";
import jjkmvbgredio5 from "../assets/Images/771-907130.png";
import jjkmvbgredio6 from "../assets/Images/naz.png";



// ম্যানুয়ালি এড করা প্রোফাইল
const manualProfiles = [
  { image: jjkmvbgredio4, name: 'মুফতি আব্দুল মালেক', phone: '০১৭৩৪ ২৬৮২৮৪', profession: 'সভাপতি', address: 'মল্লিকবাড়ী' },
  { name: 'মাওলানা মশিউর রহমান', phone: '0110901010', profession: 'সহ', address: 'মল্লিকবাড়ী' },
  { name: 'হাঃ মাও: আব্দুর রহমান', phone: '00101010111', profession: 'সহ: সভাপতি', address: 'মল্লিকবাড়ী' },
  { image: jjkmvbgredio3, name: 'ক্বারী রফিকুল ইসলাম', phone: '০১৭২২৫৭৫১৫২', profession: 'সহ সভাপতি', address: 'ভালুকা' },
  { name: 'মাওলানা আনোয়ার হুসাইন মাহমুদী', phone: '০১৭১৬৫১৫৮৯০', profession: 'সহ সভাপতি', address: 'মামারিশপুর' },
  { name: 'মুফতি আতিকুল ইসলাম', phone: '০১৬৮০২৮৯১৬০', profession: 'সহ সভাপতি', address: 'মামারিশপুর' },
  { name: 'ডা. মাও: নাসির উদ্দিন', phone: '001010101', profession: 'সহ: সভাপতি', address: 'ভালুকা' },
  { image: jjkmvbgredio2,  name: 'মুফতি সালাহ্ উদ্দিন জাহাঙ্গীর', phone: '০১৭১১-৯৮৮১৫৯', profession: 'সাধারণ সম্পাদক', address: 'ধামশুর' },
  { name: 'মুফতি মাসউদুর রহমান', phone: '০১৮৪০ ৩৩৭৭৭৩', profession: 'গোবুদিয়া', address: 'ভালুকা' },
  { name: 'মাওলানা আজিজুল হক', phone: '০১৬২৬৩৪১৬৯১', profession: 'সহ: সাধারণ সম্পাদক', address: 'অয়াবহ' },
  { name: 'মুফতি ইব্রহীম খলীল', phone: '০১৭১৬১৩৮৮৭০', profession: 'যুগ্ম সাধারণ সম্পাদক', address: 'নয়নপুর' },
  { name: 'মুফতি ওমর ফারুক', phone: '017০০০56০০', profession: 'যুগ্ম সাধারণ সম্পাদক', address: 'গাদুমিয়া' },
  { name: 'হাঃ মাও। মনিরুজ্জামান', phone: '01709158834', profession: 'সাংগঠনিক সম্পাদক', address: 'নয়নপুর' },
  { name: 'মুফতি ফুরকার আহমেদ', phone: '01709158834', profession: 'সাংগঠনিক সম্পাদক', address: 'ভায়াবহ' },
  { image: jjkmvbgredio6, name: 'মাওলানা নাজমুল হুদা', phone: '০১৮৯৩৭১৭৮৭৫', profession: 'সহদফতর সম্পাদক', address: 'নয়নপুর' },
  { name: 'মাওলানা রফিকুল ইসলাম', phone: '001010101', profession: 'সহ দফতর সম্পাদক', address: 'ভায়াবহ' },
  { name: 'মুফতি হারুনুর রশিদ', phone: '0101010110', profession: 'প্রচার সম্পাদক', address: 'মল্লিকবাড়ী' },
  { image: jjkmvbgredio1, name: 'হাঃ মাও। আবু বকর', phone: '০১৬০৯৮৩১১৮', profession: 'সহ প্রচার সম্পাদক', address: 'ভালুকা' },
  { name: 'রফিকুল ইসলাম', phone: '01709158834', profession: 'কোষাদক্ষ', address: 'মল্লিকবাড়ী' },
  { image: jjkmvbgredio5, name: 'মোঃ শাহ আলী', phone: '০১৭৭১৯০৭১৩০', profession: 'সহকোষাদক্ষ', address: 'মল্লিকবাড়ী' },
  { name: 'রফিকুল ইসলাম মুন্সী', phone: '০১৭০৭৫৭৪৮৬৪', profession: 'দা ও তা বিষঃ সম্পঃ', address: 'ধামশুর' },
  { name: 'মাও: মাহফুজুল হক', phone: '০১৮৮৯৩৬৯৯৯৪', profession: 'দাওয়াহ ও তালীম বিষঃ সম্পঃ', address: 'মল্লিকবাড়ী' },
  { name: 'মুফতি আবু বকর', phone: '০১৭২২৫৭৫১৫২', profession: 'দওয়াহ ও  প্রশিক্ষণ বিষঃ সম্পাঃ', address: 'মল্লিকবাড়ী' },
  { name: 'মুফতি নাজমুল হাসান', phone: '01709158834', profession: 'সহ দওয়াহ ও  প্রশিক্ষণ সম্পাঃ', address: 'মল্লিকবাড়ী' },
  { name: 'মুফতি শমছুজ্জামান', phone: '01709158834', profession: 'সমাজ কল্যাণ সম্পাদক', address: 'মামারিশপুর' },
  { name: 'মুফতি আফজাল হুসাইন', phone: '01709158834', profession: 'সহ সমাজ কল্যাণ', address: 'সাতেঙ্গা' },
  { name: 'মুফতি বুরহান উদ্দিন', phone: '০১৬১৮৩৪০৫৩২', profession: 'সম্মানিত সদস্য', address: 'নয়নপুর' },
  { name: 'মাওলানা রাকিবুল হাসান', phone: '01709158834', profession: 'সম্মানিত সদস্য', address: 'মল্লিকবাড়ী' },
  { name: 'মাওলানা মাহমুদুল হাসান', phone: '01709158834', profession: 'সম্মানিত সদস্য', address: 'মল্লিকবাড়ী' },
  // ... বাকিগুলো একইভাবে থাকবে
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
              <td>{profile.profession}</td>
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

const Olama = () => {
  const [allProfiles, setAllProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [professionFilter, setProfessionFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const shuffled = [...manualProfiles].sort(() => 0.5 - Math.random());
    setAllProfiles(shuffled);
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
      <div className="text-center mt-3 mb-4">
     <div
  style={{
    maxWidth: "1000px",
    margin: "30px auto",
    padding: "20px",
    background: "#f0fdfa",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  }}
>
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
  {/* বাকি JSX কোড */}
</div>



            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          মূল পেইজ <Link to="/" style={{ color: "#007bff", textDecoration: "underline" }}>হোম</Link> 
        </span> <br />
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          আপনার নাম লিস্ট করতে <Link to="/MestiForm" style={{ color: "#007bff", textDecoration: "underline" }}>ক্লীক</Link> করুন
        </span>
    
      </div>

      <div className="container mt-4">
        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <select className="form-select" value={professionFilter} onChange={e => setProfessionFilter(e.target.value)}>
              <option value="">সব পেশা</option>
              {uniqueProfessions.map((prof, i) => (
                <option key={i} value={prof}>{prof}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-2">
            <select className="form-select" value={locationFilter} onChange={e => setLocationFilter(e.target.value)}>
              <option value="">সব ঠিকানা</option>
              {uniqueLocations.map((loc, i) => (
                <option key={i} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-2">
            <input type="text" className="form-control" placeholder="নাম দিয়ে খুঁজুন" value={searchName} onChange={e => setSearchName(e.target.value)} />
          </div>
        </div>

        <div className="row g-3">
          {filteredProfiles.map((profile, i) => (
            <div key={i} className="col-md-4">
              <ProfileCard profile={profile} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Olama;
