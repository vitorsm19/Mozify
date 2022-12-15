import React, { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const FavoritesPage = () => {
  // Use the useState hook to manage the state of the favorite movies
  const [favorites, setFavorites] = useState([]);

  // Fetch the favorite movies from LocalStorage when the component is mounted
  useEffect(() => {
    const fetchFavorites = async () => {
      // Get the list of favorite movie IDs from LocalStorage
      const favoriteIds = Object.keys(localStorage)
        .filter((key) => key.startsWith("favorite-"))
        .map((key) => key.replace("favorite-", ""));

      // Fetch information about the favorite movies from the API
      const promises = favoriteIds.map((id) =>
        fetch(`https://api.themoviedb.org/3/movie/${id}`)
      );
      const responses = await Promise.all(promises);
      const jsonResponses = await Promise.all(
        responses.map((response) => response.json())
      );
      const favoriteMovies = jsonResponses.map((json) => json.data);

      // Update the state with the list of favorite movies
      setFavorites(favoriteMovies);
    };
    fetchFavorites();
  }, []);

  return (
    <div>
      <h1 className="favorites">Favorites</h1>
      <h2 className="favorites">Development In Progress...</h2>
      {favorites.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
