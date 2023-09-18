import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/splash.png";
import StudentAppContext from "./context/StudentAppContext";

function Sidebar() {
  const { logOut } = useContext(StudentAppContext);

  const smSize = {
    width: "4.5rem",
    height: "100vh",
  };

  return (
    <>
      <div
        className="d-none d-lg-flex flex-column flex-shrink-0 p-3 bg-cyan"
        style={{ width: "280px", height: "100vh" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img src={Logo} width={50} height={40} alt="Logo" />
          <span className="fs-5">Student App Admin</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link link-dark" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              Students
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              Class
            </a>
          </li>
          <li>
            <Link to="/createaccount" className="nav-link link-dark">
              Add Student
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Admin</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={logOut}>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="d-flex flex-column flex-shrink-0 bg-cyan d-block d-lg-none"
        style={smSize}
      >
        <a
          href="/"
          className="d-block p-3 link-dark text-decoration-none"
          title="Icon-only"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          {/* <span className="visually-hidden">Icon-only</span> */}
          <img src={Logo} width={50} height={40} alt="Logo" />
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link py-3 border-bottom"
              aria-current="page"
              title="Home"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            ></a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 border-bottom"
              title="Dashboard"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            ></a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 border-bottom"
              title="Orders"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            ></a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 border-bottom"
              title="Products"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            ></a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 border-bottom"
              title="Customers"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            ></a>
          </li>
        </ul>
        <div className="dropdown border-top">
          <a
            href="#"
            className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="24"
              height="24"
              className="rounded-circle"
            />
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser3"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
