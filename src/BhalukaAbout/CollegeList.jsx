import React from "react";

const CollegeList = () => {
  const colleges = [
    { id: 1, name: "বাটাজোড় সোনার বাংলা ডিগ্রী কলেজ", eiin: "111353" },
    { id: 2, name: "ভাঙ্গুড়া সরকারি কলেজ", eiin: "111354" },
    { id: 3, name: "এ্যাপোলো ইন্সটিটিউট অব কম্পিউটার বি. এম. কলেজ", eiin: "132789" },
    { id: 4, name: "উত্তরা হাই স্কুল এন্ড কলেজ", eiin: "111358" },
    { id: 5, name: "ধামরাই বহুমুখী স্কুল এন্ড কলেজ", eiin: "111357" },
    { id: 6, name: "সায়রা সামসুন স্কুল এন্ড কলেজ", eiin: "111297" },
    { id: 7, name: "বিনোদপুর সাধার আলী সরকারী কলেজ", eiin: "111355" },
    { id: 8, name: "শহীদ মাশিয়াত উলফা স্কুল এন্ড কলেজ", eiin: "111289" },
    { id: 9, name: "শহীদ স্মৃতি নি এন্ড কলেজ -বাদিশা", eiin: "137642" },
    { id: 10, name: "ধর্মদীঘর মডেল কলেজ", eiin: "137602" },
    { id: 11, name: "জাকিরিয়া আব্দুল গফি মাদ্রাসা স্কুল এন্ড কলেজ", eiin: "112161" },
    { id: 12, name: "ভাঙ্গুড়া মডেল গার্লস কলেজ", eiin: "136861" },
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
      <h2 style={styles.title}>কলেজ সমূহ</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ক্রমিক</th>
            <th style={styles.th}>প্রতিষ্ঠানের নাম</th>
            <th style={styles.th}>EIIN</th>
          </tr>
        </thead>
        <tbody>
          {colleges.map((college, index) => (
            <tr key={college.id} style={styles.row(index)}>
              <td style={styles.td}>{college.id}</td>
              <td style={styles.td}>{college.name}</td>
              <td style={styles.td}>{college.eiin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollegeList;
