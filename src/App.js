import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
} from "@mui/material";
import MovieSearch from "./MovieSearch";
import Favorites from "./Favorites";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    // Load favorite movies from session storage when the app starts
    const storedFavorites = sessionStorage.getItem("favorites");
    if (storedFavorites) {
      setFavoriteMovies(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavorite = (movie) => {
    const updatedFavorites = [...favoriteMovies, movie];
    setFavoriteMovies(updatedFavorites);
    sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography color="info" variant="h2" style={{ margin: "20px" }}>
        Search Movies Here !
      </Typography>
      <CssBaseline />
      <MovieSearch addFavorite={addFavorite} />
      <Favorites favoriteMovies={favoriteMovies} />
    </ThemeProvider>
  );
}

export default App;
