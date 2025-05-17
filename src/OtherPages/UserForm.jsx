import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    message: 'I would like to inquire about your property www.bproperty.com - RE66E668A5B96CCBD. Please contact me at your earliest convenience.',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // ফর্ম ডাটা সাবমিট করার জন্য এখানে লজিক যোগ করতে পারেন
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h2 className="mb-4">Contact Agents for RE66E668A5B96CCBD</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name*</label>
            <input
              type ="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="surname" className="form-label">Surname*</label>
            <input
              type ="text"
              name="surname"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone*</label>
            <div className="input-group">
              <select className="form-select">
                <option value="+880">+880</option>
                <option value="+880">+990</option>
                <option value="+880">+230</option>
              </select>
              <input
                type ="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email*</label>
            <input
              type ="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="form-control"
            />
          </div>
          <button type ="submit" className="btn btn-teal w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
