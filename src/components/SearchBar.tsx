import React, { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(searchQuery); // ✅ Calls search function with stored input
    }
  };

  return (
    <input
      type="text"
      placeholder="Search for candidates..."
      value={searchQuery}
      onChange={handleChange}
      onKeyDown={handleKeyDown} // ✅ Listens for Enter key press
      className="search-bar"
    />
  );
};

export default SearchBar;
