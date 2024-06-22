import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

const AddFavorites = ({ movieId }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [movie, setMovie] = useState(null);
  const moviesURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;

  const getMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    const movieURL = `${moviesURL}${movieId}?${apiKey}&language`;
    getMovie(movieURL);
  }, [movieId]);

  const handleAddToFavorites = () => {
    if (isFavorited) {
      localStorage.removeItem(`favorite-${movie.id}`);
      setIsFavorited(false);
    } else {
      localStorage.setItem(`favorite-${movie.id}`, JSON.stringify(movie));
      setIsFavorited(true);
    }
  };

  useEffect(() => {
    const favoritedMovie = localStorage.getItem(`favorite-${movieId}`);
    if (favoritedMovie) {
      setIsFavorited(true);
    }
  }, [movieId]);

  return (
    <>
      {isFavorited ? (
        <a onClick={handleAddToFavorites}>
          <FontAwesomeIcon icon={fasHeart} />
        </a>
      ) : (
        <a onClick={handleAddToFavorites}>
          <FontAwesomeIcon icon={farHeart} />
        </a>
      )}
    </>
  );
};

export default AddFavorites;
