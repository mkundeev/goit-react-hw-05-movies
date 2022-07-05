import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledList } from './MovieList.styled';

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <StyledList>
      {movies.map(({ original_title, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        );
      })}
    </StyledList>
  );
}
