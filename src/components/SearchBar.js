import React, { useState } from 'react';
import '../styles.css';

const SearchBar = ({ onSearch, lyricsList }) => {


  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLyrics, setFilteredLyrics] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const results = lyricsList.filter(lyrics =>
      lyrics.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLyrics(results);
  };

  const handleSelectLyrics = (lyrics) => {
    setSearchQuery('');
    onSearch(lyrics.name, true);
    setFilteredLyrics([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && filteredLyrics.length > 0) {
      handleSelectLyrics(filteredLyrics[0]);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search lyrics..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {filteredLyrics.length > 0 && (
        <ul className="search-dropdown">
          {filteredLyrics.map((lyrics, index) => (
            <li key={index} onClick={() => handleSelectLyrics(lyrics)}>
              {lyrics.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

}

export default SearchBar;