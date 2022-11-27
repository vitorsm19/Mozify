import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from './Pages/Home.jsx'
import Movie from './Pages/Movie.jsx'
import Favorites from './Pages/Favorites.jsx'

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route element={<App />}>

          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/favorites" element={<Favorites />} />
          
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
