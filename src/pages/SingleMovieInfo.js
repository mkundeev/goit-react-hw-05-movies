import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails';
import { fetchMovieById } from 'services/fetchAPI';

export default function SingleMovieInfo() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieById(Number(movieId)).then(setMovie);
  }, [movieId]);

  return <>{movie && <MovieDetails movie={movie} />}</>;
}
