import { useState, useEffect } from "react";
import { Splash } from "./components/Splash.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";

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
