import React, { useState } from 'react';
import '../styles.css';

const Header = ({ toggleSidebar, onScrollSpeedChange, scrollSpeed }) => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <header>
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="scroll-speed-control">
        <button onClick={() => onScrollSpeedChange(scrollSpeed - 1)}>-</button>
        <span>{scrollSpeed}</span>
        <button onClick={() => onScrollSpeedChange(scrollSpeed + 1)}>+</button>
      </div>
      <button className="search-button" onClick={toggleSearchBar}>
        🔍
      </button>
      <input
        type="text"
        placeholder="Search lyrics..."
        className={`search-bar ${isSearchVisible ? 'show' : ''}`}
      />
    </header>
  );
};

export default Header;
