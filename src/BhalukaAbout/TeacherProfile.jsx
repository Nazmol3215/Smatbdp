import React from "react";

const TeacherProfile = ({ profile }) => {
  const styles = {
    container: {
      width: "50%",
      margin: "20px auto",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#fff",
    },
    profileImage: {
      width: "60px",
      height: "60px",
    },
    name: {
      fontSize: "22px",
      fontWeight: "bold",
      margin: "10px 0 5px 0",
    },
    designation: {
      color: "#666",
      marginBottom: "5px",
    },
    phone: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#333",
      fontSize: "16px",
    },
    button: {
      marginTop: "10px",
      padding: "8px 15px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
    table: {
      width: "100%",
      marginTop: "15px",
      borderCollapse: "collapse",
      textAlign: "left",
    },
    tableRow: {
      borderBottom: "1px solid #ddd",
    },
    tableCell: {
      padding: "8px",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <img
        src={profile.image}
        alt="Profile"
        style={styles.profileImage}
      />
      <div style={styles.name}>{profile.name}</div>
      <div style={styles.designation}>{profile.designation}</div>
      <div style={styles.phone}>📞 {profile.phone}</div>
      <button style={styles.button}>পড়াতে চাই</button>
      <table style={styles.table}>
        <tbody>
          <tr style={styles.tableRow}>
            <td style={styles.tableCell}>🏡 ঠিকানা</td>
            <td style={styles.tableCell}>{profile.address}</td>
          </tr>
          <tr style={styles.tableRow}>
            <td style={styles.tableCell}>🎓 শিক্ষাগত যোগ্যতা</td>
            <td style={styles.tableCell}>{profile.qualification}</td>
          </tr>
          <tr style={styles.tableRow}>
            <td style={styles.tableCell}>⏳ অভিজ্ঞতা</td>
            <td style={styles.tableCell}>{profile.experience} বছর</td>
          </tr>
          <tr style={styles.tableRow}>
            <td style={styles.tableCell}>📖 শ্রেণি</td>
            <td style={styles.tableCell}>{profile.class}</td>
          </tr>
          <tr style={styles.tableRow}>
            <td style={styles.tableCell}>📚 বিষয়</td>
            <td style={styles.tableCell}>{profile.subject}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const TeacherProfiles = () => {
  const teacherData = [
    {
      name: "জিহাদুন ইসলাম খান",
      designation: "শিক্ষক",
      phone: "01977340079",
      address: "মেরাজবিটা, কাঁচা মাদ্রাসা।",
      qualification: "হেফজ ও মিজান",
      experience: "৫",
      class: "কাজা থেকে কোরআন শরিফ",
      subject: "আরবি",
      image: "https://cdn-icons-png.flaticon.com/512/2784/2784445.png",
    },
    // Add more teacher profiles as needed
    {
      name: "মাহমুদুল হাসান",
      designation: "সহকারী শিক্ষক",
      phone: "01812345678",
      address: "মেহেরপুর, মাদ্রাসা রোড",
      qualification: "হাদিস ও তাফসির",
      experience: "৩",
      class: "কাজা থেকে হাদিস",
      subject: "হাদিস",
      image: "https://cdn-icons-png.flaticon.com/512/2784/2784445.png",
    },
    // Repeat for 8 more teachers
  ];

  return (
    <div>
      {teacherData.map((profile, index) => (
        <TeacherProfile key={index} profile={profile} />
      ))}
    </div>
  );
};

export default TeacherProfiles;
