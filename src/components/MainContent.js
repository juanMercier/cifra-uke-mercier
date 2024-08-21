import React, { useEffect, useRef, useState } from 'react';
import '../styles.css';

const MainContent = ({ selectedLyrics, scrollSpeed, onScrollSpeedChange, isOpen }) => {
  const lyricsDisplayRef = useRef(null);

  useEffect(() => {
    let scrollInterval;

    if (selectedLyrics && scrollSpeed > 0 && lyricsDisplayRef.current) {
      // Scroll function
      const scroll = () => {
        if (lyricsDisplayRef.current) {
          lyricsDisplayRef.current.scrollBy(0, scrollSpeed);
        }
      };

      scrollInterval = setInterval(scroll, 100);
    }

    return () => clearInterval(scrollInterval);
  }, [scrollSpeed, selectedLyrics]);

  return (
    <div className={`main-content ${isOpen ? '' : 'collapsed'}`}>
      <div ref={lyricsDisplayRef} className="lyrics-display">
        {selectedLyrics ? (
          <object
            data={selectedLyrics.url}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <iframe
              src={selectedLyrics.url}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            >
              <p>
                Your browser does not support PDFs.
                <a href={selectedLyrics.url}>Download the PDF</a>
              </p>
            </iframe>
          </object>
        ) : (
          <pre>Select a song from the sidebar.</pre>
        )}
      </div>
    </div>
  );
};

export default MainContent;
