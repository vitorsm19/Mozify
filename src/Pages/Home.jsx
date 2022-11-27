import { useState, useEffect } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import MovieCard from "../components/MovieCard.jsx";
import Greeting from "../components/Greeting.jsx";

import "../App.css";

const Home = () => {
  return (
    <>
      <Greeting />
      <section className="movies-section">
        <MovieCard />
      </section>
    </>
  );
};

export default Home;
