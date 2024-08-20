import React from 'react';
import '../styles.css';

const Header = () => {
  return (
    <header>
      <div className="logo">UkeMercier</div>
      <input type="text" placeholder="Search lyrics..." />
    </header>
  );
};

export default Header;
