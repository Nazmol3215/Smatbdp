import React from 'react';

const WardTable = () => {
  const wards = [
    { number: '১নং', name: 'ভাভার' },
    { number: '২নং', name: 'ভাভার বাজার' },
    { number: '৩নং', name: 'চাপড়াবাড়ী' },
    { number: '৪নং', name: 'গণপতি রোড' },
    { number: '৫নং', name: 'পূর্ব ভাদুর' },
    { number: '৬নং', name: 'মেজিডাটা' },
    { number: '৭নং', name: 'খারাপটি' },
    { number: '৮নং', name: 'কাঠালী বাবুর পাড়া' },
    { number: '৯নং', name: 'কাঠালী' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">তালুকা পৌরসভা ওয়ার্ড সমূহ</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">ওয়ার্ডের নং</th>
            <th className="border border-gray-400 px-4 py-2">ওয়ার্ডে অন্তর্ভুক্ত গ্রাম/মহল্লার নাম</th>
          </tr>
        </thead>
        <tbody>
          {wards.map((ward, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{ward.number}</td>
              <td className="border border-gray-400 px-4 py-2">{ward.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WardTable;
