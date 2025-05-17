import React from "react";

const SchoolList = () => {
  const schools = [
    { id: 1, name: "রাজু উচ্চ বিদ্যালয়", eiin: "111263" },
    { id: 2, name: "গোয়ালী ভাওয়ালিয়া বাজার উচ্চ বিদ্যালয়", eiin: "111285" },
    { id: 3, name: "মোস্তফা মফিজ উচ্চ বিদ্যালয় সাতেরা", eiin: "111305" },
    { id: 4, name: "শহীদ শামসুল হক স্কুল, বাঘুট, ভাঙ্গুড়া", eiin: "111257" },
    { id: 5, name: "কাচিনা উচ্চ বিদ্যালয়", eiin: "111274" },
    { id: 6, name: "শহীদ কুদ্দুস মেমোরিয়াল উচ্চ বিদ্যালয়", eiin: "130712" },
    { id: 7, name: "ভাঙ্গুরা পাইকপাড়া উচ্চ বিদ্যালয়", eiin: "111280" },
    { id: 8, name: "রুহুল আমিন একাডেমি উচ্চ বিদ্যালয়", eiin: "111269" },
    { id: 9, name: "ভাঙ্গুরা গার্লস স্কুল এন্ড কলেজ", eiin: "111264" },
    { id: 10, name: "ভাঙ্গুরা সরকারি বালিকা উচ্চ বিদ্যালয়", eiin: "111278" },
    { id: 11, name: "ভাজারহাট উচ্চ বিদ্যালয়", eiin: "111262" },
    { id: 12, name: "ভাজারহাট বালিকা উচ্চ বিদ্যালয়", eiin: "111276" },
    { id: 13, name: "বাটাজোড় বি.এম উচ্চ বিদ্যালয়", eiin: "111282" },
    { id: 14, name: "আগাগাছা ইউনাইটেড উচ্চ বিদ্যালয়", eiin: "111272" },
    { id: 15, name: "মেদিনা আলস্না উচ্চ বিদ্যালয়", eiin: "111300" },
    { id: 16, name: "হরিরামপুর ইউনিয়ন সোনার বাংলা উচ্চ বিদ্যালয়", eiin: "111290" },
    { id: 17, name: "হলদিয়ামুড়া চৌধুরী মেমোরিয়াল বালিকা উচ্চ বিদ্যালয়", eiin: "111279" },
    { id: 18, name: "মরণা ভায়ের আলস্না উচ্চ বিদ্যালয়", eiin: "111302" },
    { id: 19, name: "জাকিরিয়া ওয়াঃ গফি মাদ্রাসা উচ্চ বিদ্যালয়", eiin: "112161" },
    { id: 20, name: "আলফা উচ্চ বিদ্যালয়", eiin: "111291" },
    { id: 21, name: "জাকিরাপুর এস এম উচ্চ বিদ্যালয়", eiin: "111288" },
    { id: 22, name: "ফকিরকুল উচ্চ বিদ্যালয়", eiin: "111286" },
    { id: 23, name: "সাইফুর রহমান উচ্চ বিদ্যালয়", eiin: "138228" },
    { id: 24, name: "ঝালপাড়া উচ্চ বিদ্যালয়", eiin: "111277" },
    { id: 25, name: "বাধাইকাই হাই স্কুল", eiin: "111275" },
    { id: 26, name: "সেনজানাইট উচ্চ বিদ্যালয় & কলেজ", eiin: "111265" },
    { id: 27, name: "শহীদ বরজি উচ্চ বিদ্যালয়", eiin: "111258" },
    { id: 28, name: "পাকশী উচ্চ বিদ্যালয়", eiin: "111290" },
  ];

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "20px auto",
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
    },
    title: {
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      backgroundColor: "#007BFF",
      color: "white",
      padding: "10px",
      textAlign: "left",
    },
    td: {
      borderBottom: "1px solid #ddd",
      padding: "8px",
    },
    row: (index) => ({
      backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
    }),
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>উচ্চ মাধ্যমিক বিদ্যালয়ের তালিকা</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ক্রমিক</th>
            <th style={styles.th}>প্রতিষ্ঠানের নাম</th>
            <th style={styles.th}>EIIN</th>
          </tr>
        </thead>
        <tbody>
          {schools.map((school, index) => (
            <tr key={school.id} style={styles.row(index)}>
              <td style={styles.td}>{school.id}</td>
              <td style={styles.td}>{school.name}</td>
              <td style={styles.td}>{school.eiin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchoolList;
