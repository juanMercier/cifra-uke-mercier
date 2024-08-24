import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';
import './styles.css';

const App = () => {
  const [selectedLyrics, setSelectedLyrics] = useState(null); // Selected lyrics
  const [scrollSpeed, setScrollSpeed] = useState(0); // Scroll speed
  const [isOpen, setIsOpen] = useState(false); // Sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Header
        toggleSidebar={toggleSidebar}
        scrollSpeed={scrollSpeed}
        onScrollSpeedChange={setScrollSpeed}
      />
      <Sidebar
        onSelectLyrics={setSelectedLyrics}
        isOpen={isOpen}
      />
      <MainContent
        selectedLyrics={selectedLyrics}
        scrollSpeed={scrollSpeed}
        onScrollSpeedChange={setScrollSpeed}
        isOpen={isOpen}
      />
    </div>
  );
};

export default App;
