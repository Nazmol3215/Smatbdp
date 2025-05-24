import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [password, setPassword] = useState('');
  const [access, setAccess] = useState(false);
  const [cattles, setCattles] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://bdback-5ofz.onrender.com/api/cattle');
    const data = await res.json();
    setCattles(data);
  };

  useEffect(() => {
    if (access) fetchData();
  }, [access]);

  const handleLogin = async () => {
    const res = await fetch('https://bdback-5ofz.onrender.com/api/dashboard/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (data.success) setAccess(true);
    else alert('Password ভুল');
  };

  const handleDelete = async (id) => {
    await fetch(`https://bdback-5ofz.onrender.com/api/dashboard/${id}`, { method: 'DELETE' });
    fetchData();
  };

  return access ? (
    <div>
      <h2>এডমিন ড্যাশবোর্ড</h2>
      {cattles.map(cow => (
        <div key={cow._id} style={{ border: '1px solid red', marginBottom: '10px' }}>
          <img src={cow.imageLink} width="150" alt={cow.imageName} />
          <h3>{cow.imageName}</h3>
          <p>{cow.message}</p>
          <button onClick={() => handleDelete(cow._id)}>Delete</button>
        </div>
      ))}
    </div>
  ) : (
    <div>
      <h3>এডমিন পাসওয়ার্ড দিন</h3>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>লগইন</button>
    </div>
  );
};

export default AdminDashboard;
