import { useState } from "react";
import { fetchCandidates } from "./utils/githubAPI"; 
import SearchBar from "./components/SearchBar";

type Candidate = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

const Home = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const handleSearch = async (query: string) => {
    const results = await fetchCandidates(query);
    console.log("API Response:", results); // Logs the API response
    setCandidates(results);
  };
  

  return (
    <div className="home">
      <h1>Candidate Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="results">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="candidate-card">
            <img src={candidate.avatar_url} alt={candidate.login} />
            <h3>{candidate.login}</h3>
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
