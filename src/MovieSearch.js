import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import MovieCard from './MovieCard';

const OMDB_API_URL = 'https://www.omdbapi.com/';
const API_KEY = 'f128d8b5'; // Replace with your OMDB API key GIVEN IN THE EMAIL

const MovieSearch = ({ addFavorite }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(OMDB_API_URL, {
        params: { s: query, apikey: API_KEY },
      });
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setError('No movies found.');
      }
    } catch (err) {
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="Search for movies"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" onClick={handleSearch} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Search'}
      </Button>

      {error && <Typography color="error" style={{ marginTop: '20px' }}>{error}</Typography>}

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
              <MovieCard movie={movie} addFavorite={addFavorite} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default MovieSearch;
