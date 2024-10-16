// src/UserDataForm.js
import React, { useState } from 'react';
import './UserDataForm.css';

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear success message and set a new one
    setSuccessMessage('Form submitted successfully!');
    setFormData({ name: '', email: '' }); // Reset form
  };

  return (
    <div className="form-container">
      <h2>User Data Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.name ? 'error' : ''}`}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className={`form-group ${errors.email ? 'error' : ''}`}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default UserDataForm;
