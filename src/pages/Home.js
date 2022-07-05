import React from 'react';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import { fetchTrendMovies } from 'services/fetchAPI';
import { SectionWrap } from './page.styled';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then(results => setTrendMovies(results));
  }, []);

  return (
    <SectionWrap>
      <h2>Today trend movies</h2>
      <MovieList movies={trendMovies} />
    </SectionWrap>
  );
}
