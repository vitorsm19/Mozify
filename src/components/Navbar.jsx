import React from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faSliders,
  faArrowCircleUp,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { SplashIcon } from "../components/Splash.jsx";
import MovieCard from "../components/MovieCard.jsx";

import "../App.css";

const Navbar = ({ setMovieType }) => {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const onButtonClick = (movieType) => {
    setMovieType(movieType);
  };
  const menuRef = useRef();
  const iconRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== iconRef.current) {
      setDropdown(false);
    }
  });

  return (
    <header id="header">
      <Link to="/">
        <div className="icon-logo">
          <SplashIcon />
          <h3 className="logo-title">Mozify</h3>
        </div>
      </Link>

      <nav id="nav-bar">
        <ul className="nav__links">
          <li className="nav-link hidden-movie">
            <Link to="/favorites">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </li>
          <li
            className="nav-link hidden-movie"
            onClick={() => setDropdown(!dropdown)}
          >
            <FontAwesomeIcon icon={faSliders} ref={iconRef} />
          </li>

          {dropdown && (
            <div className="dropdown-card">
              <h3>In which order would you like me to list the movies?</h3>
              <ul className="dropdown-items">
                <li
                  className="dropdown-item"
                  onClick={() => onButtonClick("popularMovies")}
                  ref={menuRef}
                >
                  <div className="dropdown-item-content">
                    <h4>The Hot stuff</h4>
                    <p>Show me the most popular movies</p>
                  </div>
                  <FontAwesomeIcon icon={faArrowCircleUp} />
                </li>
                <li
                  className="dropdown-item"
                  onClick={() => onButtonClick("topRatedMovies")}
                  ref={menuRef}
                >
                  <div className="dropdown-item-content">
                    <h4>Only the best</h4>
                    <p>Show me the top rated movies</p>
                  </div>
                  <FontAwesomeIcon icon={faStar} />
                </li>
                <Link to="/favorites">
                  <li className="dropdown-item">
                    <div className="dropdown-item-content">
                      <h4>My Faves</h4>
                      <p>Show me my favorite movies</p>
                    </div>
                    <FontAwesomeIcon icon={faHeart} />
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
