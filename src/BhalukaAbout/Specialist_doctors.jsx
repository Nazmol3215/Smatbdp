import React from 'react';

const faqData = [
  { serial: '01', doctor: 'অধ্যাপক (সহঃ) ডাঃ মুশফিকুর রহমান', specialist: 'নবজাতক ও শিশু রোগ বিশেষজ্ঞ', mobile: '01712-288455' },
  { serial: '02', doctor: 'অধ্যাপক (সহঃ) ডাঃ আশীষ কুমার রায়', specialist: 'হৃদরোগ ও মেডিসিন বিশেষজ্ঞ', mobile: '01710-077111' },
  { serial: '03', doctor: 'অধ্যাপক (সহঃ) ডাঃ সোহেল রানা', specialist: 'মেডিসিন ও হৃদরোগ বিশেষজ্ঞ', mobile: '01716-943691' },
  { serial: '04', doctor: 'অধ্যাপক (সহঃ) ডাঃ সুস্থির সরকার', specialist: 'চর্ম, যৌন ও এলাজি বিশেষজ্ঞ', mobile: '01712-386065' },
  { serial: '05', doctor: 'অধ্যাপক (সহঃ) ডাঃ ইকবাল মনির', specialist: 'নাক-কান-গলা বিশেষজ্ঞ', mobile: '01711-361346' },
  { serial: '06', doctor: 'ডাঃ ফাইজা চৌধুরী', specialist: 'গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ', mobile: '01717-620818' },
  { serial: '07', doctor: 'ডাঃ সায়াদ উল্লাহ', specialist: 'মেডিসিন ও গ্যাস্ট্রোলিভার বিশেষজ্ঞ', mobile: '01711-444299' },
  { serial: '08', doctor: 'ডাঃ সালমা আতিয়া', specialist: 'গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ', mobile: '01712-590573' },
  { serial: '09', doctor: 'ডাঃ রিপন কুমার রায়', specialist: 'হাড়জোড়া বিশেষজ্ঞ (অর্থোপেডিক্স সার্জন)', mobile: '01712-778144' },
  { serial: '10', doctor: 'ডাঃ শরীফুল ইসলাম খান', specialist: 'মেডিসিন ও গ্যাস্ট্রোলিভার বিশেষজ্ঞ', mobile: '01818-656797' },
  { serial: '11', doctor: 'ডাঃ পংকজ দাস', specialist: 'নিউরোমেডিসিন বিশেষজ্ঞ', mobile: '01771-085823' },
  { serial: '12', doctor: 'ডাঃ ফাতেমা মাজাহার', specialist: 'গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ', mobile: '01712-000552' },
  { serial: '13', doctor: 'ডাঃ সাদিকুর রহমান', specialist: 'নাক-কান-গলা বিশেষজ্ঞ', mobile: '01729-271072' },
  { serial: '14', doctor: 'ডাঃ মোস্তাফিজুর রহমান', specialist: 'কিডনী বিশেষজ্ঞ', mobile: '01716-200058' },
  { serial: '15', doctor: 'ডাঃ সালেকিন মামুন', specialist: 'মেডিসিন ও হরমোন বিশেষজ্ঞ', mobile: '01670-550133' },
  { serial: '16', doctor: 'ডাঃ রুকুনুজ্জামান', specialist: 'চর্ম, যৌন ও এলাজি বিশেষজ্ঞ', mobile: '01920-607280' },
  { serial: '17', doctor: 'ডাঃ হেনরি অধিকারি', specialist: 'আল্ট্রাসনো ও এক্সরে বিশেষজ্ঞ', mobile: '01722-882324' },
  { serial: '18', doctor: 'ডাঃ জুনায়েদ হোসেন', specialist: 'দন্তরোগ বিশেষজ্ঞ', mobile: '01825-001780' },
  { serial: '19', doctor: 'ডাঃ জেরিন সোলাইমান রিজা', specialist: 'গাইনী ও প্রসূতি রোগ বিশেষজ্ঞ', mobile: '01984-445985' },
  { serial: '20', doctor: 'ডাঃ মোর্শেদুল ইসলাম', specialist: 'আবাসিক চিকিৎসক', mobile: '01980-749428' },
  { serial: '21', doctor: 'ডাঃ আনোয়ারুল হক', specialist: 'আবাসিক চিকিৎসক', mobile: '01521-405347' },
  { serial: '22', doctor: 'ডাঃ শামীম রেজা', specialist: 'আবাসিক চিকিৎসক', mobile: '01521-404424' },
  { serial: '23', doctor: 'ডাঃ আবু নাইম', specialist: 'আবাসিক চিকিৎসক', mobile: '01568-658636' },
  { serial: '24', doctor: 'ডাঃ বিন-ইয়ামিন', specialist: 'আবাসিক চিকিৎসক', mobile: '01752-063936' },
];

const Specialist_doctors = () => {
  return (
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#4CAF50' }}>বিশেষজ্ঞ ডাক্তারগন</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead style={{ backgroundColor: '#f4f4f4', color: '#333' }}>
          <tr>
            <th style={tableHeaderStyle}>ক্রমিক</th>
            <th style={tableHeaderStyle}>ডাক্তারের নাম</th>
            <th style={tableHeaderStyle}>বিশেষজ্ঞ</th>
            <th style={tableHeaderStyle}>মোবাইল</th>
          </tr>
        </thead>
        <tbody>
          {faqData.map((item, index) => (
            <tr key={index} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
              <td style={tableCellStyle}>{item.serial}</td>
              <td style={tableCellStyle}>{item.doctor}</td>
              <td style={tableCellStyle}>{item.specialist}</td>
              <td style={tableCellStyle}>{item.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  padding: '12px',
  textAlign: 'left',
  backgroundColor: '#4CAF50',
  color: 'white',
  fontSize: '16px',
};

const tableCellStyle = {
  padding: '12px',
  textAlign: 'left',
  border: '1px solid #ddd',
  fontSize: '14px',
};

const evenRowStyle = {
  backgroundColor: '#f9f9f9',
};

const oddRowStyle = {
  backgroundColor: '#fff',
};

export default Specialist_doctors;
