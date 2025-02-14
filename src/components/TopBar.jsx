import { Link } from "react-router";

function TopBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top border-bottom">
      <div className="container-fluid">
        <Link to="/Home" className="navbar-brand">
          <img src="/uwflogo.png" alt="logo" width={80} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/weather" className="nav-link">
                Weather
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
