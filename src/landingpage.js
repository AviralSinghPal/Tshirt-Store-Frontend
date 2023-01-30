import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1 style={headerStyles}>T-Shirt Store</h1>
        <p style={subheaderStyles}>Find your perfect T-Shirt</p>
      </header>
      <main>
        <div className="card-container">
          <Link to="/products/men">
            <div className="card" style={menCardStyles}>
              <h2 style={cardHeaderStyles}>Men's T-Shirts</h2>
              <p style={cardDescriptionStyles}>
                Check out our collection of T-Shirts for men
              </p>
            </div>
          </Link>
          <Link to="/products/women">
            <div className="card" style={womenCardStyles}>
              <h2 style={cardHeaderStyles}>Women's T-Shirts</h2>
              <p style={cardDescriptionStyles}>
                Discover our collection of T-Shirts for women
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

const headerStyles = {
  fontFamily: 'Pacifico, cursive',
  color: '#333',
  textAlign: 'center',
  padding: '30px 0',
};

const subheaderStyles = {
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '18px',
  color: '#333',
  textAlign: 'center',
  padding: '10px 0',
};

const menCardStyles = {
  background: 'linear-gradient(to right, #0072ff, #00c6ff)',
};

const womenCardStyles = {
  background: 'linear-gradient(to right, #ff0099, #ff85a2)',
};

const cardHeaderStyles = {
  color: '#fff',
  fontSize: '24px',
  padding: '20px 0',
  textAlign: 'center',
};

const cardDescriptionStyles = {
  color: '#fff',
  fontSize: '18px',
  textAlign: 'center',
};

export default LandingPage;
