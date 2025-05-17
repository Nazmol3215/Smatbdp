import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [teachers, setTeachers] = useState([]);
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/teachers");
    setTeachers(res.data);
  };

  useEffect(() => {
    if (isAuth) fetchData();
  }, [isAuth]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/admin/${id}`, { headers: { password } });
    fetchData();
  };

  const handleUpdate = async (id) => {
    const newName = prompt("New Name:");
    if (newName) {
      await axios.put(`http://localhost:5000/api/admin/${id}`, { imageName: newName }, { headers: { password } });
      fetchData();
    }
  };

  if (!isAuth) {
    return (
      <div>
        <input
          placeholder="Enter Admin Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => setIsAuth(true)}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {teachers.map(t => (
        <div key={t._id}>
          <h4>{t.imageName}</h4>
          <button onClick={() => handleUpdate(t._id)}>Edit</button>
          <button onClick={() => handleDelete(t._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
