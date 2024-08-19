import React, { useState } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import LyricsDisplay from './components/LyricsDisplay';
import UploadLyrics from './components/UploadLyrics';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <SideBar onSelectFile={setSelectedFile} />
        {selectedFile ? (
          <LyricsDisplay fileUrl={selectedFile} />
        ) : (
          <UploadLyrics onUploadComplete={() => setSelectedFile(null)} />
        )}
      </div>
    </div>
  );
};

export default App;
