import React from 'react';

const UpazilaAdmin = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f7fc' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px', fontSize: '26px', fontWeight: 'bold' }}>
        উপজেলা প্রশাসন
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
        {/* UNO */}
        <div style={{
          width: '320px',
          border: '1px solid #ddd',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          backgroundColor: '#fff',
        }}>
          <img
            src="uno_image_url"
            alt="UNO"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              display: 'block',
              margin: '0 auto',
              border: '3px solid #ddd',
            }}
          />
          <h3 style={{ marginTop: '15px', fontSize: '20px', textAlign: 'center', color: '#222', fontWeight: '600' }}>
            উপজেলা নির্বাহী অফিসার (UNO)
          </h3>
          <p style={{ textAlign: 'center', color: '#555', margin: '10px 0', fontSize: '16px' }}>
            01733-373334
          </p>
          <p style={{ textAlign: 'center', color: '#888', fontSize: '14px', marginBottom: '0' }}>
            unobhaluka@mopa.gov.bd
          </p>
        </div>
        {/* AC Land */}
        <div style={{
          width: '320px',
          border: '1px solid #ddd',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          backgroundColor: '#fff',
        }}>
          <img
            src="acland_image_url"
            alt="AC Land"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              display: 'block',
              margin: '0 auto',
              border: '3px solid #ddd',
            }}
          />
          <h3 style={{ marginTop: '15px', fontSize: '20px', textAlign: 'center', color: '#222', fontWeight: '600' }}>
            ভূমি অফিসার (এসি ল্যান্ড)
          </h3>
          <p style={{ textAlign: 'center', color: '#555', margin: '10px 0', fontSize: '16px' }}>
            ০১৩১৩৯৮৬৫৩৫
          </p>
          <p style={{ textAlign: 'center', color: '#888', fontSize: '14px', marginBottom: '0' }}>
            aclandbhaluka2020@gmail.com
          </p>
        </div>
      </div>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>
        পূর্বতন উপজেলা নির্বাহী কর্মকর্তাগণ
      </h2>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        margin: 'auto',
        maxWidth: '800px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f1f1f1', color: '#333' }}>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center', fontWeight: '600' }}>ক্রম নং</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center', fontWeight: '600' }}>নাম</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center', fontWeight: '600' }}>হতেই</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center', fontWeight: '600' }}>পর্যন্ত</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ textAlign: 'center', color: '#555' }}>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>০১</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>সালমান মাহমুদ</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>০৪-০৩-২০১৫</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>০৫-০২-২০১৮</td>
          </tr>
          <tr style={{ textAlign: 'center', color: '#555' }}>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>০২</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>মাসুদ কামাল</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>১৭-০৩-২০১৮</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>২২-০৩-২০২০</td>
          </tr>
          <tr style={{ textAlign: 'center', color: '#555' }}>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>০৩</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>ডা. এফরিনা আহমেদ</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>০২-০৫-২০২০</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>১১-০৪-২০২২</td>
          </tr>
          <tr style={{ textAlign: 'center', color: '#555' }}>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>০৪</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>সুমাইয়া আজাদ (প্রবল)</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>১২-০৪-২০২২</td>
            <td style={{ padding: '12px', border: '1px solid #ddd' }}>চলমান</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpazilaAdmin;
