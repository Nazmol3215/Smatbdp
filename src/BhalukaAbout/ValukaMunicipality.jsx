import React, { useState } from 'react';

const ValukaMunicipality = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "পৌরসভার সাধারণ তথ্য",
      answer: (
        <>
          <ul>
            <li>১. জেলাঃ ময়মনসিংহ, উপজেলাঃ ভালুকা।</li>
            <li>২. সীমানাঃ উত্তরে ভরাডোবা ও মল্লিকবাড়ী ইউনিয়ন, পূর্বে ভরাডোবা ভালুকা ইউনিয়ন, দক্ষিণে ভালুকা ও মল্লিকবাড়ী ইউনিয়ন, এবং পশ্চিমে মল্লিকবাড়ী ইউনিয়ন।</li>
            <li>৩. জেলা সদর হতে দূরত্বঃ ৪৮ কিঃমিঃ।</li>
            <li>৪. আয়তনঃ ১০.৪২ বর্গ কিলোমিটার।</li>
            <li>৫. জনসংখ্যাঃ ৬৩,৭৭৩ জন (পাঁচ বৎসর পূর্বের তথ্য অনুযায়ী)। বর্তমান লোকসংখ্যা প্রায় ১,৬০,০০০ জন।</li>
          </ul>
        </>
      ),
    },
    {
      question: "পৌরসভার শিক্ষা, ধর্মীয় ও সামাজিক প্রতিষ্ঠান",
      answer: (
        <>
          <h4>১. শিক্ষা প্রতিষ্ঠান</h4>
          <ul>
            <li>ক) কিন্ডার গার্ডেন : ৩০টি।</li>
            <li>খ) মোট প্রাথমিক বিদ্যালয় : ৬টি (সরকারী ৪টি, বেঃকমিউঃ ২টি)।</li>
            <li>গ) নিম্ন মাধ্যমিক বিদ্যালয় : ১টি।</li>
            <li>ঘ) উচ্চ মাধ্যমিক বিদ্যালয় : ২টি।</li>
            <li>ঙ) মহাবিদ্যালয় : ১টি।</li>
            <li>চ) কারিগরি মহাবিদ্যালয় : ১টি।</li>
            <li>ছ) কামিল মাদ্রাসা : ১টি।</li>
            <li>জ) দাখিল মাদ্রাসা : ২টি।</li>
            <li>ঝ) কওমী মাদ্রাসা : ২টি।</li>
          </ul>

          <h4>২. ধর্মীয় প্রতিষ্ঠান</h4>
          <ul>
            <li>ক) মসজিদ : ৪১টি।</li>
            <li>খ) মন্দির : ৪টি।</li>
            <li>গ) গীর্জা : ১টি।</li>
            <li>ঘ) ঈদগাহ মাঠ : ৬টি।</li>
            <li>ঙ) মাজার : ৪টি।</li>
            <li>চ) তীর্থস্থান : ২টি।</li>
          </ul>

          <h4>৩. সামাজিক প্রতিষ্ঠান</h4>
          <ul>
            <li>ক) সমবায় সমিতির সংখ্যা : ১০টি।</li>
            <li>খ) এতিমখানা : ৩টি।</li>
            <li>গ) কবরস্থান : ১টি।</li>
            <li>ঘ) শ্মশান : ১টি।</li>
          </ul>
        </>
      ),
    },
    {
      question: "পৌরসভায় অবস্থিত বিভিন্ন প্রতিষ্ঠান",
      answer: (
        <>
          <h4>১. স্বাস্থ্য কেন্দ্র</h4>
          <ul>
            <li>ক) সরকারি হাসপাতাল : ১টি (শয্যা সংখ্যা - ৫০টি)।</li>
            <li>খ) বেসরকারী হাসপাতাল : ৩টি।</li>
            <li>গ) কমিউনিটি ক্লিনিক : ১টি।</li>
            <li>ঘ) এনজিও কর্তৃক পরিচালিত স্বাস্থ্যকেন্দ্র : ১টি।</li>
            <li>ঙ) ডায়াগোনোস্টিক সেন্টার : ৬টি।</li>
          </ul>
          <h4>২. সরকারী/অন্যান্য সেবামূলক প্রতিষ্ঠান</h4>
          <ul>
            <li>ক) ভূমি অফিস : ১টি।</li>
            <li>খ) ব্যাংক : ১০টি।</li>
            <li>গ) ডাকবাংলো/রেষ্টহাউজ : ২টি।</li>
            <li>ঘ) ফায়ার সার্ভিস ষ্টেশন : ১টি।</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>পৌরসভা সম্পর্কিত তথ্য</h2>
      <div style={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div key={index} style={styles.faqItem}>
            <div 
              onClick={() => toggleAnswer(index)} 
              style={styles.question}
            >
              {item.question}
            </div>
            {activeIndex === index && (
              <div style={styles.answer}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>ওয়ার্ডের নং</th>
                <th style={styles.tableHeader}>ওয়ার্ডে অন্তর্ভুক্ত গ্রাম/মহল্লার নাম</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableCell}>১নং</td>
                <td style={styles.tableCell}>ভান্ডাব</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>২নং</td>
                <td style={styles.tableCell}>ভালুকা বাজার</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>৩নং</td>
                <td style={styles.tableCell}>চাপরবাড়ী</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>৪নং</td>
                <td style={styles.tableCell}>গফরগাঁও রোড</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>৫নং</td>
                <td style={styles.tableCell}>পূর্ব ভালুকা</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>৬নং</td>
                <td style={styles.tableCell}>মেজরভিটা</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>৭নং</td>
                <td style={styles.tableCell}>খারুয়ালী</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>৮নং</td>
                <td style={styles.tableCell}>কাঠালী বাঘড়া পাড়া</td>
              </tr>
              <tr>
                <td style={styles.tableCell}>৯নং</td>
                <td style={styles.tableCell}>কাঠালী</td>
              </tr>
            </tbody>
          </table>

    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
    
  },
  header: {
    textAlign: 'center',
    fontSize: '28px',
    color: '#333',
    marginBottom: '20px',
  },
  faqContainer: {
    marginTop: '20px',
  },
  faqItem: {
    marginBottom: '3px',
    borderBottom: '3px solid #ddd',
    paddingBottom: '5px',

  },
  question: {
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#007BFF',
    transition: 'color 0.3s',
    border: '4px solid green',
padding:'12px'

  },
  questionHover: {
    color: '#0056b3',
  },
  answer: {
    marginTop: '10px',
    fontSize: '16px',
    color: '#555',
    paddingLeft: '20px',
  },
};

export default ValukaMunicipality;
