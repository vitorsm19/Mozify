import React from "react";
import { useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import "../App.css";

const Greeting = ({setMovieType}) => {
  const [userName, setUserName] = useState("my future colleagues");


  const onButtonClick = (movieType) => {
    console.log(movieType);
    setMovieType(movieType);
  }



  // const getInitialState = () => {
  //   const movieType = "popular";
  //   return movieType;
  // };

  // const [movieType, setMovieType] = useState(getInitialState);

  // const handleChange = (e) => {
  //   setMovieType(e.target.value);
  // };


  return (
    <section id="greeting">
      <div>
        <h3 className="greeting-title">Hello, {userName}!</h3>
        <span className="greeting-subtitle">Check these movies out</span>
      </div>

      <div>
        <button onClick={() => onButtonClick("popularMovies")}>Popular</button>
        <button onClick={() => onButtonClick("topRatedMovies")}>Top Rated</button>
      </div>
    </section>
  );
};

export default Greeting;
