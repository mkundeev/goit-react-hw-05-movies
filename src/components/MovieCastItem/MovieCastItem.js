import React from 'react';
import { MovieCastImg } from './MovieCastItem.styled';

export default function MovieCastItem({ name, character, picture }) {
  return (
    <>
      <MovieCastImg
        src={
          picture
            ? `https://www.themoviedb.org/t/p/w185/${picture}`
            : require('../../img/noPhoto.jpg')
        }
        alt={name}
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </>
  );
}
