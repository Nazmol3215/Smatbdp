import React, { useState } from "react";
import axios from "axios";

// Reusable InputField Component
const InputField = ({ name, placeholder, onChange, value }) => {
  const [touched, setTouched] = useState(false);
  const isValid = value.trim() !== "";

  return (
    <div style={{ marginBottom: "15px", width: "100%" }}>
      <input
        name={name}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e);
          setTouched(true);
        }}
        value={value}
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(10px)",
          color: "#333",
          fontSize: "16px",
          transition: "all 0.3s ease-in-out",
          outline: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}
      />
      {!isValid && touched && (
        <div style={{ color: "#d9534f", fontSize: "14px", marginTop: "4px" }}>
          ⚠️ অনুগ্রহ করে এই ঘরটি পূরণ করুন
        </div>
      )}
    </div>
  );
};

const House_rental_Form = () => {
  const [formData, setFormData] = useState({
    image: "",
    imageName: "",
    phone: "",
    rent: "",
    type: "",
    gas: "",
    bathroom: "",
    rooms: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://bdback-5ofz.onrender.com/api/houses", formData);
    alert('✅ তথ্য জমা হয়েছে!\n📋 প্রফাইলটি এখন সাইটে দেখা যাবে।');
  };

  return (
    <>
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "fadeIn 1.2s ease-in-out"
      }}
    >

      
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          padding: "30px",
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
          animation: "slideIn 0.8s ease-in-out"
        }}
      >
         <button
          style={{
            marginTop: "15px",
            marginBottom: "15px",
            background: "transparent",
            color: "#333",
            border: "1px solid #333",
            borderRadius: "10px",
            padding: "10px",
            width: "100%",
            fontSize: "15px",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onClick={() => window.location.href = "/House_rental_1"}
        >
          👀 সকল প্রফাইল দেখুন 
        </button>
        <h2
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "25px",
            fontSize: "24px"
          }}
        >
          🏠  বাড়ি ভাড়া দেওয়ার জন্য ফরমটি পূরণ করুন।
        </h2>

        <InputField name="image" placeholder="🖼️ ইমেজ লিংক" onChange={handleChange} value={formData.image} />
        <InputField name="imageName" placeholder="📝 ইমেজের নাম" onChange={handleChange} value={formData.imageName} />
        <InputField name="phone" placeholder="📞 মোবাইল নাম্বার" onChange={handleChange} value={formData.phone} />
        <InputField name="rent" placeholder="💰 মাসিক ভাড়া" onChange={handleChange} value={formData.rent} />
        <InputField name="type" placeholder="🏠 বাসার ধরন" onChange={handleChange} value={formData.type} />
        <InputField name="gas" placeholder="🔥 গ্যাস সুবিধা" onChange={handleChange} value={formData.gas} />
        <InputField name="bathroom" placeholder="🚿 এটাচ বাথরুম" onChange={handleChange} value={formData.bathroom} />
        <InputField name="rooms" placeholder="🛏️ রুম সংখ্যা" onChange={handleChange} value={formData.rooms} />
        <InputField name="address" placeholder="📌 ঠিকানা" onChange={handleChange} value={formData.address} />

        <button
          type="submit"
          style={{
            background: "linear-gradient(to right, #667eea, #764ba2)",
            border: "none",
            padding: "12px",
            borderRadius: "12px",
            width: "100%",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            marginTop: "10px"
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          📩 জমা দিন
        </button>

        <button
          style={{
            marginTop: "15px",
            background: "transparent",
            color: "#333",
            border: "1px solid #333",
            borderRadius: "10px",
            padding: "10px",
            width: "100%",
            fontSize: "15px",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onClick={() => window.location.href = "/House_rental_1"}
        >
          👀 সকল প্রফাইল দেখুন 
        </button>
      </form>

      {/* Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 600px) {
          form {
            padding: 20px !important;
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default House_rental_Form;
 