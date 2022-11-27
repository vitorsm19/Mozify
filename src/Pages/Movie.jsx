import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import MovieCard from "../components/MovieCard.jsx";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

import "../App.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const moviesImgBanner = import.meta.env.VITE_IMG_BANNER;

const Movie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}&language`;
    getMovie(movieURL);
  }, []);

  return (
    <section
      className="movie-page"
      style={{
        backgroundImage: ` linear-gradient(
    to top,
    rgba(5,26,55, 0.9) 45%,
    rgba(0, 0, 0, 0)
    ) ,url(${moviesImgBanner}${movie?.backdrop_path})`,
      }}
    >
      <Navbar />

      <div className="back">
        <Link to="/">
          <FontAwesomeIcon icon={faAngleLeft} />
          <p>Go back</p>
        </Link>
      </div>

      {movie && (
        <>
          {/* <p>{movie.title}</p>
          <p>{movie.original_title}</p>
          <p> {movie.tagline}</p>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p> */}

          <div className="movie-banner">a</div>
        </>
      )}
    </section>
  );
};

export default Movie;
