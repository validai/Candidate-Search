import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  console.log("Environment Variable (VITE_GITHUB_TOKEN):", import.meta.env.VITE_GITHUB_TOKEN);
  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;