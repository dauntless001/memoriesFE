import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <form className="d-flex">
              <input
                className="form-control me-2 shadow-none" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
