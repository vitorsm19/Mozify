import { useState, useEffect } from "react";
import { SplashIcon, SplashText, Splash } from "./components/Splash.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";

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
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
