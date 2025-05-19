import React, { useEffect, useState } from 'react';

const ManagerPanel = () => {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://bdback-5ofz.onrender.com/api/orders?password=${password}`);
      const data = await res.json();
      if (res.ok) {
        setOrders(data);
        setAuthorized(true);
        setError('');
      } else {
        setError(data.message || 'ত্রুটি ঘটেছে');
      }
    } catch {
      setError('সার্ভারে সমস্যা');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (authorized) {
      fetchOrders();
    }
  }, [authorized]);

  const handleDelete = async (id) => {
    if (!window.confirm('আপনি কি নিশ্চিত ডিলিট করতে চান?')) return;
    try {
      const res = await fetch(`https://bdback-5ofz.onrender.com/api/orders/${id}?password=${password}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (res.ok) {
        setOrders(orders.filter((order) => order._id !== id));
      } else {
        alert(data.message || 'ডিলিটে সমস্যা হয়েছে');
      }
    } catch {
      alert('সার্ভার সংযোগে সমস্যা');
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(
        `https://bdback-5ofz.onrender.com/api/orders/${editingOrder._id}?password=${password}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            offerName: editingOrder.offerName,
            phone: editingOrder.phone,
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setOrders(
          orders.map((order) =>
            order._id === editingOrder._id ? { ...order, ...data } : order
          )
        );
        setEditingOrder(null);
      } else {
        alert(data.message || 'আপডেটে সমস্যা');
      }
    } catch {
      alert('সার্ভার ত্রুটি');
    }
  };

  if (!authorized) {
    return (
      <div style={{ textAlign: 'center', marginTop: 100 }}>
        <h2>🔐 পাসওয়ার্ড দিন</h2>
        <input
          type="password"
          placeholder="পাসওয়ার্ড"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: 10, fontSize: 16 }}
        />
        <br />
        <button
          onClick={fetchOrders}
          style={{ marginTop: 10, padding: '10px 20px', fontSize: 16 }}
        >
          প্রবেশ করুন
        </button>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: 'auto' }}>
      <h2>📦 অর্ডার তালিকা</h2>
      {loading && <p>লোড হচ্ছে...</p>}
      {!loading && orders.length === 0 && <p>কোন অর্ডার পাওয়া যায়নি।</p>}
      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            border: '1px solid #ccc',
            margin: '10px 0',
            padding: 15,
            borderRadius: 10,
            backgroundColor: '#f9f9f9',
          }}
        >
          <p>📝 অফার: {order.offerName}</p>
          <p>📞 ফোন: {order.phone}</p>
          <div>
            <button onClick={() => setEditingOrder(order)} style={{ marginRight: 10 }}>
              ✏️ এডিট
            </button>
            <button onClick={() => handleDelete(order._id)}>❌ ডিলিট</button>
          </div>
        </div>
      ))}

      {editingOrder && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: 20,
              borderRadius: 10,
              width: '90%',
              maxWidth: 400,
            }}
          >
            <h3>✏️ অর্ডার এডিট করুন</h3>
            <input
              type="text"
              value={editingOrder.offerName}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, offerName: e.target.value })
              }
              placeholder="অফার নাম"
              style={{ width: '100%', marginBottom: 10, padding: 8 }}
            />
            <input
              type="text"
              value={editingOrder.phone}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, phone: e.target.value })
              }
              placeholder="ফোন নম্বর"
              style={{ width: '100%', marginBottom: 10, padding: 8 }}
            />
            <div>
              <button onClick={handleUpdate} style={{ marginRight: 10 }}>
                ✅ আপডেট
              </button>
              <button onClick={() => setEditingOrder(null)}>❌ বাতিল</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerPanel;
