import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock, faCalendar } from "@fortawesome/free-regular-svg-icons";
import MovieCard from "../components/MovieCard.jsx";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import AddFavorites from "../components/AddFavorites.jsx";
import "../App.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const moviesImgBanner = import.meta.env.VITE_IMG_BANNER;
const moviesImgPoster = import.meta.env.VITE_IMG_CARDS;

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

  const [isFavorited, setIsFavorited] = useState(false);


  return (
    <section
      className="movie-page"
      style={{
        backgroundImage: ` linear-gradient(
    to top,
    rgba(5,26,55, 0.9) 45%,
    rgba(0, 0, 0, 0)
    ) ,url(${moviesImgBanner}${movie?.backdrop_path})
    
    `,
      }}
    >
      <Navbar />

      <div className="back">
        <Link to="/">
          <FontAwesomeIcon icon={faAngleLeft} />
          <p>Go back</p>
        </Link>

        <div className="add-favorite-mobile"></div>
      </div>

      {movie && (
        <section className="movie-container">
          <div className="movie-poster">
            <img
              src={`${moviesImgPoster}${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="movie-details">
            <span className="movie-title">
              {movie.title}
              <span className="add-favorite">
                <AddFavorites movieId={movie.id} />
              </span>
            </span>
            {movie.tagline && <p className="movie-tagline">{movie.tagline}</p>}
            <p className="movie-overview">{movie.overview}</p>
            <p className="movie-release-date">
              <FontAwesomeIcon icon={faCalendar} />{" "}
              {movie.release_date.toString().slice(0, 4)}
            </p>
            <p className="movie-runtime">
              <FontAwesomeIcon icon={faClock} /> {movie.runtime}min
            </p>
            <p className="movie-rating">
              <FontAwesomeIcon icon={faStar} /> {movie.vote_average.toFixed(1)}
            </p>
            <div className="movie-genres">
              {movie.genres.map((genre) => (
                <div className="genre-box" key={genre.id}>
                  {genre.name}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default Movie;
