import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import gjmgyt from "../Images/poperty.png";
// import axios from "axios";
import { Link } from "react-router-dom";

const staticProfiles = [
  {
    image: gjmgyt,
    name: "মাছুম ভিলা",
    phone: "01760487031",
    rent: "৩২০০",
    houseType: "ফ্ল্যাট",
    gas: "আছে",
    bath: "আছে",
    rooms: 3,
    address: "স্কয়ার মাস্টারবাড়ি আরিফ এর ৭ নাম্বার গেইট",
  },
  {
    image: gjmgyt,
    name: "মতিন ভিলা",
    phone: "01741202899",
    rent: "3000",
    houseType: "বাড়ি",
    gas: "নেই",
    bath: "নেই",
    rooms: 2,
    address: "স্কয়ার মাস্টার বাড়ি, জামিরদিয়া উত্তরপাড়া",
  },
  {
    image: gjmgyt,
    name: "Abir",
    phone: "01622010208",
    rent: "২০০০",
    houseType: "বাড়ি",
    gas: "নেই",
    bath: "নেই",
    rooms: 2,
    address: "বর্তা, ভালুকা",
  },
  {
    image: gjmgyt,
    name: "মাকসুদ হাসান ইভান",
    phone: "01757-175910",
    rent: "১২০০",
    houseType: "বাড়ি",
    gas: "নেই",
    bath: "নেই",
    rooms: 2,
    address: "আলিয়া মাদ্রাসা রোড, ভালুকা",
  },
  {
    image: gjmgyt,
    name: "মোঃ আশরাফুল ইসলাম",
    phone: "০১৬৪২০৭০২৩০",
    rent: "১০০০",
    houseType: "বাড়ি",
    gas: "নেই",
    bath: "নেই",
    rooms: 2,
    address: "বর্তা, ভালুকা",
  },
  {
    image: gjmgyt,
    name: "মো: রুবেল মাহমুদ পলাশ",
    phone: "1752825128",
    rent: "২০০০",
    houseType: "বাড়ি",
    gas: "নেই",
    bath: "নেই",
    rooms: "12 টি",
    address: "ভরাডোবা ক্লাবের বাজারে",
  },
];

const ProfileCard = ({ profile, darkMode }) => {
  const lineStyle = {
    padding: "10px 0",
    borderBottom: darkMode ? "1px solid #444" : "1px solid #ddd",
    fontSize: "16px",
    color: darkMode ? "#eee" : "#333",
    fontWeight: "500",
  };

  const labelStyle = {
    color: darkMode ? "#ffcc80" : "#ff5e00",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        margin: "20px 0",
        background: darkMode
          ? "linear-gradient(135deg, #2c2c2c, #1e1e1e)"
          : "linear-gradient(135deg, #ffffff, #e6f2ff)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={profile.image}
          alt="profile"
          style={{ width: "100%", height: "220px", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0, 0, 0, 0.6)",
            color: "#fff",
            padding: "12px 25px",
            borderRadius: "12px",
            fontSize: "22px",
            fontWeight: "700",
            textShadow: "1px 1px 5px #000",
          }}
        >
          {profile.name}
        </div>
      </div>

      <div style={{ padding: "18px" }}>
        <p style={lineStyle}>
          <span style={labelStyle}>📞 মোবাইল:</span>{" "}
          <a
            href={`tel:${profile.phone}`}
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            <FaPhoneAlt /> {profile.phone}
          </a>
        </p>
        <p style={lineStyle}>
          <span style={labelStyle}>💰 মাসিক ভাড়া:</span> {profile.rent}
        </p>
        <p style={lineStyle}>
          <span style={labelStyle}>🏠 বাসার ধরন:</span> {profile.houseType}
        </p>
        <p style={lineStyle}>
          <span style={labelStyle}>🔥 গ্যাস সুবিধা:</span> {profile.gas}
        </p>
        <p style={lineStyle}>
          <span style={labelStyle}>🚿 এটাচ বাথরুম:</span> {profile.bath}
        </p>
        <p style={lineStyle}>
          <span style={labelStyle}>🛏️ রুম সংখ্যা:</span> {profile.rooms}
        </p>
        <p style={{ ...lineStyle, borderBottom: "none" }}>
          <span style={labelStyle}>📌 ঠিকানা:</span> {profile.address}
        </p>
      </div>
    </div>
  );
};

const House_rental = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 3;

  useEffect(() => {
    // ব্যাকএন্ড থেকে ডেটা আনার কোড নিচে কমেন্ট করা হলো

    
    const fetchProfiles = async () => {
      try {
        const res = await axios.get("https://bdback-5ofz.onrender.com/api/houses");
        const mongoProfiles = res.data.map((item) => ({
          ...item,
          name: item.imageName || "নাম নেই",
        }));
        const all = [...staticProfiles, ...mongoProfiles];
        setProfiles(all);
      } catch (err) {
        setProfiles(staticProfiles); // fallback
      }
    };
    fetchProfiles();
    

    // শুধু static data দেখানোর জন্য নিচের লাইনটি ব্যবহার করা হচ্ছে
    setProfiles(staticProfiles);
  }, []);

  const sortedProfiles = [...profiles]
    .filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "name-asc") return a.name.localeCompare(b.name);
      if (sortOption === "name-desc") return b.name.localeCompare(a.name);
      if (sortOption === "rent-asc") return parseInt(a.rent) - parseInt(b.rent);
      if (sortOption === "rent-desc") return parseInt(b.rent) - parseInt(a.rent);
      return 0;
    });

  const indexOfLast = currentPage * profilesPerPage;
  const indexOfFirst = indexOfLast - profilesPerPage;
  const currentProfiles = sortedProfiles.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(sortedProfiles.length / profilesPerPage);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "30px 20px",
        background: darkMode
          ? "linear-gradient(to right, #121212, #1f1f1f)"
          : "linear-gradient(to right, #e0f7fa, #fff3e0)",
        minHeight: "100vh",
        color: darkMode ? "#eee" : "#000",
      }}
    >
      <p style={{ textAlign: "center", marginBottom: "10px" }}>
        অন্য পেইজে <Link to="/House_rental_Form" style={{ color: "blue", textDecoration: "underline" }}>যান</Link>
      </p>

      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: darkMode ? "#ffd180" : "#0d47a1",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        🌟 প্রোফাইল তালিকা 🌟
      </h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "none",
            background: darkMode ? "#fff" : "#333",
            color: darkMode ? "#000" : "#fff",
          }}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        <select
          onChange={(e) => setSortOption(e.target.value)}
          style={{ padding: "10px", borderRadius: "10px" }}
        >
          <option value="">-- Sort --</option>
          <option value="name-asc">নাম (A-Z)</option>
          <option value="name-desc">নাম (Z-A)</option>
          <option value="rent-asc">ভাড়া (⬆️)</option>
          <option value="rent-desc">ভাড়া (⬇️)</option>
        </select>
      </div>

      {currentProfiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} darkMode={darkMode} />
      ))}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 5px",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              background: currentPage === i + 1 ? "#007bff" : "#ccc",
              color: currentPage === i + 1 ? "#fff" : "#000",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default House_rental;
