import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/saved-candidates" className="nav-link">
            Potential Candidates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
