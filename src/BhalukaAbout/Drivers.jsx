import React from "react";

const ContactList = () => {
  const contacts = [
    { id: 1, name: "শামিম হাসান বশির (মাস্টারবাড়ী)", phone: "+880 1719-866835" },
    { id: 2, name: "শরিফ ব্রাহ্মণবাড়", phone: "+880 1611-340720" },
    { id: 3, name: "শরিফ", phone: "01735-028189" },
    { id: 4, name: "শরিফ অ্যাব্দেল", phone: "+880 1753-136197" },
    { id: 5, name: "শরিফ", phone: "01763-514922" },
    { id: 6, name: "সুলতান", phone: "01671-470422" },
    { id: 7, name: "সুমন", phone: "+880 1409-677350" },
    { id: 8, name: "সুমন বিক্রমিয়া", phone: "01723-947935" },
    { id: 9, name: "স্টার ইলেকট্রনিক্স", phone: "+880 1620-681268" },
    { id: 10, name: "রফিক বাসস্ট্যান্ড", phone: "+880 1790-961329" },
    { id: 11, name: "আনোয়ার হক", phone: "+8801791-072824" },
    { id: 12, name: "রনি", phone: "01720-304931" },
    { id: 13, name: "সেলিম ব্রাহ্মণবাড়", phone: "01734-835118" },
    { id: 14, name: "শাকিল", phone: "+880 1916-940358" },
    { id: 15, name: "শামিম", phone: "+880 1757-389714" },
    { id: 16, name: "হেরো ব্রাহ্মণবাড়", phone: "01746-180198" },
    { id: 17, name: "হাসান", phone: "01937-126626" },
    { id: 18, name: "জাহাঙ্গীর মাস্টারবাড়ী", phone: "+880 1747-920503" },
    { id: 19, name: "জীবন", phone: "+8801718-212651" },
    { id: 20, name: "জীবন", phone: "01735-386365" },
    { id: 21, name: "ভুরাসেদ", phone: "01711-968843" },
    { id: 22, name: "কালাম", phone: "01729-162711" },
    { id: 23, name: "কালাম", phone: "+8801684-013000" },
    { id: 24, name: "ব্রাহ্মণবাড় বাসস্ট্যান্ড", phone: "+8801726-982514" },
    { id: 25, name: "একসামুল", phone: "+8801818-766607" },
    { id: 26, name: "মান্নান", phone: "01744-254764" },
    { id: 27, name: "হাবিব", phone: "+880 1727-091429" },
    { id: 28, name: "রীনা ব্রাহ্মণবাড়", phone: "+880 1611-627534" },
    { id: 29, name: "ইমরান এরশাদ", phone: "+8801776-539737" },
    { id: 30, name: "ইমরান এরশাদ", phone: "01615-547577" },
    { id: 31, name: "আহাদ", phone: "+8801716-530252" },
    { id: 32, name: "আনসারী", phone: "01765-324638" },
    { id: 33, name: "আনোয়ার ব্রাইভেট", phone: "+8801717-471086" },
    { id: 34, name: "অনোয়ার", phone: "016280-56060" },
    { id: 35, name: "বুরহান", phone: "01911-306579" },
    { id: 36, name: "বুরহান", phone: "+8801711-788803" },
    { id: 37, name: "কমাল ব্রাইভেট", phone: "01918-737738" },
    { id: 38, name: "লাদ্দু", phone: "+8801704-478106" },
    { id: 39, name: "লাদ্গতি ব্রাইভেট", phone: "01724-653274" },
    { id: 40, name: "মিজান", phone: "+8801775-134760" },
    { id: 41, name: "মিজান ব্রাইভেট", phone: "01762-138615" },
    { id: 42, name: "মনির", phone: "01720-469594" },
    { id: 43, name: "মনির", phone: "+8801902-598260" },
    { id: 44, name: "মুতাসিম", phone: "01719-623823" },
    { id: 45, name: "নাহিন ব্রাইভেট", phone: "01307-909384" }
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
      <h2 style={styles.title}>যোগাযোগের তালিকা</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ক্রমিক</th>
            <th style={styles.th}>নাম</th>
            <th style={styles.th}>ফোন নম্বর</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact.id} style={styles.row(index)}>
              <td style={styles.td}>{contact.id}</td>
              <td style={styles.td}>{contact.name}</td>
              <td style={styles.td}>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;