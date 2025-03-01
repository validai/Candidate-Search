import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import SearchBar from '../components/SearchBar';

const CandidateSearch = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search
  const handleSearch = async (query: string) => {
    try {
      const results = await searchGithub(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((candidate, index) => (
          <li key={index}>{candidate.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearch;
