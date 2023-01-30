import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to validate and handle login here
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 style={headerStyles}>Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label htmlFor="email" style={labelStyles}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyles}
        />
        <br />
        <label htmlFor="password" style={labelStyles}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyles}
        />
        <br />
        <button type="submit" style={buttonStyles}>
          Login
        </button>
      </form>
    </div>
  );
};

const headerStyles = {
  fontFamily: 'Pacifico, cursive',
  color: '#fff',
  textAlign: 'center',
};

const labelStyles = {
  color: '#fff',
  fontSize: '18px',
};

const inputStyles = {
  padding: '10px',
  margin: '10px 0',
  fontSize: '18px',
  width: '100%',
};

const buttonStyles = {
  padding: '10px 20px',
  background: '#fff',
  color: '#333',
  border: 'none',
  borderRadius: '5px',
  fontSize: '18px',
  cursor: 'pointer',
};

export default LoginPage;
