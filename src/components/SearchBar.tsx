import React from 'react';

interface SearchBarProps {
  onSearchBarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ onSearchBarChange }: SearchBarProps) {

  const searchInput = React.useRef(null)

  return (
    <input
      className="SearchBar-input"
      onChange={onSearchBarChange}
      placeholder="Search something..."
      ref={searchInput}
    />
  );
}

export default SearchBar;
