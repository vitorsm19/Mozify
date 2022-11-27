import { useState, useEffect } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import MovieCard from "../components/MovieCard.jsx";
import Greeting from "../components/Greeting.jsx";
import Navbar from "../components/Navbar.jsx";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const moviesIMG = import.meta.env.VITE_IMG;

import "../App.css";

const Home = () => {

  const [movieType, setMovieType] = useState("popularMovies");


  return (
    <>
      <Navbar setMovieType={setMovieType}/>
      <Greeting  />
      <section className="movies-section">
        <MovieCard movieType={movieType} />
      </section>
    </>
  );
};

export default Home;
