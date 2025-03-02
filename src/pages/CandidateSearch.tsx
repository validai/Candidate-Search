import { useState } from "react";
import { searchGithub } from "../api/API";
import SearchBar from "../components/SearchBar";
import CandidateCard from "../components/CandidateCard";
import { Candidate } from "../interfaces/Candidate.interface"; // ✅ Import type

const CandidateSearch = () => {
  const [searchResults, setSearchResults] = useState<Candidate[]>([]); // ✅ Correct type

  const handleSearch = async (query: string) => {
    if (!query) return;
    try {
      const results: Candidate[] = await searchGithub(query); // ✅ Ensuring type safety
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  return (
    <div className="candidate-search">
      <h1>Candidate Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="results-grid">
        {searchResults.length > 0 ? (
          searchResults.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              avatar_url={candidate.avatar_url}
              login={candidate.login}
              location={candidate.location}
              email={candidate.email}
              company={candidate.company}
              bio={candidate.bio}
            />
          ))
        ) : (
          <p className="no-results">Search for candidates above.</p>
        )}
      </div>
    </div>
  );
};

export default CandidateSearch;
