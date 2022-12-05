import { Component } from "react";
import "../styles/NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-items">
        <h1 className="navbar-logo">Trippy</h1>
        <ul className="nav-menu">
          <li>
            <Link>
              <i class="fa-solid fa-house-user"></i>Home
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
