import React, { useEffect, useState } from 'react';

export default function OfferList() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortByDuration, setSortByDuration] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

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

  const handleBuyClick = (offer) => {
    setSelectedOffer(offer);
    setShowForm(true);
  };

  const handleSubmitOrder = async () => {
    if (!customerName || !customerPhone) {
      alert("দয়া করে নাম ও ফোন নম্বর লিখুন");
      return;
    }

    const orderData = {
      name: customerName,
      phone: customerPhone,
      offerName: selectedOffer.name
    };

    try {
      const res = await fetch('https://your-backend-api.com/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      if (res.ok) {
        alert("✅ অর্ডার সম্পন্ন হয়েছে!");
        setShowForm(false);
        setCustomerName('');
        setCustomerPhone('');
      } else {
        alert("❌ অর্ডার পাঠাতে সমস্যা হয়েছে");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("⚠️ সার্ভারে সমস্যা হয়েছে");
    }
  };

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

      <input
        type="text"
        placeholder="🔍 অফার খুঁজুন"
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
          <li key={offer._id} style={{
            marginBottom: 15,
            border: '1px solid #ddd',
            padding: 10,
            borderRadius: 5,
            backgroundColor: '#f9f9f9'
          }}>
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
              onClick={() => handleBuyClick(offer)}
            >
              🛒 কিনুন
            </button>
          </li>
        ))}
      </ul>

      {/* অর্ডার ফর্ম */}
      {showForm && (
        <div style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 10,
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          marginTop: 20
        }}>
          <h3>📝 অর্ডার ফর্ম ({selectedOffer.name})</h3>
          <input
            type="text"
            placeholder="👤 আপনার নাম"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            style={{ width: '100%', padding: 8, marginBottom: 10 }}
          />
          <input
            type="text"
            placeholder="📞 ফোন নম্বর"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            style={{ width: '100%', padding: 8, marginBottom: 10 }}
          />
          <button
            onClick={handleSubmitOrder}
            style={{
              backgroundColor: '#28a745',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: 5,
              cursor: 'pointer'
            }}
          >
            ✅ অর্ডার কনফার্ম করুন
          </button>{' '}
          <button
            onClick={() => setShowForm(false)}
            style={{
              backgroundColor: '#dc3545',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: 5,
              marginLeft: 10
            }}
          >
            ❌ বাতিল
          </button>
        </div>
      )}
    </div>
  );
}
