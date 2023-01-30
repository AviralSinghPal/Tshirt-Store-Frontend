import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to validate and handle login here
  };

  return (
    <div className="login-container" style={darkModeStyles}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const darkModeStyles = {
  background: '#333',
  color: '#fff',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default LoginPage;
