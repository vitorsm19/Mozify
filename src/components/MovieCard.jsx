import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../App.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const moviesIMG = import.meta.env.VITE_IMG_CARDS;

const MovieCard = ({ movieType }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let url = `${moviesURL}${
        movieType === "popularMovies" ? "popular" : "top_rated"
      }?${apiKey}&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [movieType]);

  return (
    <>
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <div className="card-image">
            <img src={`${moviesIMG}${movie.poster_path}`} alt={movie.title} />
          </div>
          <Link to={`/movie/${movie.id}`} className="card-content">
            <h4>{movie.title}</h4>
            <div className="card-content-info">
              <span>
                <FontAwesomeIcon icon={faStar} />
                {movie.vote_average.toFixed(1)}
              </span>
              <span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovieCard;
