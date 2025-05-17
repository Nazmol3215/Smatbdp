import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom"; // এটিকে অ্যাড করা হয়েছে

// স্ট্যাটিক প্রোফাইল ডেটা
const staticProfiles = [
  { name: 'মোঃ আরিফ মোল্লা', phone: '01308488451', profession: 'রাজমিস্ত্রী', address: '১ নং ওয়ার্ড, মোল্লা পাড়া, ভালুকা, ময়মনসিংহ' },
  { name: 'রুবেল হুসাইন', phone: '01631504844', profession: 'রং মিস্ত্রি', address: 'ভালুকা' },
  { name: 'হামিদ মিয়া', phone: '01626869920', profession: 'ইলেকট্রিক মিস্ত্রি', address: 'Seedstore Bhaluka' },
  { name: 'মোঃ মনিরুজ্জামান', phone: '01680880975', profession: 'ইলেকট্রিক মিস্ত্রি', address: 'মেহেরাবারী সিডস্টোর বাজার' },
  { name: 'মো: রেদুয়ান শেখ', phone: '01639741201', profession: 'ইলেকট্রিক মিস্ত্রি', address: 'পূর্ব ভালুকা' },
  { name: 'Shamaul Alam', phone: '01957503751', profession: 'রাজমিস্ত্রী', address: 'হাজির বাজার, ভালুকা' },
  { name: 'মোঃ বিল্লাল হোসেন', phone: '01720819105', profession: 'ইলেকট্রিক মিস্ত্রি, স্যানিটারি মিস্ত্রি', address: 'বাটাজোর, ভালুকা' },
  { name: 'নিজাম উদ্দিন', phone: '01728516692', profession: 'স্যানিটারি মিস্ত্রি', address: 'সিডষ্টোর বাজার' },
  { name: 'মোঃ সহিদুল ইসলাম', phone: '০১৭৪১৩২৫১৯১', profession: 'কাঠমিস্ত্রী', address: 'উথুরা, ভালুকা' },
  { name: "মোঃ সোহেল রানা", phone: "০১৭২০২৩০৯৫৬", profession: "ইলেকট্রিক মিস্ত্রি, স্যানিটারি মিস্ত্রি", address: "ভালুকা" },
  { name: "ASHRAFUL ISLAM JOY", phone: "01742219898", profession: "ইলেকট্রিক মিস্ত্রি", address: "ভালুকা" },
  { name: "মো: বিপ্লব হোসাইন", phone: "01305748339", profession: "রাজমিস্ত্রী", address: "৩ নং ভরাডোবা ইউনিয়ন" },
  { name: "M.Rana", phone: "01832178333", profession: "কম্পিউটার মিস্ত্রি", address: "Square Masterbari" },
  { name: "কাজল মিয়া", phone: "01879114272", profession: "টাইলস মিস্ত্রি", address: "বাশিল, ভালুকা" },
  { name: "মোঃ ফরহাদ হুসাইন ফাহাদ", phone: "01323666030", profession: "ইলেকট্রিক মিস্ত্রি", address: "সিডস্টোর, ভালুকা" },
  { name: "মোঃ পারভেজ মিয়া", phone: "01729793602", profession: "ইলেকট্রিক মিস্ত্রি", address: "ধামশুর, ভালুকা" },
  { name: "মোঃ ফরহাদ হোসেন", phone: "01986084400", profession: "ইলেকট্রিক মিস্ত্রি", address: "খোলাবাড়ী, উথুরা,ভালুকা, ময়মনসিংহ" },
  { name: "মোঃ রায়হান শরিফ", phone: "01641821083", profession: "থাই গ্লাস মিস্ত্রি", address: "লবণকোঠা,হবিরবাড়ী,ভালুকা," },
  { name: "Palash Sarkar", phone: "01703-413302", profession: "ইলেকট্রিক মিস্ত্রি", address: "Dhamshur,Mollikbari,Bhaluka" },
  { name: "মাধব বাবু", phone: "01724400594", profession: "কাঠমিস্ত্রী", address: "বর্তা, ভালুকা, ময়মনসিংহ" },
  { name: "মোঃ সবুজ মিয়া", phone: "01637832076", profession: "স্যানিটারি মিস্ত্রি", address: "পাঁচ রাস্তার মোড়, ভালুকা, ময়মনসিংহ" },
  { name: "রুবেল মিয়া", phone: "01722081814", profession: "রাজমিস্ত্রী", address: "৭ নং ওয়ার্ড , গজারি খাল রোড,ভালুকা পৌরসভা" },
  { name: "আশিকুল ইসলাম আশিক", phone: "01962169279", profession: "ইলেকট্রিক মিস্ত্রি, রং মিস্ত্রি", address: "2 নং ওয়ার্ড ভালকা পৌরসভা" },
  { name: "MD Faruk", phone: "01622805237", profession: "রং মিস্ত্রি", address: "kathali, Bhaluka" },
  { name: "ঘোড়া শহীদ", phone: "0 1927-310722", profession: "রং মিস্ত্রি", address: "খাওরাইল, ভালুকা" },
  { name: "Sk Sabbier Khan", phone: "01984562132", profession: "সিসি ক্যামেরা মিস্ত্রি", address: "Seadstore bazar shamla taher plaza 2nd Floor Shop no 2" },
  { name: "মো: জুলহাস উদ্দিন", phone: "01748098782", profession: "রাজমিস্ত্রী", address: "ভাওয়ার মোড় ভালুকা" },
  { name: "কাউসার আহমেদ", phone: "০১৫১১১৩৩৫৫১", profession: "ইলেকট্রিক মিস্ত্রি, স্যানিটারি মিস্ত্রি", address: "বাটাজোর রোড,সিডষ্টোর বাজার" },
  { name: "মেহেদী হাসান", phone: "01600246919", profession: "রাজমিস্ত্রী", address: "জেলাঃ ময়মনসিংহ থানাঃ ভালুকা ইউনিয়নঃ ডাকাতিয়া গ্রামঃ চানপুর ওয়ার্ড নংঃ ৯" },
  { name: "মোঃ আতিকুল ইসলাম", phone: "01727432287", profession: "স্যানিটারি মিস্ত্রি", address: "ভালুকা পাঁচ রাস্তার মোড়" },
  { name: "ফরহাদ ইলেকট্রিক ইঞ্জিনিয়ারিং ওয়ার্কশপ", phone: "01323-666030", profession: "ইলেকট্রিক মিস্ত্রি", address: "সীডষ্টোর বাজার, ভালুকা, ময়মনসিংহ" },
  { name: "জালাল উদ্দীন", phone: "01743150393", profession: "রাজমিস্ত্রী", address: "পাড়াগাও, ভালুকা" },
  { name: "মোঃ সজীব", phone: "01403508999", profession: "টাইলস মিস্ত্রি", address: "স্কয়ার মাস্টারবাড়ি" },
  { name: "রাসেল", phone: "01789044193", profession: "ইলেকট্রিক মিস্ত্রি", address: "মল্লিকবাড়ী, ভালুকা" },
  { name: "জাহিদুল ইসলাম নাছির", phone: "01609339360", profession: "ইলেকট্রিক মিস্ত্রি", address: "ভালুকা, মটর মিস্ত্রি" },
  { name: "দেলোয়ার", phone: "01721122447", profession: "রাজমিস্ত্রী, রং মিস্ত্রি", address: "সোনাখালী, ভালুকা। ঠিকাদার" },
  { name: "Md Aftab Ahmed", phone: "01914456006", profession: "থাই গ্লাস মিস্ত্রি", address: "সিডষ্টোর বাজার" },
  { name: "খাদেমুল ইসলাম বাবুল", phone: "01680347453", profession: "ইলেকট্রিক মিস্ত্রি", address: "ভালুকা" },
  { name: "Md Aftab Ahmed", phone: "01914456006", profession: "থাই গ্লাস মিস্ত্রি", address: "সিডষ্টোর বাজার" },
  { name: "নুরুল ইসলাম", phone: "01709158834", profession: "কসাই", address: "তামাট বাজার" },
  { name: "মোঃ সাব্বির হোসেন", phone: "01720382210", profession: "LED TV টেকনিশিয়ান", address: "সিডষ্টোর বাজার, ভালুকা ময়মনসিংহ" },
  { name: "মোঃ শাকিল", phone: "01754909394", profession: "থাই গ্লাস মিস্ত্রি", address: "সিডস্টোর, ভালুকা।" },
  { name: "মোঃ সাব্বির হোসেন", phone: "01720382210", profession: "টিভি মিস্ত্রি", address: "সিডষ্টোর বাজার, ভালুকা, ময়মনসিংহ" },
  { name: "মোঃ ইদ্রিস আলী", phone: "01720006155", profession: "রাজমিস্ত্রী", address: "১নং ওয়ার্ড,কোট ভবনের পিছনে ভালুকা পৌরসভা,ভালুকা ময়মনসিংহ" },
  { name: "মোঃ মোকছেদুল মন্ডল", phone: "01975135461", profession: "কাঠমিস্ত্রী", address: "ভালুকা সরকারি হাসপাতাল রোড,ভালুকা পৌরসভা।" },
  { name: "মো: আনচারুল হক", phone: "01923836959", profession: "ইলেক্ট্রিশিয়ান", address: "ভালুকা, হবির বাড়ি, বেলাসিয়া পাড়া ৯ নং ওয়াড" },
  { name: "Forhad", phone: "01857105059", profession: "রং মিস্ত্রি", address: "সীডস্টোর, ভালুকা, ময়মনসিংহ" },
  { name: "অপু", phone: "01960152465", profession: "টাইলস মিস্ত্রি", address: "মল্লিকবাড়ী, ভালুকা।" },
  { name: "মোঃ সাইফুল ইসলাম", phone: "01763067232, 01723477019", profession: "কাঠমিস্ত্রী", address: "নারাঙ্গী চৌরাস্তা, ১নং উথুরা ইউনিয়ন, ভালুকা, ময়মনসিংহ।" },
  { name: "মোঃ লুৎফর রহমান (লুৎফর)", phone: "01762152244", profession: "কসাই", address: "নারাঙ্গী চৌরাস্তা, ১নং উথুরা ইউনিয়ন, ভালুকা, ময়মনসিংহ।" },
  { name: "Md.Momin Mia", phone: "01867386600", profession: "এসি মিস্ত্রি, ফ্রিজ মিস্ত্রি, সিসি ক্যামেরা মিস্ত্রি, ইলেকট্রিশিয়ান", address: "Mymensingh Valuka" },
  { name: "মোঃ হারুন অর রশিদ (হারুন)", phone: "01749941114", profession: "কাঠমিস্ত্রী", address: "নারাঙ্গী চৌরাস্তা, ১নং উথুরা ইউনিয়ন, ভালুকা, ময়মনসিংহ।" },
  { name: "আশরাফুল ইসলাম", phone: "01738296179", profession: "থাই গ্লাস মিস্ত্রি, ইন্টেরিয়র ডিজাইন", address: "শেখ সুপার মার্কেট,ভালুকা মল্লিকবাড়ী রোড,ভালুকা, ময়মনসিংহ।" },
  { name: "খাইরুল ইসলাম", phone: "01954079601", profession: "কাঠমিস্ত্রী", address: "পাড়াগাঁও,সীডষ্টোর বাজার,ভালুকা ময়মনসিংহ" },
  { name: 'মো: আমিনুল ইসলাম', phone: '01747733172', profession: 'ইলেকট্রিক মিস্ত্রি', address: 'ভালুকা বাজার সরকার অনুমোদিত লাইসেন্স প্রাপ্ত ইলেকট্রিশিয়ান ক্যাটাগরি বি, সি' },
  { name: 'Md Sharif Hossain', phone: '01775479654', profession: 'ইলেকট্রিক মিস্ত্রি, এসি মিস্ত্রি', address: 'Bharaduba, Bhaluka, Mymensingh' },
  { name: 'মো: রিপন মিয়া', phone: '01911142137', profession: 'ইলেকট্রিক মিস্ত্রি, গ্যাস মিস্ত্রি, স্যানিটারি মিস্ত্রি, ইলেক্ট্রিশিয়ান', address: 'চান্দেরবাজার, স্কয়ার মাস্টারবাড়ী,ভালুকা,ময়মনসিংহ' },
  { name: 'MD AKASH MAHMUD', phone: '01774914714', profession: 'সিসি ক্যামেরা মিস্ত্রি', address: 'ভালুকা ময়মনসিংহ' },
  { name: 'মোহাম্মদ আলী', phone: '01752424539', profession: 'কাঠমিস্ত্রী', address: 'মেদুয়ারী, ভালুকা' },
  { name: 'জামান মিয়া(মোটরসাইকেল মিস্ত্রি)', phone: '01799976414', profession: 'গাড়ির মিস্ত্রি', address: 'ধামশুর, মল্লিকবাড়ী,ভালুকা, ময়মনসিংহ' },
  { name: 'মোঃ রাজিব আহসান', phone: '01711147409', profession: 'রাজমিস্ত্রী', address: 'Bhaluka Upazila' },
  { name: 'সুজন রং', phone: '0 1911-069760', profession: 'রং মিস্ত্রি', address: 'ভালুকা' },
  { name: 'রবিন', phone: '01933995314', profession: 'ইলেকট্রিক মিস্ত্রি', address: 'উথুরা' },
  { name: 'মোঃ ইসহাক মিয়া', phone: '01726227151', profession: 'রাজমিস্ত্রী', address: 'ধামশুর,ভালুকা' },
  { name: 'আশরাফুল আহমেদ', phone: '01615834755', profession: 'স্যানিটারি মিস্ত্রি', address: 'চানপুর, আংগারগাড়া,ভালুকা' },
  { name: 'SK,KABIR HOSSAIN', phone: '01892161842', profession: 'ইলেকট্রিক মিস্ত্রি', address: '১নং উথুরা ইউনিয়ন ভালুকা' },
  { name: 'সাব্বির', phone: '01620978979', profession: 'সিসি ক্যামেরা মিস্ত্রি', address: 'ভালুকা ময়মনসিংহ' },
  { name: 'রফিকুল ইসলাম', phone: '01629182200', profession: 'রাজমিস্ত্রী', address: 'ভালুকা মোচার ভিটা' },
  { name: 'কামরুল হাসান', phone: '01626105775', profession: 'রং মিস্ত্রি, স্যানিটারি মিস্ত্রি', address: 'কাঁঠালী, ভালুকা।' },
  { name: 'আনছারুল ইসলাম(কনটেকটার)', phone: '01714911545', profession: 'রাজমিস্ত্রী', address: 'ভালুকা থানার মোড়' },
  { name: 'কামাল উদ্দিন', phone: '01739765079', profession: 'রাজমিস্ত্রী, রং মিস্ত্রি', address: 'C92M+6W5, Bhaluka, Bangladesh' },
  { name: 'Nor islam', phone: '01727911107', profession: 'স্যানিটারি মিস্ত্রি', address: 'সরকার সেনেটারী পাঁচ রাস্তার মোড় রায় মার্কেট ভালুকা' },
  { name: 'সজীব মিয়া', phone: '01701869638', profession: 'স্যানিটারি মিস্ত্রি', address: 'সরকার সেনেটারী রায় মার্কেট ভালুকা' },
  { name: 'Ali akbor', phone: '01932744260', profession: 'সিসি ক্যামেরা মিস্ত্রি, ইলেকট্রিশিয়ান', address: 'Uthura bazar,Bhaluka,Mymensingh' },
  { name: 'মোঃ আমিনুল ইসলাম', phone: '01774928256', profession: 'তেল চেঞ্জ মিস্ত্রি', address: 'ভালুকা, ময়মনসিংহ' },
  { name: 'মোহাম্মদ সোহেল', phone: '01670700658', profession: 'সিসি ক্যামেরা মিস্ত্রি', address: 'ভালুকা, ময়মনসিংহ' },
  { name: 'মোঃ মঈন উদ্দিন', phone: '01775527930', profession: 'রাজমিস্ত্রী, রং মিস্ত্রি', address: 'ফলবানী, ভালুকা' },
  { name: 'মহিউল ইসলাম', phone: '01741004457', profession: 'ইলেকট্রিক মিস্ত্রি', address: 'চান্দ্রা ভালুকাাুিার বাজার' },
  { name: "আশরাফুল ইসলাম", phone: "01738296179", profession: "থাই গ্লাস মিস্ত্রি, ইন্টেরিয়র ডিজাইন", address: "শেখ সুপার মার্কেট,ভালুকা মল্লিকবাড়ী রোড,ভালুকা, ময়মনসিংহ।" },
  { name: "খাইরুল ইসলাম", phone: "01954079601", profession: "কাঠমিস্ত্রী", address: "পাড়াগাঁও,সীডষ্টোর বাজার,ভালুকা ময়মনসিংহ" },
  { name: 'মো: আমিনুল ইসলাম', phone: '01747733172', profession: 'ইলেকট্রিক মিস্ত্রি', address: 'ভালুকা বাজার সরকার অনুমোদিত লাইসেন্স প্রাপ্ত ইলেকট্রিশিয়ান ক্যাটাগরি বি, সি' },
  { name: 'Md Sharif Hossain', phone: '01775479654', profession: 'ইলেকট্রিক মিস্ত্রি, এসি মিস্ত্রি', address: 'Bharaduba, Bhaluka, Mymensingh' },
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

const UserList = () => {
  const [allProfiles, setAllProfiles] = useState([]);
  const [shuffledProfiles, setShuffledProfiles] = useState([]);
  const [professionFilter, setProfessionFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    // API থেকে ডেটা আনা এবং স্ট্যাটিক ডেটার সাথে যুক্ত করা
    axios.get("https://bdback-5ofz.onrender.com/api/users")
      .then(res => {
        const apiProfiles = res.data.map(user => ({
          name: user.name,
          phone: user.number,
          profession: user.type,
          address: user.address,
          image: user.image
        }));

        const combined = [...staticProfiles, ...apiProfiles];
        setAllProfiles(combined);

        // এলোমেলো করে সেট করা
        const shuffled = [...combined].sort(() => 0.5 - Math.random());
        setShuffledProfiles(shuffled);
      })
      .catch(err => {
        console.error("Error fetching users:", err);
        // শুধু স্ট্যাটিক ডেটা যদি API কাজ না করে
        const shuffled = [...staticProfiles].sort(() => 0.5 - Math.random());
        setAllProfiles(staticProfiles);
        setShuffledProfiles(shuffled);
      });
  }, []);

  const uniqueProfessions = [...new Set(allProfiles.map(p => p.profession))];
  const uniqueLocations = [...new Set(allProfiles.map(p => p.address))];

  const filteredProfiles = shuffledProfiles.filter(p => {
    const matchProfession = professionFilter === "" || p.profession === professionFilter;
    const matchLocation = locationFilter === "" || p.address === locationFilter;
    const matchName = searchName === "" || p.name.toLowerCase().includes(searchName.toLowerCase());
    return matchProfession && matchLocation && matchName;
  });

  return (
    <div className="container mt-4">

      {/* উপরের লিঙ্ক টেক্সট */}
      <div className="mb-4 text-center">
        <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        মিস্ত্রীর প্রফাইল লিস্ট করতে এখানে <Link to="/UserForm">ক্লীক</Link> করুন
        </p>
      </div>

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
  );
};

export default UserList;
