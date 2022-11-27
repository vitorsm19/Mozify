import { useState, useEffect } from "react";
import { SplashIcon, SplashText, Splash } from "./components/Splash.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import Movie from "./Pages/Movie.jsx";
import Favorites from "./Pages/Favorites.jsx";

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);



  return (
    <div className="App">
      {loading ? (
        <Splash />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </div>
  );
}

export default App;
