// components/CustomUserList.jsx
import React, { useEffect, useState } from "react";

const CustomUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://bdback-5ofz.onrender.com/api/custom-users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>সব ইউজারের তালিকা</h2>
      {users.map((user) => (
        <div key={user._id} style={{ border: "1px solid gray", marginBottom: "10px", padding: "10px" }}>
          <img src={user.imageUrl} alt={user.imageName} width="100" /><br/>
          <strong>{user.imageName}</strong><br/>
          ফোন: {user.phone}<br/>
          পেশা: {user.profession}<br/>
          ইমেল: {user.email}<br/>
        </div>
      ))}
    </div>
  );
};

export default CustomUserList;
