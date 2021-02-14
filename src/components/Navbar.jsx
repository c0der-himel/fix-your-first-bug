import { Link } from 'react-router-dom';
import bug from '../assets/images/bug.svg';

const Navbar = () => {
  return (
    <div classNameName="container-fluid">
      <div classNameName="row">
        <div classNameName="col-sm">
          <nav className="navbar navbar-expand-lg navbar-light bg-white rounded-3 px-5 fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src={bug} alt="bug" className="bug-img me-2" />
                FYFB
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/select">
                      Link
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
