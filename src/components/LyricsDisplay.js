// src/components/LyricsDisplay.js
import React, { useState, useEffect } from 'react';

const LyricsDisplay = ({ fileUrl }) => {
  const [lyrics, setLyrics] = useState('');
  const [scrollSpeed, setScrollSpeed] = useState(1);

  useEffect(() => {
    const fetchLyrics = async () => {
      const response = await fetch(fileUrl);
      const text = await response.text();
      setLyrics(text);
    };

    if (fileUrl) {
      fetchLyrics();
    }
  }, [fileUrl]);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      window.scrollBy(0, scrollSpeed);
    }, 100);

    return () => clearInterval(scrollInterval);
  }, [scrollSpeed]);

  return (
    <div className="lyrics-display">
      <pre>{lyrics}</pre>
      <input
        type="range"
        min="1"
        max="10"
        value={scrollSpeed}
        onChange={(e) => setScrollSpeed(e.target.value)}
      />
    </div>
  );
};

export default LyricsDisplay;
