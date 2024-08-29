import React from 'react';
import '../styles.css';
import ScrollSpeedSetter from './ScrollSpeedSetter';
import SearchBar from './SearchBar';

const Header = ({ toggleSidebar, scrollSpeed, onScrollSpeedChange, onSearch, lyricsList }) => {

  return (
    <header>
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>

      <ScrollSpeedSetter
        scrollSpeed={scrollSpeed}
        onScrollSpeedChange={onScrollSpeedChange}
      />

      <div className="logo">UkeMercier</div>

      <SearchBar
        onSearch={onSearch}
        lyricsList={lyricsList}
        />
    </header>
  );
};

export default Header;