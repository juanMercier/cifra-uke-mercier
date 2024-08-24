// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import '../styles.css';

const Sidebar = ({ onSelectLyrics, isOpen, lyricsList }) => {


  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          {lyricsList.map((file, index) => (
            <li key={index} onClick={() => onSelectLyrics(file)}>
              {file.name}
            </li>
          ))}
        </ul>
        <div className="upload-lyrics">
        <input type="file" />
        <button>Upload Lyrics</button>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
