import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
{/* useState variable*/}
const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
{/* form validation */}
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.match(/^[A-Za-z]+$/)) {
      newErrors.firstName = 'First Name should contain only letters.';
    }
    if (!formData.lastName.match(/^[A-Za-z]+$/)) {
      newErrors.lastName = 'Last Name should contain only letters.';
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Invalid email format.';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'Password should be at least 8 characters long.';
    }
    if (!/[a-zA-Z]/.test(formData.password)) {
      newErrors.password = 'Password should contain at least one letter.';
  } 
    if (!/[0-9]/.test(formData.password)) {
      newErrors.password = 'Password should contain at least one number.';
  } 
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      newErrors.password = 'Password should contain at least one special character.';
  }
  
  if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
{/* For navigating to profile page with the user details */}
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/profile', { state: formData });
    }
  };

{/* Basic Form Container */}
  return (
    <div className="form-container">
      <h2>Profile Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default Registration;
