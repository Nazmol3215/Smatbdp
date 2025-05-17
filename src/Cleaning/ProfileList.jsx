import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// ম্যানুয়ালি এড করা প্রোফাইল
const manualProfiles = [
  { name: 'কেবিএম হাদিউজ্জামান সেলিম', phone: '+8801711-386831', profession: "কিডনি রোগ বিশেষজ্ঞ", email: 'mushfiqur.rahman@example.com' },
  { name: "অধ্যাপক (সহঃ) ডাঃ মুশফিকুর রহমান", phone: "01712-288455", profession: "নবজাতক ও শিশু রোগ বিশেষজ্ঞ", email: "mushfiqur.rahman@example.com" },
  { name: "অধ্যাপক (সহঃ) ডাঃ আশীষ কুমার রায়", phone: "01710-077111", profession: "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ", email: "ashish.roy@example.com" },
  { name: "অধ্যাপক (সহঃ) ডাঃ আশীষ কুমার রায়", phone: "01710-077111", profession: "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ", email: "ashish.roy@example.com" },
  { name: "অধ্যাপক (সহঃ) ডাঃ আশীষ কুমার রায়", phone: "01710-077111", profession: "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ", email: "ashish.roy@example.com" },
  { name: "অধ্যাপক (সহঃ) ডাঃ আশীষ কুমার রায়", phone: "01710-077111", profession: "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ", email: "ashish.roy@example.com" },
  { name: "অধ্যাপক (সহঃ) ডাঃ আশীষ কুমার রায়", phone: "01710-077111", profession: "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ", email: "ashish.roy@example.com" },
  { name: "অধ্যাপক (সহঃ) ডাঃ আশীষ কুমার রায়", phone: "01710-077111", profession: "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ", email: "ashish.roy@example.com" },
  { name: "অধ্যাপক (সহঃ) ডাঃ আশীষ কুমার রায়", phone: "01710-077111", profession: "হৃদরোগ ও মেডিসিন বিশেষজ্ঞ", email: "ashish.roy@example.com" },
];

// কল করার ফাংশন
const callPhone = (phone) => {
  window.location.href = `tel:${phone}`;
};

// প্রোফাইল কার্ড কম্পোনেন্ট
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
              <td>{profile.email || profile.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// প্রোফাইল লিস্ট কম্পোনেন্ট
const ProfileList = () => {
  const [allProfiles, setAllProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [professionFilter, setProfessionFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://bdback-5ofz.onrender.com/api/profiles');
        const mongoProfiles = res.data.map(profile => ({
          name: profile.imageName,
          phone: profile.phone,
          profession: profile.profession || profile.type,
          email: profile.address,
          image: profile.imageLink,
        }));
        const combined = [...manualProfiles, ...mongoProfiles].sort(() => 0.5 - Math.random());
        setAllProfiles(combined);
      } catch (err) {
        console.error("ডেটা আনতে সমস্যা হয়েছে:", err);
        setAllProfiles([...manualProfiles]);
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
      <div className="text-center mt-3 mb-4">
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          আপনার এলাকার ক্লিনিং স্টাফ খুঁজুন <br />
          ক্লিনিং স্টাফ হিসেবে লিস্ট করতে এখানে <Link to="/CustomUserForm" style={{ color: "#007bff", textDecoration: "underline" }}>ক্লীক</Link> করুন
        </span>
      </div>

      <div className="container mt-4">
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

export default ProfileList;
