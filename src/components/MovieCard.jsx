import { useState, useEffect } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import "../App.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const moviesIMG = import.meta.env.VITE_IMG;

const MovieCard = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const getTopRatedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setTopRatedMovies(data.results);
  };

  useEffect(() => {
    const topRatedMoviesURL = `${moviesURL}top_rated?${apiKey}&language=en-US`;

    getTopRatedMovies(topRatedMoviesURL);
  }, []);

  const [popularMovies, setPopularMovies] = useState([]);
  const getPopularMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setPopularMovies(data.results);
  };

  useEffect(() => {
    const popularMoviesURL = `${moviesURL}popular?${apiKey}&language=en-US`;

    getPopularMovies(popularMoviesURL);
  }, []);

  const getInitialState = () => {
    const movieType = "popular";
    return movieType;
  };

  const [movieType, setMovieType] = useState(getInitialState);

  const handleChange = (e) => {
    setMovieType(e.target.value);
  };

  <>
    <select value={movieType} onChange={handleChange}>
      <option value="popularMovies">Popular</option>
      <option value="topRatedMovies">Top Rated</option>
    </select>
  </>;

  {topRatedMovies &&
    topRatedMovies.map((movie) => {
      return (
        <div className="movie-card" key={movie.id}>
          <div className="card-image">
            <img src={`${moviesIMG}${movie.poster_path}`} alt="{movie.title}" />
          </div>

          <Link to={`/movie/${movie.id}`} className="card-content">
            <h4>{movie.title}</h4>
            <div className="card-content-info">
              <span>
                <FontAwesomeIcon icon={faStar} />
                {movie.vote_average}
              </span>
              <span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
          </Link>
        </div>
      );
    });}


};

export default MovieCard;
