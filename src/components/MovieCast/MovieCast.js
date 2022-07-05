import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCreditsById } from 'services/fetchAPI';
import MovieCastItem from 'components/MovieCastItem';
import {
  MovieCastItemStyled,
  MovieCastListStyled,
  NoCast,
} from './MovieCast.styled';

export default function MovieCast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCreditsById(Number(movieId)).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <MovieCastListStyled>
          {cast.length > 0 ? (
            cast.map(({ id, name, character, profile_path }) => {
              return (
                <MovieCastItemStyled key={id}>
                  <MovieCastItem
                    name={name}
                    character={character}
                    picture={profile_path}
                  />
                </MovieCastItemStyled>
              );
            })
          ) : (
            <NoCast>There is no information about cast for this film</NoCast>
          )}
        </MovieCastListStyled>
      )}
    </>
  );
}
