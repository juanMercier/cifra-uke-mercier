import React, { useState } from 'react';
import '../styles.css';

const Header = ({ toggleSidebar, scrollSpeed, onScrollSpeedChange, onSearch, lyricsList }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLyrics, setFilteredLyrics] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const results = lyricsList.filter(lyrics =>
      lyrics.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLyrics(results);
  };

  const handleSelectLyrics = (lyrics) => {
    setSearchQuery('');  // Use lyrics.name here
    onSearch(lyrics.name, true);  // Pass lyrics.name to the onSearch function
    setFilteredLyrics([]); // Clear the dropdown
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && filteredLyrics.length > 0) {
      handleSelectLyrics(filteredLyrics[0]); // Select the first matching lyrics on Enter
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

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search lyrics..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        {filteredLyrics.length > 0 && (
          <ul className="search-dropdown">
            {filteredLyrics.map((lyrics, index) => (
              <li key={index} onClick={() => handleSelectLyrics(lyrics)}>
                {lyrics.name}  {/* Display the name property */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
