import React from "react";

interface SearchBarProps {
  onSearchBarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchBarOnKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function SearchBar({ onSearchBarChange, searchBarOnKeyDown }: SearchBarProps) {

  return (
    <input
      className="SearchBar-input"
      onChange={onSearchBarChange}
      placeholder="Search something..."
      onKeyDown={searchBarOnKeyDown}
    />
  );
}

export default SearchBar;
