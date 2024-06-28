import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './LoginPage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    validateForm();
  }, [email, password]);

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const validateForm = () => {
    if (emailError || passwordError || !email || !password) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValid) {
      try {
        const response = await axios.post('https://express-t4.onrender.com/api/login', {
          username: 'testemail@dal.ca',
          password: 'Test@123',
        });
        console.log('Response:', response.data); // Handle response data as needed

        // Assuming successful login, navigate to dashboard
        navigate('/profiles'); 
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.error('Form is not valid');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            {emailError && <span className="error">{emailError}</span>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
            />
            {passwordError && <span className="error">{passwordError}</span>}
          </div>
          <button type="submit" className="login-button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
