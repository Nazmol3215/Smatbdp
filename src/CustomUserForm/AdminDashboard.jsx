// components/AdminDashboard.jsx
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const fetchUsers = () => {
    fetch("http://localhost:5000/api/custom-users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    if (authenticated) fetchUsers();
  }, [authenticated]);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/custom-users/${id}?password=${password}`, {
      method: "DELETE",
    });
    fetchUsers();
  };

  const handleUpdate = async (id) => {
    const newName = prompt("নতুন ইমেজ নাম দিন:");
    if (newName) {
      await fetch(`http://localhost:5000/api/custom-users/${id}?password=${password}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageName: newName }),
      });
      fetchUsers();
    }
  };

  const handleLogin = () => {
    if (password === "123456") {
      setAuthenticated(true);
    } else {
      alert("ভুল পাসওয়ার্ড!");
    }
  };

  if (!authenticated) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>এডমিন লগইন</h2>
        <input
          type="password"
          placeholder="পাসওয়ার্ড দিন"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>লগইন</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>এডমিন ড্যাশবোর্ড</h2>
      {users.map((user) => (
        <div key={user._id} style={{ border: "1px solid red", marginBottom: "10px", padding: "10px" }}>
          <strong>{user.imageName}</strong> | {user.email}
          <br />
          <button onClick={() => handleUpdate(user._id)}>আপডেট</button>
          <button onClick={() => handleDelete(user._id)}>ডিলিট</button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
