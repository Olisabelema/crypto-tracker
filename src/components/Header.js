// src/components/Header.js

import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ onSearch, onToggleDarkMode }) => {
  return (
    <header>
      <h1>Crypto Tracker</h1>
      <input
        type="text"
        placeholder="Search cryptocurrency..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button onClick={onToggleDarkMode}>Toggle Dark Mode</button>
    </header>
  );
};

export default Header;
