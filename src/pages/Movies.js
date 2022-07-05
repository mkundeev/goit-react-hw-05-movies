import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import MovieList from 'components/MovieList';
import { fetchMoviesBySearch } from 'services/fetchAPI';
import { SectionWrap, Warning } from './page.styled';

export default function Movies() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams] = useSearchParams();

  const navigation = useNavigate();
  const serchUrl = searchParams.get('query');

  useEffect(() => {
    if (!serchUrl) {
      return;
    }
    fetchMoviesBySearch(serchUrl).then(results => {
      setSearchedMovies(results);

      if (results.length === 0) {
        setStatus('noFound');
      } else {
        setStatus('resolved');
      }
    });
  }, [serchUrl]);

  function onHandleSubmit(query) {
    navigation({ search: `query=${query}` });
  }

  return (
    <SectionWrap>
      <SearchForm onSubmit={onHandleSubmit} />
      {status === 'resolved' && <MovieList movies={searchedMovies} />}
      {status === 'noFound' && (
        <Warning>Sorry, no movie found on your request</Warning>
      )}
    </SectionWrap>
  );
}
