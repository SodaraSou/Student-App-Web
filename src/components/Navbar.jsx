import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/assets/splash.png";
import StudentAppContext from "./context/StudentAppContext";

function Navbar() {
  const { logOut } = useContext(StudentAppContext);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-cyan">
        <div className="container">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo"
              width={50}
              height={40}
              className="me-2"
            />
            Student App Admin
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item"></li>
            </ul>
            <button
              className="btn btn-outline-danger"
              type="submit"
              onClick={logOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
