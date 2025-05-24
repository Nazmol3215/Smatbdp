import React, { useState, useEffect } from 'react';

const Hhsbnfciuj = () => {
  const [texts, setTexts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState('');
  const [editPostId, setEditPostId] = useState(null);
  const [adminMsg, setAdminMsg] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch('/api/texts').then(res => res.json()).then(setTexts);
    fetch('/api/posts').then(res => res.json()).then(setPosts);
  }, []);

  const submitAdminText = async () => {
    const res = await fetch('/api/texts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: adminMsg, password })
    });
    const data = await res.json();
    setTexts([...texts, data]);
    setAdminMsg('');
  };

  const submitPost = async () => {
    const url = editPostId ? `/api/posts/${editPostId}` : '/api/posts';
    const method = editPostId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newPost })
    });

    const data = await res.json();
    if (editPostId) {
      setPosts(posts.map(p => (p._id === data._id ? data : p)));
      setEditPostId(null);
    } else {
      setPosts([...posts, data]);
    }

    setNewPost('');
    setShowForm(false);
  };

  const deletePost = async (id) => {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    setPosts(posts.filter(p => p._id !== id));
  };

  return (
    <div style={{ filter: showForm ? 'blur(5px)' : 'none', padding: '20px' }}>
      <h2>🔐 Admin Text Add</h2>
      <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <input placeholder="Admin Message" value={adminMsg} onChange={e => setAdminMsg(e.target.value)} />
      <button onClick={submitAdminText}>Send</button>

      <h2>📢 Admin Messages</h2>
      {texts.map((t, i) => <p key={i}>{t.content}</p>)}

      <h2>🗨️ User Submissions</h2>
      <button onClick={() => setShowForm(true)}>Submit Message</button>
      {posts.map(post => (
        <div key={post._id}>
          <p>{post.message}</p>
          <button onClick={() => { setNewPost(post.message); setEditPostId(post._id); setShowForm(true); }}>Edit</button>
          <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      ))}

      {showForm && (
        <div style={{
          position: 'fixed', top: 0, left: 0,
          width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.6)', display: 'flex',
          justifyContent: 'center', alignItems: 'center',
        }}>
          <div style={{ background: '#fff', padding: 20, borderRadius: 10 }}>
            <h3>{editPostId ? 'Edit Message' : 'New Message'}</h3>
            <textarea value={newPost} onChange={e => setNewPost(e.target.value)} />
            <br />
            <button onClick={submitPost}>Submit</button>
            <button onClick={() => { setShowForm(false); setNewPost(''); setEditPostId(null); }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hhsbnfciuj;
