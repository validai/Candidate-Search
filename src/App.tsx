import { Routes, Route } from "react-router-dom";
import CandidateSearch from "./pages/CandidateSearch";
import SavedCandidates from "./pages/SavedCandidates";
import ErrorPage from "./pages/ErrorPage";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

const App = () => {
  console.log(
    "Environment Variable (VITE_GITHUB_TOKEN):",
    import.meta.env.VITE_GITHUB_TOKEN
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CandidateSearch />} />
        <Route path="search" element={<CandidateSearch />} />
        <Route path="saved" element={<SavedCandidates />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
