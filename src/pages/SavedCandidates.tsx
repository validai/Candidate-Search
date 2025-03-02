import { useEffect, useState } from "react";
import "../index.css";


interface Candidate {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  location?: string;
  email?: string;
  company?: string;
  bio?: string;
}

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem("savedCandidates");
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  const handleReject = (id: number) => {
    const updatedCandidates = savedCandidates.filter((candidate) => candidate.id !== id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
    <div className="saved-candidates-container">
      <h1>Potential Candidates</h1>
      <table className="candidates-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td><img src={candidate.avatar_url} alt={candidate.login} /></td>
              <td>{candidate.login}</td>
              <td>{candidate.location}</td>
              <td>{candidate.email}</td>
              <td>{candidate.company}</td>
              <td>
                <button onClick={() => handleReject(candidate.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;