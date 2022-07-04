import React from 'react';
import { Link } from 'react-router-dom';
import { StyledList } from './MovieList.styled';

export default function MovieList({ movies }) {
  //   const match = useMatch();
  //   console.log(match);
  return (
    <StyledList>
      {movies.map(({ original_title, id }) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`} data-id={id}>
              {original_title}
            </Link>
          </li>
        );
      })}
    </StyledList>
  );
}
