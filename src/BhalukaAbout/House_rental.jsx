// import React, { useState, useEffect } from "react";
// import { FaPhoneAlt } from "react-icons/fa";
// import gjmgyt from "../Images/poperty.png";

// const profilesData = [
//     {
//         name: "রানা মিয়া",
//         phone: "01700000000",
//         rent: 7500,
//         type: "ফ্ল্যাট",
//         gas: "আছে",
//         bathroom: "এটাচড",
//         rooms: 3,
//         address: "ধানমন্ডি, ঢাকা",
//       },
//       {
//         name: "সাবিকুন নাহার",
//         phone: "01800000000",
//         rent: 8500,
//         type: "ভাড়া বাসা",
//         gas: "নেই",
//         bathroom: "কমন",
//         rooms: 2,
//         address: "মিরপুর, ঢাকা",
//       },
    
//       {
//         image: gjmgyt,
//         name: " মাছুম ভিলা",
//         phone: "01760487031",
//         rent: "৩২০০ ৳",
//         houseType: "ফ্ল্যাট",
//         gas: "আছে",
//         bath: "আছে",
//         rooms: 3,
//         address: " স্কয়ার মাস্টারবাড়ি আরিফ এর ৭ নাম্বার গেইট",
//       },
      
//       {
//         image: gjmgyt,
//         name: "মতিন ভিলা",
//         phone: "01741202899",
//         rent: "3000",
//         houseType: "বাড়ি",
//         gas: "নেই",
//         bath: "নেই",
//         rooms: 2,
//         address: "স্কয়ার মাস্টার বাড়ি,জামিরদিয়া উত্তরপাড়া,এনভয় ১ নং গেট ঢাকা ময়মনসিংহ মহাসড়কের পাশে",
//       },
//       {
//         image: gjmgyt,
//         name: "পলাশ ঢালী",
//         phone: "01713509402",
//         rent: "৩০০০ ৳",
//         houseType: "বাড়ি",
//         gas: "নেই",
//         bath: "নেই",
//         rooms: 2,
//         address: "ঢালীবাড়ী, সিডষ্টোর।",
//       },
//       {
//         image: gjmgyt,
//         name: "Md Fojayel Hasan",
//         phone: "০১৭৬০৩১০১৬১",
//         rent: "২০০০",
//         houseType: "বাড়ি",
//         gas: "নেই",
//         bath: "নেই",
//         rooms: 2,
//         address: "বর্তা, ভালুকা, ময়মনসিংহ।",
//       },
//       {
//         image: gjmgyt,
//         name: "Abir",
//         phone: "01622010208",
//         rent: "২০০০",
//         houseType: "বাড়ি",
//         gas: "নেই",
//         bath: "নেই",
//         rooms: 2,
//         address: "বর্তা, ভালুকা, ময়মনসিংহ।",
//       },
//       {
//         image: gjmgyt,
//         name: "মাকসুদ হাসান ইভান",
//         phone: "01757-175910",
//         rent: "১২০০ ৳",
//         houseType: "বাড়ি",
//         gas: "নেই",
//         bath: "নেই",
//         rooms: 2,
//         address: "ভালুকা গ্যাস লাইন আলিয়া মাদ্রাসা রোড আসপাডা মাঠ, ভালুকা,",
//       },
//       {
//         image: gjmgyt,
//         name: "মোঃ আশরাফুল ইসলাম",
//         phone: "০১৬৪২০৭০২৩০",
//         rent: "১০০০  ৳",
//         houseType: "বাড়ি",
//         gas: "নেই",
//         bath: "নেই",
//         rooms: 2,
//         address: "বর্তা, ভালুকা",
//       },
//       {
//         image: gjmgyt,
//         name: " মাহীন খান",
//         phone: "01639739804",
//         rent: "2500  ৳",
//         houseType: "বাড়ি",
//         gas: "নেই",
//         bath: "নেই",
//         rooms: 2,
//         address: "ভালুক ৭নং ওয়ার্ড গজারি খাল। গ্লোরি টেক্সটাইলের সামনে।",
//       },
//       {
//         image: gjmgyt,
//         name: "Md.toslim ahammed sohag",
//         phone: "01742784273",
//         rent: "2500  ৳",
//         houseType: "বাড়ি",
//         gas: "নেই",
//         bath: "নেই",
//         rooms: 2,
//         address: "Mosha market kathali 8 no ward Roar fashion road",
//       },
//       {
//         image: gjmgyt,
//         name: "শরীফ বিন নজরুল",
//         phone: "01628490405",
//         rent: "3000 ৳",
//         houseType: "বাড়ি",
//         gas: "নেই",
//         bath: "নেই",
//         rooms: 2,
//         address: "নিঝুরী বাজার, ভালুকা ময়মনসিংহ",
//       },
//       {
//         image: gjmgyt,
//         name: " আলহাজ্ব মোঃ এমদাদুল হক",
//         phone: "01713-584570",
//         rent: "৮০০০ ৳",
//         houseType: "বাড়ি",
//         gas: "নেই",
//         bath: "নেই",
//         rooms: 2,
//         address: "আসপাডা সংলগ্ন, গ্যাস অফিস মোড়, ভালুকা, ময়মনসিংহ।",
//       },
//       {
//         image: gjmgyt,
//         name: "Ashraful Alam",
//         phone: "01708731423",
//         rent: "5000 ৳",
//         houseType: "বাড়ি",
//         gas: "নেই",
//         bath: "নেই",
//         rooms: 2,
//         address: "Kathali pollibiddot Bhaluka",
//       },
//       {
//         image: gjmgyt,
//         name: "মো সাগর হাসান",
//         phone: "০১৬১৬-৬৬৮৬৮০",
//         rent: "২০০০ ৳",
//         houseType: "বাড়ি",
//         gas: "নেই",
//         bath: "নেই",
//         rooms: 2,
//         address: "সিডস্টোর হবিরবাড়ী ড্রাইভার পাড়া পাইনিয়র অফিস সংলগ্ন",
//       },
//       {
//         image: gjmgyt,
//         name: " মো: রুবেল মাহমুদ পলাশ",
//         phone: "1752825128",
//         rent: "২০০০ ৳",
//         houseType: "বাড়ি",
//         gas: "নেই",
//         bath: "নেই",
//         rooms: "12 টি",
//         address: "ভরাডোবা ক্লাবের বাজারে পূর্ব পাশে",
//       },
    
