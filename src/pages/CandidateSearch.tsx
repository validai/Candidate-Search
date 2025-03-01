import { useState } from 'react';
import { searchGithub } from '../api/API';
import SearchBar from '../components/SearchBar';

type Candidate = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

const CandidateSearch = () => {
  const [searchResults, setSearchResults] = useState<Candidate[]>([]); // ✅ Typed state

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
        {searchResults.map((candidate) => (
          <li key={candidate.id}>{candidate.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearch;
