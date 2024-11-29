import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';

const Favorites = ({ favoriteMovies }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">Favorite Movies</Typography>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {favoriteMovies.length === 0 ? (
          <Typography>No favorites yet!</Typography>
        ) : (
          favoriteMovies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={movie.Poster === 'N/A' ? 'https://via.placeholder.com/300x450' : movie.Poster}
                  alt={movie.Title}
                />
                <CardContent>
                  <Typography variant="h6">{movie.Title}</Typography>
                  <Typography color="textSecondary">{movie.Year}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Favorites;
