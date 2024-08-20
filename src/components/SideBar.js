// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import { fetchFilesFromStorage } from '../utils/fetchFiles';
import '../styles.css';

const Sidebar = ({ onSelectLyrics, isOpen }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const filesList = await fetchFilesFromStorage();
      setFiles(filesList);
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          {files.map((file, index) => (
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
