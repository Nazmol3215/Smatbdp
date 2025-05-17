import React, { useState } from "react";

// Hospital data array
const hospitals = [
  {
    name: "ভালুকা সরকারি হাসপাতাল",
    claimed: true,
    location: "ভালুকার পশ্চিমের রাস্তার উপরের ব্রীজ থেকে পাচ’শ গজ সামনে। ভালুকা, ময়মনসিংহ 01733-338905",
    yearsInHealthcare: 9,
    photos: [
      { label: "All", src: "hos.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["General Surgery", "Orthopedics", "Pediatrics", "Cardiology"],
  },
  {
    name: "বন্ধন হাসপাতাল",
    claimed: true,
    location: "জালাল ভিলা, সরকারি হাসপাতাল রোড ভালুকা। আধুনিক স্বাস্থ্য সেবার প্রতিশ্রুতি বন্ধন হাসপাতাল,   01710-991127",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos1.png" },
      { label: "Interior", src: "hos4.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
  },
  {
    name: "মাস্টার হাসপাতা",
    claimed: true,
    location: "ভালুকা বাজার রোড ন্যাশনাল ব্যাংকের উপরতলা। মোবাইল: 01731-211120",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos2.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
  },
  {
    name: "লিলি এন্ড তাজ ডেন্টাল সার্জারী",
    claimed: true,
    location: "১৯২/২ বাইতুসসাফ লিলি ভিলা হাই স্কুল রোড ভালুকা। মোবাইল: 01952-532442",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos2.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
  },
  {
    name: "ভালুকা ডিজিটাল হাসপাতাল।",
    claimed: true,
    location: "ভালুকা বাজার রোড ",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos2.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
  },
  {
    name: "মাহির হাসপাতাল",
    claimed: true,
    location: "ভালুকা বাজার রোড ",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos2.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
  },
  {
    name: "মোহাম্মদীয়া মডেল হাসপাতাল।",
    claimed: true,
    location: "ভালুকা বাজার রোড ",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos2.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
  },
  {
    name: "ভালুকা জেনারেল হাসপাতাল",
    claimed: true,
    location: "ভালুকা বাজার রোড ",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos2.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
  },
  {
    name: "সেবা হাসপাতাল",
    claimed: true,
    location: "ভালুকা বাজার রোড ",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos2.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
  },
  {
    name: "ডক্টর ক্লিনি",
    claimed: true,
    location: "ভালুকা বাজার রোড ",
    yearsInHealthcare: 12,
    photos: [
      { label: "All", src: "hos2.png" },
      { label: "Interior", src: "hos1.png" },
    ],
    services: ["Cardiology", "Neurology", "Dermatology"],
  },

  // Add more hospitals here as needed...
];

export default function HospitalList() {
  const [activeTab, setActiveTab] = useState("Overview");

  // Function to render content based on active tab for each hospital
  const renderContent = (hospital) => {
    switch (activeTab) {
      case "Overview":
        return (
          <div style={{ marginBottom: "20px" }}>
            <h2 style={styles.sectionTitle}>Overview</h2>
            <p style={styles.text}>
              {hospital.name} is located in {hospital.location} and has been in healthcare for{" "}
              {hospital.yearsInHealthcare} years. The hospital provides comprehensive services to
              patients.
            </p>
          </div>
        );
      case "Photos":
        return (
          <div style={{ marginBottom: "20px" }}>
            <h2 style={styles.sectionTitle}>Photos</h2>
            <div style={styles.photoGrid}>
              {hospital.photos.map((photo, index) => (
                <div key={index} style={styles.photoContainer}>
                  <img src={photo.src} alt={photo.label} style={styles.photo} />
                  <p style={styles.photoLabel}>{photo.label}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Services":
        return (
          <div style={{ marginBottom: "20px" }}>
            <h2 style={styles.sectionTitle}>Services</h2>
            <ul style={styles.list}>
              {hospital.services.map((service, index) => (
                <li key={index} style={styles.listItem}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {hospitals.map((hospital, index) => (
        <div key={index} style={styles.hospitalCard}>
          {/* Header */}
          <div style={styles.header}>
            <h1 style={styles.title}>{hospital.name}</h1>
            <div style={styles.headerActions}>
              {hospital.claimed && <span style={styles.claimed}>Claimed</span>}
              <div style={styles.location}>
                <span>{hospital.location}</span> • {hospital.yearsInHealthcare} Years in Healthcare
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div style={styles.tabs}>
            {["Overview", "Photos", "Services"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  ...styles.tabButton,
                  backgroundColor: activeTab === tab ? "#3B82F6" : "#E5E7EB",
                  color: activeTab === tab ? "#FFFFFF" : "#374151",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Render content based on active tab */}
          <div>{renderContent(hospital)}</div>
        </div>
      ))}
    </div>
  );
}

// Inline CSS styles
const styles = {
  container: {
    maxWidth: "800px",
    margin: "2px auto",
    padding: "10px",
  },
  hospitalCard: {
    marginBottom: "40px",
    padding: "20px",
    border: "1px solid #E5E7EB",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "25px",
    // fontWeight: "bold",
    padding: " 0 26px 0 0",
    fontFamily: '"Galada", cursive',
    // fontWeight: 400,
    fontStyle: 'normal',
    color: '#344CB7',
  },
  headerActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  claimed: {
    fontSize: "12px",
    color: "#000",
  },
  location: {
    fontSize: "14px",
    marginTop: "5px",
  },
  tabs: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  tabButton: {
    padding: "6px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.5",
  },
  photoGrid: {
    display: "flex",
    gap: "10px",
  },
  photoContainer: {
    textAlign: "center",
  },
  photo: {
    width: "150px",
    height: "150px",
    borderRadius: "5px",
    objectFit: "cover",
  },
  photoLabel: {
    marginTop: "5px",
    fontSize: "14px",
  },
  list: {
    listStyletype : "none",
    paddingLeft: "0",
  },
  listItem: {
    fontSize: "16px",
    marginBottom: "5px",
  },
};
