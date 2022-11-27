import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faSliders,
  faBars,
  faClose,
  faArrowCircleUp,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Navbar = () => {
  const dropdownItems = ["Popular", "Top Rated"];

  return (
    <header id="header">
      <Link to="/">
        <h3 className="logo">Mozify</h3>
      </Link>

      <nav id="nav-bar">
        <ul className="nav__links">
          <li className="nav-link">
            <Link to="/favorites">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </li>
          <li className="nav-link">
            <FontAwesomeIcon icon={faSliders} />
          </li>

          <div className="dropdown-card">
            <h3>In which order would you like me to list the movies?</h3>

            <div className="dropdown-items">
            {dropdownItems.map((dropdownItem) => (
              <div className="dropdown-item" key={dropdownItem} >
                {dropdownItem}
                {dropdownItem === "Popular" ? (
                <FontAwesomeIcon icon={faArrowCircleUp} />
                ) : (
                <FontAwesomeIcon icon={faStar} />
                )}
              </div>
            ))}
            </div>
          

          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
