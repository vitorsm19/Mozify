import React from "react";
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

  // Fetch the movie information when the component is mounted
  useEffect(() => {
    const movieURL = `${moviesURL}${movieId}?${apiKey}&language`;
    getMovie(movieURL);
  }, [movieId]);

  // Add the movie to the favorites list when the "Add to favorites" button is clicked
  // If the movie is already favorited, remove it from the list instead
  const handleAddToFavorites = () => {
    if (isFavorited) {
      // Remove the movie from LocalStorage
      localStorage.removeItem(`favorite-${movie.id}`);
      // Update the state to reflect the new list of favorites
      setIsFavorited(false);
    } else {
      // Store the movie in LocalStorage
      localStorage.setItem(`favorite-${movie.id}`, JSON.stringify(movie));
      // Update the state to reflect the new list of favorites
      setIsFavorited(true);
    }
  };

    // Check if the movie is already favorited when the component is mounted
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