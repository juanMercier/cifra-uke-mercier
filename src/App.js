import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
import { fetchFilesFromStorage } from './utils/fetchFiles'; // Assuming you have a fetchFiles utility
import './styles.css';
import UploadLyrics from './components/UploadLyrics';

const App = () => {
  const [selectedLyrics, setSelectedLyrics] = useState(null); // Selected lyrics
  const [scrollSpeed, setScrollSpeed] = useState(0); // Scroll speed
  const [isOpen, setIsOpen] = useState(false); // Sidebar visibility
  const [lyricsList, setLyricsList] = useState([]); // List of lyrics files
  const [uploadedFile, setUploadedFile]  = useState(false)
  useEffect(() => {
    const fetchFiles = async () => {
      const filesList = await fetchFilesFromStorage();
      setLyricsList(filesList);
    };

    fetchFiles();
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (query, selectFirstMatch = false) => {
    // Ensure query is a string
    if (typeof query !== 'string') return;

    const filteredLyrics = lyricsList.filter(lyrics =>
      lyrics.name.toLowerCase().includes(query.toLowerCase())
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
        lyricsList={lyricsList} // Pass the lyrics list to Header
      />
      <Sidebar
        onSelectLyrics={setSelectedLyrics}
        isOpen={isOpen}
        close = {setIsOpen}
        lyricsList={lyricsList} // Pass the lyrics list to Sidebar
      />
      <MainContent
        selectedLyrics={selectedLyrics}
        scrollSpeed={scrollSpeed}
        onScrollSpeedChange={setScrollSpeed}
        isOpen={isOpen}
        
      />
      <UploadLyrics 
        onUploadComplete={setUploadedFile}
      />
    </div>
  );
};

export default App;
