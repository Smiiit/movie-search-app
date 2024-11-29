import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@mui/material';

const MovieCard = ({ movie, addFavorite }) => {
  return (
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
        <Button variant="contained" color="primary" onClick={() => addFavorite(movie)} style={{ marginTop: '10px' }}>
          Add to Favorites
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
