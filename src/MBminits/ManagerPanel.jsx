import React, { useState } from 'react';

export default function ManagerPanel() {
  const [password, setPassword] = useState('');
  const [access, setAccess] = useState(false);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch('https://bdback-5ofz.onrender.com/api/orders/view', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await res.json();
      if (res.ok) {
        setOrders(data);
        setAccess(true);
        setError('');
      } else {
        setError(data.error || 'ভুল পাসওয়ার্ড');
      }
    } catch (err) {
      setError('সার্ভার সমস্যা হয়েছে');
    }
  };

  if (!access) {
    return (
      <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
        <h3>🔐 প্যানেলে ঢুকতে পাসওয়ার্ড দিন</h3>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="পাসওয়ার্ড লিখুন"
          style={{
            width: '100%',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
            border: '1px solid #ccc'
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            backgroundColor: 'green',
            color: 'white',
            padding: 10,
            border: 'none',
            borderRadius: 5
          }}
        >
          প্রবেশ করুন
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: 20 }}>
      <h2>📋 সব অর্ডার</h2>
      {orders.length === 0 ? (
        <p>কোনো অর্ডার পাওয়া যায়নি।</p>
      ) : (
        <ul>
          {orders.map((o, index) => (
            <li key={index} style={{
              background: '#f2f2f2',
              marginBottom: 10,
              padding: 10,
              borderRadius: 5
            }}>
              <strong>{o.offerName}</strong><br />
              ধরন: {o.type} | মূল্য: ৳{o.price} | মেয়াদ: {o.duration}<br />
              🕒 তারিখ: {new Date(o.date).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
