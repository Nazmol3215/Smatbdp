import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [password, setPassword] = useState('');
  const [granted, setGranted] = useState(false);
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:5000/api/users');
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleLogin = () => {
    if (password === '12345') {
      setGranted(true);
      fetchUsers();
    } else {
      alert('ভুল পাসওয়ার্ড!');
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('আপনি কি নিশ্চিতভাবে ডিলিট করতে চান?');
    if (!confirmDelete) return;

    try {
      setLoading(true);
      await axios.delete(`http://localhost:5000/api/users/${id}?password=${password}`);
      fetchUsers();
    } catch (error) {
      console.error(error);
      alert('ডিলিট করতে সমস্যা হয়েছে!');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);
      await axios.put(`http://localhost:5000/api/users/${editUser._id}`, {
        password,
        data: editUser,
      });
      setEditUser(null);
      fetchUsers();
    } catch (error) {
      console.error(error);
      alert('আপডেট করতে সমস্যা হয়েছে!');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    backgroundColor: darkMode ? '#121212' : '#f2f2f2',
    color: darkMode ? '#ffffff' : '#000000',
    minHeight: '100vh',
    padding: '20px',
    transition: '0.3s',
  };

  const cardStyle = {
    backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '15px',
    boxShadow: darkMode ? '0 0 10px #333' : '0 0 10px #ccc',
    opacity: '0',
    animation: 'fadeIn 0.5s forwards',
  };

  const buttonStyle = {
    marginRight: '10px',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      {!granted ? (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <h2>এডমিন লগইন</h2>
          <input
            type="password"
            placeholder="পাসওয়ার্ড দিন"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '10px',
              margin: '10px 0',
              width: '200px',
              borderRadius: '5px',
              transition: 'all 0.3s',
            }}
          />
          <br />
          <button
            onClick={handleLogin}
            style={{
              ...buttonStyle,
              backgroundColor: '#4CAF50',
              color: '#fff',
            }}
          >
            লগইন
          </button>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>এডমিন ড্যাশবোর্ড</h2>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                ...buttonStyle,
                backgroundColor: darkMode ? '#ff9800' : '#333',
                color: '#fff',
              }}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <div className="spinner"></div>
              <p>লোড হচ্ছে...</p>
            </div>
          ) : (
            <div>
              {users.map((user) => (
                <div key={user._id} style={cardStyle}>
                  <p>
                    <strong>{user.name}</strong> ({user.type}) - {user.address}
                  </p>
                  <button
                    onClick={() => setEditUser(user)}
                    style={{
                      ...buttonStyle,
                      backgroundColor: '#2196F3',
                      color: '#fff',
                      transform: 'scale(1)',
                      '&:hover': { transform: 'scale(1.1)' },
                    }}
                  >
                    এডিট
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    style={{
                      ...buttonStyle,
                      backgroundColor: '#f44336',
                      color: '#fff',
                      transform: 'scale(1)',
                      '&:hover': { transform: 'scale(1.1)' },
                    }}
                  >
                    ডিলিট
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* মডাল এডিট ফর্ম */}
          {editUser && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'fadeIn 0.5s forwards',
              }}
            >
              <div
                style={{
                  backgroundColor: darkMode ? '#333' : '#fff',
                  padding: '30px',
                  borderRadius: '10px',
                  width: '90%',
                  maxWidth: '400px',
                  opacity: '0',
                  animation: 'fadeIn 0.5s forwards',
                }}
              >
                <h3>এডিট করুন</h3>
                <input
                  type="text"
                  value={editUser.name}
                  onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '5px',
                    transition: 'all 0.3s',
                  }}
                />
                <input
                  type="text"
                  value={editUser.type}
                  onChange={(e) => setEditUser({ ...editUser, type: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '5px',
                    transition: 'all 0.3s',
                  }}
                />
                <input
                  type="text"
                  value={editUser.address}
                  onChange={(e) => setEditUser({ ...editUser, address: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '5px',
                    transition: 'all 0.3s',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <button
                    onClick={handleUpdate}
                    style={{
                      ...buttonStyle,
                      backgroundColor: '#4CAF50',
                      color: '#fff',
                      width: '48%',
                      transition: 'transform 0.3s',
                      '&:hover': { transform: 'scale(1.1)' },
                    }}
                  >
                    আপডেট
                  </button>
                  <button
                    onClick={() => setEditUser(null)}
                    style={{
                      ...buttonStyle,
                      backgroundColor: '#f44336',
                      color: '#fff',
                      width: '48%',
                      transition: 'transform 0.3s',
                      '&:hover': { transform: 'scale(1.1)' },
                    }}
                  >
                    বাতিল
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* লোডিং স্পিনারের স্টাইল */}
      <style>
        {`
          .spinner {
            border: 6px solid #f3f3f3;
            border-top: 6px solid #3498db;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: auto;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AdminDashboard;
