import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CandidateCard from "../components/CandidateCard";
import { searchGithub } from "../api/API";
import { Candidate } from "../interfaces/Candidate.interface";

const CandidateSearch = () => {
  const [searchResults, setSearchResults] = useState<Candidate[]>([]);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    try {
      const storedCandidates: Candidate[] = JSON.parse(
        localStorage.getItem("savedCandidates") || "[]"
      );
      if (Array.isArray(storedCandidates)) {
        setSavedCandidates(storedCandidates);
      }
      console.log(" Loaded from LocalStorage:", storedCandidates);
    } catch (error) {
      console.error(" Error loading saved candidates:", error);
    }
  }, []);


  useEffect(() => {
    if (savedCandidates.length > 0) {
      localStorage.setItem("savedCandidates", JSON.stringify(savedCandidates));
      console.log(" LocalStorage Updated:", localStorage.getItem("savedCandidates"));
    }
  }, [savedCandidates]);  


  const handleSearch = async (query: string) => {
    try {
      const results = await searchGithub(query);
      setSearchResults(results);
    } catch (error) {
      console.error(" Error fetching candidates:", error);
    }
  };

  const addCandidate = (candidate: Candidate) => {
    if (!savedCandidates.some((c) => c.id === candidate.id)) {
      const updatedCandidates = [...savedCandidates, candidate];
      setSavedCandidates(updatedCandidates);
    }
  };


  const removeCandidate = (candidateId: number) => {
    const updatedCandidates = savedCandidates.filter((c) => c.id !== candidateId);
    setSavedCandidates(updatedCandidates);
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
              id={candidate.id} 
              avatar_url={candidate.avatar_url}
              login={candidate.login}
              location={candidate.location}
              email={candidate.email}
              company={candidate.company}
              bio={candidate.bio}
              onAdd={() => addCandidate(candidate)}
              onRemove={() => removeCandidate(candidate.id)}
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
