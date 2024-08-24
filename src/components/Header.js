import React from 'react';
import '../styles.css';

const Header = ({ toggleSidebar, scrollSpeed, onScrollSpeedChange }) => {
  return (
    <header>
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="scroll-speed-control">
      <label>Speed: </label>
      <div className="scroll-speed-buttons">
        <button
          onClick={() => onScrollSpeedChange(scrollSpeed - 1)}
          disabled={scrollSpeed <= 0}
        >
          -
        </button>
        <span>{scrollSpeed}</span>
        <button
          onClick={() => onScrollSpeedChange(scrollSpeed + 1)}
          disabled={scrollSpeed >= 5}
        >
          +
        </button>
      </div>
    </div>
      <div className="logo">UkeMercier</div>

      <input type="text" placeholder="Search lyrics..." />
    </header>
  );
};

export default Header;
