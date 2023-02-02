import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (
    <nav className="navbar">
      <ul className="nav-links" >
        <Link to="/" className="Home">
          <li>Home</li>
        </Link>
        <Link to="/Shop" className="Shop">
          <li>Shop</li>
        </Link>
        <Link to="/About" className="About us">
          <li>About us</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar