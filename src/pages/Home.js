import React from 'react';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import { fetchTrendMovies } from 'services/fetchAPI';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then(results => setTrendMovies(results));
  }, []);

  return (
    <div>
      <h2>Today trend movies</h2>
      <MovieList movies={trendMovies} />
    </div>
  );
}
