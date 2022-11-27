import { useState, useEffect } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import MovieCard from "../components/MovieCard.jsx";
import Greeting from "../components/Greeting.jsx";
import Navbar from "../components/Navbar.jsx";


import "../App.css";

const Home = () => {

  const [movieType, setMovieType] = useState("popularMovies");


  return (
    <>
      <Navbar />
      <Greeting setMovieType={setMovieType} />
      <section className="movies-section">
        <MovieCard movieType={movieType} />
      </section>
    </>
  );
};

export default Home;
