import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [customUsers, setCustomUsers] = useState([]);
  const [houses, setHouses] = useState([]);
  const [members, setMembers] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [users, setUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const [editingItem, setEditingItem] = useState(null);
  const [editingModel, setEditingModel] = useState("");
  const [formData, setFormData] = useState({});

  const baseURL = "http://localhost:5000/api"; // তোমার ব্যাকএন্ড URL এখানে

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const endpoints = [
      { model: "custom-users", setter: setCustomUsers },
      { model: "houses", setter: setHouses },
      { model: "members", setter: setMembers },
      { model: "profiles", setter: setProfiles },
      { model: "users", setter: setUsers },
    ];

    endpoints.forEach(async ({ model, setter }) => {
      try {
        const res = await fetch(`${baseURL}/${model}`);
        const data = await res.json();
        setter(data);
      } catch (error) {
        console.error(`Error fetching ${model}`, error);
      }
    });
  };

  const handleDelete = async (model, id) => {
    if (window.confirm("ডেটা মুছে ফেলতে চান?")) {
      await fetch(`${baseURL}/${model}/${id}`, {
        method: "DELETE",
      });
      fetchData();
    }
  };

  const openEditModal = (model, item) => {
    setEditingModel(model);
    setEditingItem(item);
    setFormData(item);
  };

  const handleUpdate = async () => {
    await fetch(`${baseURL}/${editingModel}/${editingItem._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setEditingItem(null);
    fetchData();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const renderSection = (title, data, model) => (
    <div style={{ marginTop: "50px" }}>
      <h2 style={{ borderBottom: "2px solid gray", paddingBottom: "5px" }}>{title}</h2>
      {data.length === 0 ? (
        <p style={{ marginTop: "10px" }}>কোন ডেটা নেই।</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>
          {data.map((item) => (
            <div key={item._id} style={{
              background: darkMode ? "#1e1e1e" : "white",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}>
              {Object.entries(item).map(([key, value]) => (
                key !== "_id" && (
                  <p key={key}><strong>{key}:</strong> {value}</p>
                )
              ))}
              <div style={{ marginTop: "10px" }}>
                <button
                  onClick={() => openEditModal(model, item)}
                  style={{ margin: "5px", padding: "5px 10px", borderRadius: "6px", background: "#4caf50", color: "white", border: "none" }}
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(model, item._id)}
                  style={{ margin: "5px", padding: "5px 10px", borderRadius: "6px", background: "#f44336", color: "white", border: "none" }}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div style={{ background: darkMode ? "#121212" : "#f2f2f2", minHeight: "100vh", padding: "20px", color: darkMode ? "white" : "black" }}>
      <h1 style={{ textAlign: "center" }}>🛡️ Admin Dashboard</h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{ margin: "10px", padding: "8px 16px", borderRadius: "8px", background: darkMode ? "#333" : "#ccc" }}
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* আলাদা আলাদা সেকশন */}
      {renderSection("Custom Users", customUsers, "custom-users")}
      {renderSection("Houses", houses, "houses")}
      {renderSection("Members", members, "members")}
      {renderSection("Profiles", profiles, "profiles")}
      {renderSection("Users", users, "users")}

      {/* Modal */}
      {editingItem && (
        <div style={{
          position: "fixed", top: "0", left: "0", width: "100%",
          height: "100%", background: "rgba(0,0,0,0.5)",
          display: "flex", justifyContent: "center", alignItems: "center",
        }}>
          <div style={{
            background: darkMode ? "#2c2c2c" : "white",
            padding: "30px", borderRadius: "12px", width: "90%", maxWidth: "500px",
          }}>
            <h2>Edit Data</h2>
            {Object.entries(editingItem).map(([key, value]) => (
              key !== "_id" && (
                <div key={key} style={{ marginBottom: "10px" }}>
                  <label>{key}</label>
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "6px", border: "1px solid #ccc" }}
                  />
                </div>
              )
            ))}
            <div style={{ marginTop: "20px" }}>
              <button
                onClick={handleUpdate}
                style={{ marginRight: "10px", padding: "8px 16px", background: "#4caf50", color: "white", border: "none", borderRadius: "6px" }}
              >
                Save
              </button>
              <button
                onClick={() => setEditingItem(null)}
                style={{ padding: "8px 16px", background: "#f44336", color: "white", border: "none", borderRadius: "6px" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
