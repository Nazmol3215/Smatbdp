import React, { useEffect, useState } from 'react';

export default function OfferList() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortByDuration, setSortByDuration] = useState(false);

  useEffect(() => {
    fetch('https://bdback-5ofz.onrender.com/api/offers')
      .then(res => res.json())
      .then(data => {
        setOffers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching offers:', err);
        setLoading(false);
      });
  }, []);

  const getDays = duration => {
    const number = parseInt(duration);
    return isNaN(number) ? 0 : number;
  };

  // ফিল্টার ও সার্চ অ্যাপ্লাই
  let filteredOffers = offers
    .filter(offer =>
      offer.name.toLowerCase().includes(search.toLowerCase()) ||
      offer.type.toLowerCase().includes(search.toLowerCase())
    )
    .filter(offer => filterType === 'all' || offer.type === filterType);

  if (sortByDuration) {
    filteredOffers = [...filteredOffers].sort(
      (a, b) => getDays(a.duration) - getDays(b.duration)
    );
  }

  if (loading) return <p>লোড হচ্ছে...</p>;

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>📢 সকল অফার</h2>

      {/* Admin Panel Button */}
      <div style={{ textAlign: 'right', marginBottom: 10 }}>
        <a
          href="/OfferForm"
          style={{
            textDecoration: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: 5
          }}
        >
          ➕ নতুন অফার যুক্ত করুন
        </a>
      </div>

      {/* Search Field */}
      <input
        type="text"
        placeholder="🔍 অফার খুঁজুন (নাম বা টাইপ)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: 8,
          marginBottom: 10,
          border: '1px solid #ccc',
          borderRadius: 5
        }}
      />

      {/* Filter and Sort Buttons */}
      <div style={{ marginBottom: 10 }}>
        <strong>টাইপ:</strong>{' '}
        <button onClick={() => setFilterType('all')}>সব</button>{' '}
        <button onClick={() => setFilterType('MB')}>MB</button>{' '}
        <button onClick={() => setFilterType('Minute')}>Minute</button>{' '}
        <button
          onClick={() => setSortByDuration(!sortByDuration)}
          style={{ float: 'right' }}
        >
          {sortByDuration ? '↕️ মেয়াদ অনুযায়ী সাজানো বন্ধ' : '📅 মেয়াদ অনুযায়ী সাজান'}
        </button>
      </div>

      {filteredOffers.length === 0 && <p>😞 কোনো অফার পাওয়া যায়নি</p>}

      <ul>
        {filteredOffers.map((offer) => (
          <li
            key={offer._id}
            style={{
              marginBottom: 15,
              border: '1px solid #ddd',
              padding: 10,
              borderRadius: 5,
              backgroundColor: '#f9f9f9'
            }}
          >
            <strong>🎁 {offer.name}</strong><br />
            ধরন: {offer.type} <br />
            মূল্য: ৳{offer.price}<br />
            মেয়াদ: {offer.duration}<br />
            <button
              style={{
                marginTop: 8,
                backgroundColor: 'green',
                color: 'white',
                padding: '6px 12px',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer'
              }}
              onClick={() => alert(`✅ "${offer.name}" অফার কেনা হয়েছে!`)}
            >
              🛒 কিনুন
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
