import { Link } from "react-router-dom";
import "./Navbar.css";
import ModeSwitch from "../ModeSwitch/ModeSwitch";

const Navbar = (props) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme={props.mode ? "dark" : "light"}
        style={
          props.mode
            ? { backgroundColor: "#000" }
            : { backgroundColor: "white" }
        }
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://joshigaurav.site/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Developer
                </a>
              </li>
            </ul>
            <ModeSwitch mode={props.mode} toggle={props.toggle} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
