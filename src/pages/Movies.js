import React from 'react';
import { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm';
import MovieList from 'components/MovieList';
import { fetchMoviesBySearch } from 'services/fetchAPI';
import { SectionWrap, Warning } from './page.styled';

export default function Movies() {
  const [search, setSearch] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (search === '') {
      return;
    }
    fetchMoviesBySearch(search).then(results => {
      setSearchedMovies(results);
      if (results.length === 0) {
        setStatus('noFound');
      } else {
        setStatus('resolved');
      }
    });
  }, [search]);

  return (
    <SectionWrap>
      <SearchForm onSubmit={setSearch} />
      {status === 'resolved' && <MovieList movies={searchedMovies} />}
      {status === 'noFound' && (
        <Warning>Sorry, no movie found on your request</Warning>
      )}
    </SectionWrap>
  );
}
