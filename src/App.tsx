import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
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
  console.log("Environment Variable (VITE_GITHUB_TOKEN):", import.meta.env.VITE_GITHUB_TOKEN);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;


