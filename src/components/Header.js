import React, { useState, useEffect } from 'react';
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleSidebar, scrollSpeed, onScrollSpeedChange, onSearch, lyricsList }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLyrics, setFilteredLyrics] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const results = lyricsList.filter(lyrics =>
      lyrics.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLyrics(results);
  };

  const handleSelectLyrics = (lyrics) => {
    setSearchQuery('');
    onSearch(lyrics.name, true);
    setFilteredLyrics([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && filteredLyrics.length > 0) {
      handleSelectLyrics(filteredLyrics[0]);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      onScrollSpeedChange(0);
    } else {
      onScrollSpeedChange(scrollSpeed > 0 ? scrollSpeed : 2);
    }
    setIsPlaying(!isPlaying);
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
            className="scroll-speed-control-button"
            onClick={() => onScrollSpeedChange(scrollSpeed - 1)}
            disabled={scrollSpeed <= 0|| !isPlaying}
          >
            -
          </button>
          <span>{scrollSpeed}</span>
          <button
            className="scroll-speed-control-button"
            onClick={() => onScrollSpeedChange(scrollSpeed + 1)}
            disabled={scrollSpeed >= 5|| !isPlaying}
          >
            +
          </button>
          <button
            className="scroll-speed-control-button play-pause-button"
            onClick={togglePlayPause}
          >
            {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
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
                {lyrics.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;