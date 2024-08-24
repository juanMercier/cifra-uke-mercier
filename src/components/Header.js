import React, { useState } from 'react';
import '../styles.css';

const Header = ({ toggleSidebar, scrollSpeed, onScrollSpeedChange, onSearch, lyricsList }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the search function passed as a prop
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchQuery, true); // Trigger search on Enter key
    }
  };

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

      <input
        type="text"
        placeholder="Search lyrics..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};

export default Header;
