import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <>
        <nav className="navbar custom-navbar navbar-expand-md navbar-dark bg-dark sticky-top">
          <div className="container">
            <button
              className="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/catalog">
                    Catalog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/create">
                    Create Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    href="components.html"
                    className="ml-4 btn btn-dark mt-1 btn-sm"
                  >
                    Components
                  </a>
                </li>
              </div>
            </div>
          </div>
        </nav>
    </>
  );
}