//   // আরো প্রোফাইল যুক্ত করুন
// ];

// const ProfileCard = ({ profile, darkMode }) => {
//   const lineStyle = {
//     padding: "10px 0",
//     borderBottom: darkMode ? "1px solid #444" : "1px solid #ddd",
//     fontSize: "16px",
//     color: darkMode ? "#eee" : "#333",
//     fontWeight: "500",
//   };

//   const labelStyle = {
//     color: darkMode ? "#ffcc80" : "#ff5e00",
//     fontWeight: "bold",
//   };

//   return (
//     <div
//       style={{
//         borderRadius: "20px",
//         overflow: "hidden",
//         margin: "20px 0",
//         background: darkMode
//           ? "linear-gradient(135deg, #2c2c2c, #1e1e1e)"
//           : "linear-gradient(135deg, #ffffff, #e6f2ff)",
//         boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
//       }}
//     >
//       <div style={{ position: "relative" }}>
//         <img
//           src={profile.image}
//           alt="profile"
//           style={{ width: "100%", height: "220px", objectFit: "cover" }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             background: "rgba(0, 0, 0, 0.6)",
//             color: "#fff",
//             padding: "12px 25px",
//             borderRadius: "12px",
//             fontSize: "22px",
//             fontWeight: "700",
//             textShadow: "1px 1px 5px #000",
//           }}
//         >
//           {profile.name}
//         </div>
//       </div>

