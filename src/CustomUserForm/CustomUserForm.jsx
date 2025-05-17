// components/CustomUserForm.jsx
import React, { useState } from "react";

const InputField = ({ name, placeholder, type = "text", onChange }) => (
  <div style={{ marginBottom: "15px", display: "flex", flexDirection: "column" }}>
    <label style={{ color: "#fff", marginBottom: "5px", fontSize: "14px" }}>
      {name === "imageUrl" && "🖼️ ইমেজ লিংক"}
      {name === "imageName" && "📝 ইমেজের নাম"}
      {name === "phone" && "📞 মোবাইল নম্বর"}
      {name === "profession" && "💼 পেশা"}
      {name === "email" && "📧 ইমেল"}
    </label>
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      required
      style={{
        padding: "10px",
        borderRadius: "10px",
        border: "none",
        outline: "none",
        background: "rgba(255, 255, 255, 0.2)",
        color: "#fff",
        fontSize: "16px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
      }}
    />
  </div>
);

const CustomUserForm = () => {
  const [formData, setFormData] = useState({
    imageUrl: "",
    imageName: "",
    phone: "",
    profession: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://bdback-5ofz.onrender.com/api/custom-users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    alert(data.message || "User added!");
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      animation: "bgAnimation 10s ease infinite",
      padding: "20px"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "30px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          transition: "all 0.5s ease",
          transform: "translateY(30px)",
          animation: "fadeSlide 1s ease forwards",
        }}
      >
        <h2 style={{
          textAlign: "center",
          color: "#fff",
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "bold",
        }}>
          ইউজার ইনপুট ফর্ম
        </h2>

        <InputField name="imageUrl" placeholder="ইমেজ লিংক" onChange={handleChange} />
        <InputField name="imageName" placeholder="ইমেজের নাম" onChange={handleChange} />
        <InputField name="phone" placeholder="মোবাইল নম্বর" onChange={handleChange} />
        <InputField name="profession" placeholder="পেশা" onChange={handleChange} />
        <InputField name="email" placeholder="ইমেল" type="email" onChange={handleChange} />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(to right, #ff758c, #ff7eb3)",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => e.target.style.background = "linear-gradient(to right, #43cea2, #185a9d)"}
          onMouseOut={(e) => e.target.style.background = "linear-gradient(to right, #ff758c, #ff7eb3)"}
        >
          সাবমিট ✅
        </button>

        <button
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            background: "rgba(255, 255, 255, 0.2)",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onClick={() => alert("সকল প্রোফাইল দেখুন")}
        >
          সকল প্রোফাইল দেখুন 👥
        </button>
      </form>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeSlide {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes bgAnimation {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default CustomUserForm;
