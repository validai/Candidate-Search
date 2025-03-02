import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CandidateSearch from "./pages/CandidateSearch";
import SavedCandidates from "./pages/SavedCandidates";  
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<CandidateSearch />} />
        <Route path="/saved-candidates" element={<SavedCandidates />} />  {/*  Correct route */}
      </Routes>
    </Router>
  );
}

export default App;