//       <div style={{ padding: "18px" }}>
//         <p style={lineStyle}>
//           <span style={labelStyle}>📞 মোবাইল:</span>{" "}
//           <a
//             href={`tel:${profile.phone}`}
//             style={{
//               color: "#007bff",
//               textDecoration: "none",
//               fontWeight: "600",
//             }}
//           >
//             <FaPhoneAlt /> {profile.phone}
//           </a>
//         </p>
//         <p style={lineStyle}>
//           <span style={labelStyle}>💰 মাসিক ভাড়া:</span> {profile.rent}
//         </p>
//         <p style={lineStyle}>
//           <span style={labelStyle}>🏠 বাসার ধরন:</span> {profile.houseType}
//         </p>
//         <p style={lineStyle}>
//           <span style={labelStyle}>🔥 গ্যাস সুবিধা:</span> {profile.gas}
//         </p>
//         <p style={lineStyle}>
//           <span style={labelStyle}>🚿 এটাচ বাথরুম:</span> {profile.bath}
//         </p>
//         <p style={lineStyle}>
//           <span style={labelStyle}>🛏️ রুম সংখ্যা:</span> {profile.rooms}
//         </p>
//         <p style={{ ...lineStyle, borderBottom: "none" }}>
//           <span style={labelStyle}>📌 ঠিকানা:</span> {profile.address}
//         </p>
//       </div>
//     </div>
//   );
// };

// const House_rental = () => {
//   const [profiles, setProfiles] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [rentFilter, setRentFilter] = useState("");
//   const [addressFilter, setAddressFilter] = useState("");
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const shuffled = [...profilesData].sort(() => 0.5 - Math.random());
//     setProfiles(shuffled);
//   }, []);

//   const filteredProfiles = profiles
//     .filter((profile) => {
//       const matchesName = profile.name.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesRent = rentFilter ? profile.rent === rentFilter : true;
//       const matchesAddress = addressFilter ? profile.address.includes(addressFilter) : true;
//       return matchesName && matchesRent && matchesAddress;
//     });

//   const uniqueRents = [...new Set(profiles.map((p) => p.rent))];

//   return (
//     <div
//       style={{
//         maxWidth: "800px",
//         margin: "0 auto",
//         padding: "30px 20px",
//         background: darkMode
//           ? "linear-gradient(to right, #121212, #1f1f1f)"
//           : "linear-gradient(to right, #e0f7fa, #fff3e0)",
//         minHeight: "100vh",
//         color: darkMode ? "#eee" : "#000",
//       }}
//     >
//       <h1
//         style={{
//           textAlign: "center",
//           marginBottom: "20px",
//           color: darkMode ? "#ffd180" : "#0d47a1",
//           fontSize: "28px",
//           fontWeight: "bold",
//         }}
//       >
//         🌟 প্রোফাইল তালিকা 🌟
//       </h1>

//       <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           style={{ padding: "10px 20px", borderRadius: "10px", border: "none", background: darkMode ? "#fff" : "#333", color: darkMode ? "#000" : "#fff" }}
//         >
//           {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
//         </button>
//       </div>

//       <input
//         type="text"
//         placeholder="🔍 নাম দিয়ে খুঁজুন"
//         style={{ padding: 12, width: "100%", marginBottom: 10, borderRadius: 10, border: "1px solid #bbb" }}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <select
//         onChange={(e) => setRentFilter(e.target.value)}
//         style={{ padding: 12, width: "100%", marginBottom: 10, borderRadius: 10 }}
//       >
//         <option value="">-- 💰 মাসিক ভাড়া ফিল্টার --</option>
//         {uniqueRents.map((rent) => (
//           <option key={rent} value={rent}>{rent}</option>
//         ))}
//       </select>
//       <input
//         type="text"
//         placeholder="📌 ঠিকানা দিয়ে খুঁজুন (যেমন: ধানমন্ডি)"
//         style={{ padding: 12, width: "100%", marginBottom: 20, borderRadius: 10 }}
//         onChange={(e) => setAddressFilter(e.target.value)}
//       />

//       {filteredProfiles.length ? (
//         filteredProfiles.map((profile) => (
//           <ProfileCard key={profile.id} profile={profile} darkMode={darkMode} />
//         ))
//       ) : (
//         <p style={{ textAlign: "center", color: "#999" }}>প্রোফাইল পাওয়া যায়নি 😔</p>
//       )}
//     </div>
//   );
// };

// export default House_rental;
