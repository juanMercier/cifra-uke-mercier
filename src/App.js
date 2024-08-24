import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
import './styles.css';
import { fetchFilesFromStorage } from './utils/fetchFiles';

const App = () => {
  const [selectedLyrics, setSelectedLyrics] = useState(null); // Selected lyrics
  const [scrollSpeed, setScrollSpeed] = useState(0); // Scroll speed
  const [isOpen, setIsOpen] = useState(false);
  const [lyricsList, setLyricsList] = useState([]); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchFiles = async () => {
      const filesList = await fetchFilesFromStorage();
      setLyricsList(filesList);
    };

    fetchFiles();
  }, []);

  const handleSearch = (query, selectFirstMatch = false) => {
    // Filter the lyrics based on the query
    const filteredLyrics = lyricsList.filter(lyrics =>
      lyrics.toLowerCase().includes(query.toLowerCase())
    );

    if (selectFirstMatch && filteredLyrics.length > 0) {
      setSelectedLyrics(filteredLyrics[0]); // Select the first matching lyrics
      setIsOpen(false); // Close the sidebar if open
    }
  };

  return (
    <div>
      <Header
        toggleSidebar={toggleSidebar}
        scrollSpeed={scrollSpeed}
        onScrollSpeedChange={setScrollSpeed}
        onSearch={handleSearch} // Pass the search handler to Header
      />
      <Sidebar
        onSelectLyrics={setSelectedLyrics}
        isOpen={isOpen}
        lyricsList={lyricsList} // Pass the lyrics list to Sidebar
      />
      <MainContent
        selectedLyrics={selectedLyrics}
        scrollSpeed={scrollSpeed}
        isOpen={isOpen}
      />
    </div>
  );
};

export default App;
