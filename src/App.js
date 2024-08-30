import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
import { fetchFilesFromStorage } from './utils/fetchFiles';
import './styles.css';
import UploadLyrics from './components/UploadLyrics';

const App = () => {
  const [selectedLyrics, setSelectedLyrics] = useState(null);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [lyricsList, setLyricsList] = useState([]);
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
    if (typeof query !== 'string') return;

    const filteredLyrics = lyricsList.filter(lyrics =>
      lyrics.name.toLowerCase().includes(query.toLowerCase())
    );

    if (selectFirstMatch && filteredLyrics.length > 0) {
      setSelectedLyrics(filteredLyrics[0]);
      setIsOpen(false);
    }
  };

  return (
    <div>
      <Header
        toggleSidebar={toggleSidebar}
        scrollSpeed={scrollSpeed}
        onScrollSpeedChange={setScrollSpeed}
        onSearch={handleSearch}
        lyricsList={lyricsList}
      />
      <Sidebar
        onSelectLyrics={setSelectedLyrics}
        isOpen={isOpen}
        close = {setIsOpen}
        lyricsList={lyricsList}
      />
      <MainContent
        selectedLyrics={selectedLyrics}
        scrollSpeed={scrollSpeed}
        onScrollSpeedChange={setScrollSpeed}
        isOpen={isOpen}

      />
      <UploadLyrics />
    </div>
  );
};

export default App;
