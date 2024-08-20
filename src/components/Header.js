import React from 'react';
import '../styles.css';

const Header = ({toggleSidebar}) => {
  return (
    <header>
          <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="logo">UkeMercier</div>
      <input type="text" placeholder="Search lyrics..." />
    </header>
  );
};

export default Header;
