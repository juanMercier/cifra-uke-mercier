import React, { useEffect, useRef, useState } from 'react';
import { convertPdfToImages } from '../utils/pdfToImage';
import '../styles.css';

const MainContent = ({ selectedLyrics, scrollSpeed, onScrollSpeedChange, isOpen }) => {
  const lyricsDisplayRef = useRef(null);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      if (selectedLyrics && selectedLyrics.url) {
        try {
          const images = await convertPdfToImages(selectedLyrics.url);
          setImageUrls(images);
        } catch (error) {
          console.error('Failed to fetch and convert PDF to images:', error);
        }
      }
    };

    fetchImages();
  }, [selectedLyrics]);

  useEffect(() => {
    let scrollInterval;

    if (imageUrls.length > 0 && scrollSpeed > 0 && lyricsDisplayRef.current) {
      const scroll = () => {
        if (lyricsDisplayRef.current) {
          let scrollAmount = 0;
          switch (scrollSpeed) {
            case 1:
              scrollAmount = 0.69;
              break;
            case 2:
              scrollAmount = 1.2;
              break;
            case 3:
              scrollAmount = 1.5;
              break;
            case 4:
              scrollAmount = 1.7;
              break;
            case 5:
              scrollAmount = 2;
              break;
            default:
              scrollAmount = 0;
              break;
          }

          lyricsDisplayRef.current.scrollBy(0, scrollAmount);
        }
      };

      scrollInterval = setInterval(scroll, 20);
    }

    return () => clearInterval(scrollInterval);
  }, [scrollSpeed, imageUrls]);

  useEffect(() => {
    if (lyricsDisplayRef.current) {
      lyricsDisplayRef.current.scrollTop = 0;
    }
  }, [imageUrls]);

  useEffect(() => {
    const handleScroll = () => {
      if (lyricsDisplayRef.current.scrollTop === 0) {
        onScrollSpeedChange(0);
      }
    };

    const currentRef = lyricsDisplayRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [onScrollSpeedChange]);

  return (
    <div className={`main-content ${isOpen ? '' : 'collapsed'}`}>
      <div ref={lyricsDisplayRef} className="lyrics-display">
        {imageUrls.length > 0 ? (
          imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`Page ${index + 1}`} style={{ width: '100%' }} />
          ))
        ) : (
          <pre>Seleciona uma musica</pre>
        )}
      </div>
    </div>
  );
};

export default MainContent;
