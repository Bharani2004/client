import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';
import loginImg from './parking.jpg';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9090/api/v1/login', formData);
      if (response.status === 200) {
        localStorage.setItem('username', formData.username);
        navigate('/dashboard');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message || 'Login failed');
      } else {
        alert('An error occurred. Please try again later.');
      }
    }
  };

  const handleChangePassword = () => {
    navigate('/changepassword');
  };

  const handleClear = () => {
    setFormData({
      username: '',
      password: ''
    });
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="col-md-6">
          <img src={loginImg} alt="login-img" width="100%" height="100%" />
        </div>
        <div class="single-line-text">
  ONLINE PARKING SYSTEM
</div>

      </div>
      <div className="login-right">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="form-links">
            <button type="button" onClick={handleChangePassword} className="change-password-btn">
              Change password..?
            </button>
            <button type="button" onClick={handleClear} className="clear-btn">
              Clear
            </button>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="register-link">
          <p>
            Don't have an account?{' '}
            <span onClick={() => navigate('/register')}>Create account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
