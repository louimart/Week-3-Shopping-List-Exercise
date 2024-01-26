import React from 'react';
import './Header.css';
import image from '../../../public/images/grocery.jpg';

function Header() {
  return (
    // <header className="banner-header">
    <header
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100vw',
        height: '10vh',
        alignItems: 'center',
      }}
    >
      <h1 className="banner-header">My Shopping List</h1>
    </header>
  );
}

export default Header;
