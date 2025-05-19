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

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedOffer(null);
    setCustomerName('');
    setCustomerPhone('');
  };

  const handleSubmitOrder = async () => {
    if (!customerName || !customerPhone) {
      alert("দয়া করে নাম ও ফোন নম্বর দিন");
      return;
    }

    const orderData = {
      name: customerName,
      phone: customerPhone,
      offerName: selectedOffer.name
    };

    try {
      const res = await fetch('https://bdback-5ofz.onrender.com/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ অর্ডার সম্পন্ন হয়েছে");
        handleCloseForm();
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("⚠️ সার্ভার সমস্যা");
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

  if (loading) return <p className="text-center">লোড হচ্ছে...</p>;

  return (
    <div className="container my-4" style={{ position: 'relative' }}>
      <h2 className="text-center mb-4">📢 সকল অফার</h2>

      <input
        type="text"
        placeholder="🔍 অফার খুঁজুন"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control mb-3"
        disabled={showForm}
      />

      <div className="mb-3 d-flex justify-content-between align-items-center flex-wrap">
        <div>
          <strong>টাইপ:</strong>{' '}
          <button onClick={() => setFilterType('all')} className="btn btn-sm btn-outline-primary me-1" disabled={showForm}>সব</button>
          <button onClick={() => setFilterType('MB')} className="btn btn-sm btn-outline-primary me-1" disabled={showForm}>MB</button>
          <button onClick={() => setFilterType('Minute')} className="btn btn-sm btn-outline-primary" disabled={showForm}>Minute</button>
        </div>
        <button
          onClick={() => setSortByDuration(!sortByDuration)}
          className="btn btn-sm btn-outline-success mt-2 mt-sm-0"
          disabled={showForm}
        >
          {sortByDuration ? '↕️ মেয়াদ অনুযায়ী সাজানো বন্ধ' : '📅 মেয়াদ অনুযায়ী সাজান'}
        </button>
      </div>

      {/* অফার লিস্ট */}
      <div
        className="row"
        style={{
          filter: showForm ? 'blur(4px)' : 'none',
          pointerEvents: showForm ? 'none' : 'auto',
          transition: '0.3s'
        }}
      >
        {filteredOffers.map((offer) => (
          <div className="col-md-4 mb-4  col-6 md-3 mb-4" key={offer._id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">🎁 {offer.name}</h5>
                <p className="card-text">
                  ধরন: {offer.type} <br />
                  মূল্য: ৳{offer.price} <br />
                  মেয়াদ: {offer.duration}
                </p>
                <button
                  className="btn btn-success"
                  onClick={() => handleBuyClick(offer)}
                  disabled={showForm}
                >
                  🛒 কিনুন
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* অর্ডার ফর্ম */}
      {showForm && selectedOffer && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 10,
          boxShadow: '0 0 20px rgba(0,0,0,0.4)',
          zIndex: 100
        }}>
          <button
            onClick={handleCloseForm}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              background: 'transparent',
              border: 'none',
              fontSize: 22,
              cursor: 'pointer'
            }}
          >
            ❌
          </button>
          <h4>📝 অর্ডার ফর্ম ({selectedOffer.name})</h4>
          <input
            type="text"
            placeholder="👤 আপনার নাম"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="form-control mb-2"
          />
          <input
            type="text"
            placeholder="📞 ফোন নম্বর"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            className="form-control mb-3"
          />
          <button
            onClick={handleSubmitOrder}
            className="btn btn-success"
          >
            ✅ অর্ডার কনফার্ম করুন
          </button>
        </div>
      )}
    </div>
  );
}
