import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "../src/Pages/Home.jsx";
import Movie from "../src/Pages/Movie.jsx";
import Favourites from "./Pages/Favourites.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="favourites" element={<Favourites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
