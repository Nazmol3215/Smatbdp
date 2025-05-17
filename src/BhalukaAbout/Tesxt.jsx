import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // নতুন লাইন

// ম্যানুয়ালি এড করা প্রোফাইল
const manualProfiles = [
  
  
    { name: 'কেবিএম হাদিউজ্জামান সেলিম',  phone: '+8801711-386831', profession: "কিডনি রোগ বিশেষজ্ঞ", email: 'mushfiqur.rahman@example.com' },
    { name: "অধ্যাপক (সহঃ) ডাঃ মুশফিকুর রহমান", phone: "01712-288455", profession: "নবজাতক ও শিশু রোগ বিশেষজ্ঞ", email: "mushfiqur.rahman@example.com" },
    { name: "অধ্যাপক (সহঃ) ডাঃ আশীষ কুমার রায়", phone: "01710-077111", profession: "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ", email: "ashish.roy@example.com" },
    { name: "অধ্যাপক (সহঃ) ডাঃ সোহেল রানা", phone: "01716-943691", profession: "মেডিসিন ও হৃদরোগ বিশেষজ্ঞ", email: "sohel.rana@example.com" },
    { name: "অধ্যাপক (সহঃ) ডাঃ সুস্থির সরকার", phone: "01712-386065", profession: "চর্ম, যৌন ও এলাজি বিশেষজ্ঞ", email: "susthir.sarkar@example.com" },
    { name: "অধ্যাপক (সহঃ) ডাঃ ইকবাল মনির", phone: "01711-361346", profession: "নাক-কান-গলা বিশেষজ্ঞ", email: "iqbal.monir@example.com" },
    { name: "ডাঃ ফাইজা চৌধুরী", phone: "01717-620818", profession: "গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ", email: "faiza.chowdhury@example.com" },
    { name: "ডাঃ সায়াদ উল্লাহ", phone: "01711-444299", profession: "মেডিসিন ও গ্যাস্ট্রোলিভার বিশেষজ্ঞ", email: "sayad.ullah@example.com" },
    { name: "ডাঃ সালমা আতিয়া", phone: "01712-590573", profession: "গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ", email: "salma.atia@example.com" },
    { name: "ডাঃ রিপন কুমার রায়", phone: "01712-778144", profession: "হাড়জোড়া বিশেষজ্ঞ (অর্থোপেডিক্স সার্জন)", email: "ripon.roy@example.com" },
    { name: "ডাঃ শরীফুল ইসলাম খান", phone: "01818-656797", profession: "মেডিসিন ও গ্যাস্ট্রোলিভার বিশেষজ্ঞ", email: "shariful.khan@example.com" },
    { name: "ডাঃ পংকজ দাস", phone: "01771-085823", profession: "নিউরোমেডিসিন বিশেষজ্ঞ", email: "ponkoj.das@example.com" },
    { name: "ডাঃ ফাতেমা মাজাহার", phone: "01712-000552", profession: "গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ", email: "fatema.mazahar@example.com" },
    {  name: "ডাঃ জাকারিয়া রুবেল", phone: "01952-532442", profession: "ওরাল অ্যান্ড ডেন্টাল সার্জন", email: "mushfiqur.rahman@example.com" },
    {  name: "ডাঃ মো. মোশাররফ হোসেন", phone: "০১৭১১-৮২৮৭৬৫", profession: "গাইনি ও প্রসূতি", email: "mushfiqur.rahman@example.com" },
    {  name: "ডাঃ রোকাইয়া আক্তার", phone: "০১৭১৪-০৭৭৪৮৬", profession: "গাইনি ও প্রসূতি বিভাগ", email: "mushfiqur.rahman@example.com" },
    { name: 'ডাঃ মুশফিকুর রহমান', phone: '০১৭১২-২৮৮৪৫৫',  location: 'নবজাতক ও শিশুরোগ বিশেষজ্ঞ' },
    { name: 'ডাঃ সোহেল রানা', phone: '01716-943691',  profession: "মেডিসিন ও হৃদরোগ বিশেষজ্ঞ", email: 'mushfiqur.rahman@example.com' },
    { name: "ডাঃ সাদিকুর রহমান", phone: "01729-271072", profession: "নাক-কান-গলা বিশেষজ্ঞ", email: "sadikur.rahman@example.com" },
    { name: "ডাঃ মোস্তাফিজুর রহমান", phone: "01716-200058", profession: "কিডনী বিশেষজ্ঞ", email: "mostafizur.rahman@example.com" },
    { name: "ডাঃ সালেকিন মামুন", phone: "01670-550133", profession: "মেডিসিন ও হরমোন বিশেষজ্ঞ", email: "salekin.mamun@example.com" },
    { name: "ডাঃ রুকুনুজ্জামান", phone: "01920-607280", profession: "চর্ম, যৌন ও এলাজি বিশেষজ্ঞ", email: "rukunuzzaman@example.com" },
    { name: "ডাঃ হেনরি অধিকারি", phone: "01722-882324", profession: "আল্ট্রাসনো ও এক্সরে বিশেষজ্ঞ", email: "henry.odhikari@example.com" },
    { name: "ডাঃ জুনায়েদ হোসেন", phone: "01825-001780", profession: "দন্তরোগ বিশেষজ্ঞ", email: "junaid.hossain@example.com" },
    { name: "ডাঃ জেরিন সোলাইমান রিজা", phone: "01984-445985", profession: "গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ", email: "jerin.riza@example.com" },
    { name: "ডাঃ মোর্শেদুল ইসলাম", phone: "01980-749428", profession: "আবাসিক চিকিৎসক", email: "morshedul.islam@example.com" },
    { name: "ডাঃ আনোয়ারুল হক", phone: "01521-405347", profession: "আবাসিক চিকিৎসক", email: "anwarul.haque@example.com" },
    { name: "ডাঃ শামীম রেজা", phone: "01521-404424", profession: "আবাসিক চিকিৎসক", email: "shamim.reza@example.com" },
    { name: "ডাঃ আবু নাইম", phone: "01568-658636", profession: "আবাসিক চিকিৎসক", email: "abu.naim@example.com" },
    { name: "ডাঃ বিন-ইয়ামিন", phone: "01752-063936", profession: "আবাসিক চিকিৎসক", email: "bin.yamin@example.com" }


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
              <td>{profile.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Tesxt = () => {
  const [allProfiles, setAllProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [professionFilter, setProfessionFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => { 
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://bdback-5ofz.onrender.com/api/custom-users');
        const mongoUsers = res.data.map(user => ({
          name: user.imageName,
          phone: user.phone,
          profession: user.type,
          email: user.email,
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
      const matchLocation = locationFilter === "" || p.email === locationFilter;
      const matchName = searchName === "" || p.name.toLowerCase().includes(searchName.toLowerCase());
      return matchProfession && matchLocation && matchName;
    });
    setFilteredProfiles(filtered);
  }, [allProfiles, professionFilter, locationFilter, searchName]);

  const uniqueProfessions = [...new Set(allProfiles.map(p => p.profession))];
  const uniqueLocations = [...new Set(allProfiles.map(p => p.email))];

  return (
    <>
      {/* উপরের টেক্সট */}
      <div className="text-center mt-3 mb-4">
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          লিস্ট করতে এখানে <Link to="/CustomUserForm" style={{ color: "#007bff", textDecoration: "underline" }}>ক্লীক</Link> করুন
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

export default Tesxt;
