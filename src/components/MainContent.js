// src/components/MainContent.js
import React from 'react';
import '../styles.css';

const MainContent = ({ selectedLyrics, scrollSpeed, onScrollSpeedChange, isOpen }) => {
  return (
    <div className={`main-content ${isOpen ? '' : 'collapsed'}`}>
      <div className="lyrics-display">
        <pre>{selectedLyrics ? selectedLyrics.content : 'Select a song from the sidebar.'}</pre>
        <input
          type="range"
          min="1"
          max="10"
          value={scrollSpeed}
          onChange={(e) => onScrollSpeedChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MainContent;
