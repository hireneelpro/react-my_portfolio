import { Link, Outlet, NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  
  return (
    <>
      <div className="navbar">
        <nav className="nav-container">
          {/* ===== menu icon ===== */}
          {/* ===== heading ===== */}
          <div className="heading">
            <NavLink
              className={({ isActive }) =>
                `link ${isActive ? "selected-link" : ""}`
              }
              to="/"
            >
              <h2 className="logo">h</h2>
            </NavLink>
            <h3>hiren </h3>
            <h6>Web Developer</h6>
          </div>
          {/* ===== page links ===== */}
          <div className="page-link-container">
            <NavLink
              className={({ isActive }) =>
                `link ${isActive ? "selected-link" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `link ${isActive ? "selected-link" : ""}`
              }
              to="about"
            >
              about
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `link ${isActive ? "selected-link" : ""}`
              }
              to="/skills"
            >
              Skills
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `link ${isActive ? "selected-link" : ""}`
              }
              to="/projects"
            >
              projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `link ${isActive ? "selected-link" : ""}`
              }
              to="/contact"
            >
              contact
            </NavLink>
          </div>
          {/* ===== external links ====== */}
          <div className="ext-link-container">
            <a
              className="ext-link"
              href="https://github.com/hireneelpro?tab=repositories"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="ext-link"
              href="https://www.linkedin.com/in/hiren-patel-86889525b/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="ext-link" href="https://twitter.com/home">
              <i className="fab fa-twitter-square"></i>
            </a>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
