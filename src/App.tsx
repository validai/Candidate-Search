import { Routes, Route } from "react-router-dom";
import CandidateSearch from "./pages/CandidateSearch";
import SavedCandidates from "./pages/SavedCandidates";
import ErrorPage from "./pages/ErrorPage";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<CandidateSearch />} />
        <Route path="/saved-candidates" element={<SavedCandidates />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
