import React from 'react';
// import { Link } from 'react-router-dom';

export default function MovieDetails({ movie }) {
  console.log(movie);
  const {
    original_title,
    genres,
    vote_average,
    overview,
    backdrop_path,
    release_date,
  } = movie;
  console.log(backdrop_path);
  return (
    <article>
      <button>Go back</button>
      <div>
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${backdrop_path}`}
          alt={original_title}
        />
        <div>
          <h2>
            {original_title} ({new Date(release_date).getFullYear()})
          </h2>
          <p>User score:{Math.round(vote_average * 10)}%</p>
          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <p>{genres.map(({ name }) => name).join(', ')}</p>
          </div>
        </div>
      </div>
      <div>
        <p>Additional information</p>
      </div>
    </article>
  );
}

// genres.map(({ name }) => name).join(', ');

/* <Link>Cast</Link>
        <Link>Reviews</Link> */
