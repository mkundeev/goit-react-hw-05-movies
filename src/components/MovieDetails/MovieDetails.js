import React from 'react';
// import { Link } from 'react-router-dom';

export default function MovieDetails({ movie }) {
  console.log(movie);
  const {
    original_title,
    genres,
    popularity,
    overview,
    backdrop_path,
    release_date,
  } = movie;
  console.log(backdrop_path);
  return (
    <article>
      <button>Go back</button>
      <div>
        <img src={`${backdrop_path}`} alt={original_title} />
        <div>
          <h2>
            {original_title}
            {release_date}
          </h2>
          <p>User score:{Math.round(popularity)}%</p>
          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <p>{genres[0].name}</p>
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
