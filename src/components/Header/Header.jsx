import React from 'react';
import './Header.css';
import image from '/src/images/grocery.jpg';

function Header() {
  return (
    // <header className="banner-header">
    <header
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: 'auto',
        height: '10vh',
        alignItems: 'center',
        margin: '50px',
      }}
    >
      <h1 className="banner-header">My Shopping List</h1>
    </header>
  );
}

export default Header;
