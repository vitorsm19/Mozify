import React from "react";


const FavoriteContext = React.createContext({
    favoriteMovies: [],
    updateFavoriteMovies: (id) => null
});


export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;