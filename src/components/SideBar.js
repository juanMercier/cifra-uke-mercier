// src/components/Sidebar.js
import React from 'react';
import '../styles.css';

const Sidebar = ({ onSelectLyrics, isOpen, close: onIsOpen, lyricsList }) => {


  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          {lyricsList.map((file, index) => (
            <li key={index} onClick={() => {
              onSelectLyrics(file);
              onIsOpen(false)
            }
            }>
              {file.name}
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
};

export default Sidebar;
