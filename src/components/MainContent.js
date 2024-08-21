import React, { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


console.log({version:pdfjs.version})
const MainContent = ({ selectedLyrics, scrollSpeed, onScrollSpeedChange, isOpen }) => {
  const lyricsDisplayRef = useRef(null);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    let scrollInterval;
    if (selectedLyrics && scrollSpeed > 0) {
      scrollInterval = setInterval(() => {
        if (lyricsDisplayRef.current) {
          lyricsDisplayRef.current.scrollBy(0, 1);
        }
      }, 100 / scrollSpeed);
    }

    return () => clearInterval(scrollInterval);
  }, [scrollSpeed, selectedLyrics]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className={`main-content ${isOpen ? '' : 'collapsed'}`}>
      <div ref={lyricsDisplayRef} className="lyrics-display">
        {selectedLyrics ? (
          <Document
            file={selectedLyrics.url}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        ) : (
          <pre>Select a song from the sidebar.</pre>
        )}
      </div>
      <input
        type="range"
        min="1"
        max="10"
        value={scrollSpeed}
        onChange={(e) => onScrollSpeedChange(Number(e.target.value))}
      />
    </div>
  );
};

export default MainContent;
