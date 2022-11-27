import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faSliders,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Navbar = () => {

    const [appName, setAppName] = useState("Mozify");
    
    const handleClick = () => {
        setAppName("Mozify");
    }

  return (
    <header id="header">
      <Link to="/">
        <h3 className="logo">{appName}</h3>
      </Link>

      <nav id="nav-bar">
        <ul className="nav__links">
          <li className="nav-link">
            <Link to="/favorites">
              <FontAwesomeIcon icon={faStar} />
            </Link>
          </li>
          <li className="nav-link" onClick={handleClick}>
            <FontAwesomeIcon icon={faSliders} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
