import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieCard from "../components/MovieCard.jsx";

import "../App.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const moviesIMG = import.meta.env.VITE_IMG;

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
    <div>
      {movie && (
        <>
          <p>{movie.title}</p>
          <p>{movie.tagline}</p>
        </>
      )}
    </div>
  );
};

export default Movie;
