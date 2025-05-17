import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap যোগ করা হয়েছে

// ডক্টরের প্রোফাইল কম্পোনেন্ট
const DoctorProfile = ({ doctor }) => {
  const { image, name, phone, expertise, address } = doctor;

  // মোবাইল নাম্বারে ক্লিক করলে ডায়াল অপশনে চলে যাওয়ার ফাংশন
  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      className="card mb-4"
      style={{
        backgroundColor: "#f0f8ff",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="card-body text-center">
        <img
          src={image}
          alt={name}
          className="rounded-circle mb-3"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <span
            style={{ cursor: "pointer", color: "#0066cc" }}
            onClick={() => handleCall(phone)}
          >
            📞 {phone}
          </span>
        </p>
        <p className="card-text">
          <strong>বিশেষজ্ঞতা:</strong> {expertise}
        </p>
        <hr />
        <p className="card-text">
          <strong>ঠিকানা:</strong> {address}
        </p>
        <hr />
      </div>
    </div>
  );
};

// প্রোফাইল ফিল্টার এবং সার্চ কম্পোনেন্ট
const DoctorProfiles = ({ doctors }) => {
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expertiseFilter, setExpertiseFilter] = useState("");
  const [addressFilter, setAddressFilter] = useState("");

  // এলোমেলো প্রোফাইল লোড করার ফাংশন
  useEffect(() => {
    // এলোমেলোভাবে ডাক্তারদের সাজানো
    const shuffledDoctors = [...doctors].sort(() => 0.5 - Math.random());
    setFilteredDoctors(shuffledDoctors);
  }, [doctors]);

  // ফিল্টার এবং সার্চ ফাংশন
  useEffect(() => {
    let filtered = doctors;

    if (searchTerm) {
      filtered = filtered.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (expertiseFilter) {
      filtered = filtered.filter((doctor) =>
        doctor.expertise.toLowerCase().includes(expertiseFilter.toLowerCase())
      );
    }
    if (addressFilter) {
      filtered = filtered.filter((doctor) =>
        doctor.address.toLowerCase().includes(addressFilter.toLowerCase())
      );
    }

    setFilteredDoctors(filtered);
  }, [searchTerm, expertiseFilter, addressFilter, doctors]);

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="নাম দিয়ে খুঁজুন"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            value={expertiseFilter}
            onChange={(e) => setExpertiseFilter(e.target.value)}
          >
            <option value="">বিশেষজ্ঞতা নির্বাচন করুন</option>
            <option value="চিকিৎসা বিশেষজ্ঞ">চিকিৎসা বিশেষজ্ঞ</option>
            <option value="সার্জন">সার্জন</option>
            <option value="হৃদরোগ বিশেষজ্ঞ">হৃদরোগ বিশেষজ্ঞ</option>
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            value={addressFilter}
            onChange={(e) => setAddressFilter(e.target.value)}
          >
            <option value="">ঠিকানা নির্বাচন করুন</option>
            <option value="ঢাকা">ঢাকা</option>
            <option value="চট্টগ্রাম">চট্টগ্রাম</option>
            <option value="রাজশাহী">রাজশাহী</option>
          </select>
        </div>
      </div>

      <div className="row">
        {filteredDoctors.length === 0 ? (
          <p className="text-center" style={{ fontSize: "1.2rem" }}>
            কোনো প্রোফাইল পাওয়া যায়নি
          </p>
        ) : (
          filteredDoctors.map((doctor, index) => (
            <div key={index} className="col-md-4">
              <DoctorProfile doctor={doctor} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// মূল কম্পোনেন্ট
const Doctors_Valukka = () => {
  // ডাক্তারদের তথ্য
  const doctors = [
    {
      image: "https://via.placeholder.com/150",
      name: "ড. জন ডো",
      phone: "01812345678",
      expertise: "চিকিৎসা বিশেষজ্ঞ",
      address: "ঢাকা, বাংলাদেশ",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "ড. মিনা খান",
      phone: "01723456789",
      expertise: "সার্জন",
      address: "চট্টগ্রাম, বাংলাদেশ",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "ড. কামরুল হাসান",
      phone: "01634567890",
      expertise: "হৃদরোগ বিশেষজ্ঞ",
      address: "রাজশাহী, বাংলাদেশ",
    },
  ];

  return <DoctorProfiles doctors={doctors} />;
};

export default Doctors_Valukka;
