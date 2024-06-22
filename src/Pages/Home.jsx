import { useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import Greeting from "../components/Greeting.jsx";
import Navbar from "../components/Navbar.jsx";

import "../App.css";

const Home = () => {
  const [movieType, setMovieType] = useState("popularMovies"); //default

  return (
    <>
      <Navbar setMovieType={setMovieType} />
      <Greeting />
      <section className="movies-section">
        <MovieCard movieType={movieType} />
      </section>
    </>
  );
};

export default Home;
