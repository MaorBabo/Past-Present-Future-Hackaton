import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './LogInForm.css';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Check if email and password are not empty or contain only whitespace
      if (email.trim() === '' || password.trim() === '') {
        console.error('Email and password are required.');
        return;
      }
      
      // Send a POST request to your backend server with the email and password
      const response = await axios.post('http://localhost:5000/api/users', {
        email: email,
        password: password,
      });
      
      // Assuming the backend responds with success
      if (response.data.success) {
        // Redirect to the HomePage
        navigate('/HomePage');
      } else {
        // Handle other responses or show an error message
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className="container-centered">
      <div className="row row-centered">
        <div className="col-md-6 col-form">
          <div className="mb-3">
            <p className="center">Get started</p>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Enter your Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Enter your Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: '#48d1cc' }}
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
