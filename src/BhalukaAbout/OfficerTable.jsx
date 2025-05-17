import React from 'react';

const OfficerTable = () => {
  const officers = [
    { serial: 1, name: 'মোঃ নুরুল ইসলাম', position: 'ইউপি চেয়ারম্যান', phone: '০১৭২৯৭০৩৩৮২' },
    { serial: 2, name: 'রফেল মন্ডল', position: 'প্রশাসক', phone: '০১৭১৪১০০০০' },
    { serial: 3, name: 'মোছাঃ ফাতেমা চৌধুরী', position: 'ইউনিয়ন পরিষদের মেম্বার', phone: '০১৭৫২-২৮০০৩৭' },
    { serial: 4, name: 'মোঃ মিনালা মাখুন', position: 'ইউনিয়ন পরিষদের মেম্বার', phone: '০১৭২৯-৩৩৮৭৮৮' },
    { serial: 5, name: 'মোঃ নাজমা মাখুন', position: 'ইউনিয়ন পরিষদের মেম্বার', phone: '০১৭৪১-১৮৮৮১২' },
    { serial: 6, name: 'মোঃ খলিদুর রহমান', position: 'ইউনিয়ন পরিষদের মেম্বার', phone: '০১৭১১-১৪৪৯৪৮' },
    { serial: 7, name: 'মোঃ আবুল মন্ডল', position: 'ইউনিয়ন পরিষদের মেম্বার', phone: '০১৭১৪৪৮৪৪৯৩' },
    { serial: 8, name: 'রতন মিয়া', position: 'প্রশাসক', phone: '০১৭১৫০০০১৪৪' },
    { serial: 9, name: 'মোঃ শহিদুল্লাহ মন্ডল', position: 'ইউনিয়ন পরিষদের মেম্বার', phone: '০১৭১৪৪৮৪৪৯৩' },
    { serial: 10, name: 'মোঃ ফখর মিয়া', position: 'ইউনিয়ন পরিষদের মেম্বার', phone: '০১৯৩৫-১৯৩৬৭৫' },
    { serial: 11, name: 'আবুল বাঘারে', position: 'ইউনিয়ন পরিষদের মেম্বার', phone: '০১৭১১-১৮৮৮১২' },
    { serial: 12, name: 'মোঃ আব্দুলজব্বার', position: 'ইউনিয়ন পরিষদের মেম্বার', phone: '০১৭১৫০০০১৪৪' },
    { serial: 13, name: 'মোঃ শফিকুল রাজ্জাক', position: 'ইউনিয়ন পরিষদের মেম্বার', phone: '০১৭১১-৩৩৮৮৭৭' },
    { serial: 14, name: 'গোপাল মুহাম্মদ বিরকিয়া', position: 'ইউনিয়ন পরিষদের মেম্বার', phone: '০১৭১২৫৯৮৯৯৮' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">অফিসারের তালিকা</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">ক্রমিক</th>
            <th className="border border-gray-400 px-4 py-2">নাম</th>
            <th className="border border-gray-400 px-4 py-2">পদবি</th>
            <th className="border border-gray-400 px-4 py-2">মোবাইল</th>
          </tr>
        </thead>
        <tbody>
          {officers.map((officer, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{officer.serial}</td>
              <td className="border border-gray-400 px-4 py-2">{officer.name}</td>
              <td className="border border-gray-400 px-4 py-2">{officer.position}</td>
              <td className="border border-gray-400 px-4 py-2">{officer.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OfficerTable;
