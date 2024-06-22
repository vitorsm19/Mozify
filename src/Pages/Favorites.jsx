import { useState, useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faClose } from "@fortawesome/free-solid-svg-icons";

const moviesImgPoster = import.meta.env.VITE_IMG_CARDS;

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith("favorite-")
    );
    const favoriteMovies = favoriteKeys.map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    setFavorites(favoriteMovies);
  }, []);

  const handleRemoveFromFavorites = (movieId) => {
    localStorage.removeItem(`favorite-${movieId}`);
    setFavorites(favorites.filter((movie) => movie.id !== movieId));
  };

  return (
    <section className="favorites-page">
      <Navbar />
      <div className="back">
        <Link to="/">
          <FontAwesomeIcon icon={faAngleLeft} />
          <p>Go back</p>
        </Link>
      </div>
      <div className="movies-section">
        {favorites.map((favorite) => (
          <div className="movie-card" key={favorite.id}>
            <div className="card-image">
              <img
                src={`${moviesImgPoster}${favorite.poster_path}`}
                alt={favorite.title}
              />
            </div>
            <div className="fav-card">
              <Link to={`/movie/${favorite.id}`} className="card-content">
                <h4>{favorite.title}</h4>
              </Link>
              <a onClick={() => handleRemoveFromFavorites(favorite.id)}>
                <FontAwesomeIcon icon={faClose} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;
