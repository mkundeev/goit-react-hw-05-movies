import React from 'react';
import {
  MovieWrap,
  MoviePoster,
  MovieArticle,
  MovieInfoPartsWrap,
  MovieAdditionalInfoList,
  AdditionalInfoWrap,
} from './MovieDetails.styled';
import { useState } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';

export default function MovieDetails({ movie }) {
  const location = useLocation();
  const [backLink] = useState(() =>
    location.state?.from ? location.state?.from : '/'
  );

  const {
    original_title,
    genres,
    vote_average,
    overview,
    poster_path,
    release_date,
  } = movie;

  return (
    <div>
      <MovieArticle>
        <Link to={backLink}>Go back</Link>
        <MovieWrap>
          <MoviePoster>
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
              alt={original_title}
            />
          </MoviePoster>
          <div>
            <MovieInfoPartsWrap>
              <h2>
                {original_title} ({new Date(release_date).getFullYear()})
              </h2>
              <p>User score: {Math.round(vote_average * 10)}%</p>
            </MovieInfoPartsWrap>
            <MovieInfoPartsWrap>
              <h3>Overview</h3>
              <p>{overview}</p>
            </MovieInfoPartsWrap>
            <MovieInfoPartsWrap>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(', ')}</p>
            </MovieInfoPartsWrap>
          </div>
        </MovieWrap>
        <AdditionalInfoWrap>
          <p>Additional information</p>
          <MovieAdditionalInfoList>
            <NavLink to="cast">Cast</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
          </MovieAdditionalInfoList>
        </AdditionalInfoWrap>
      </MovieArticle>
      <Outlet />
    </div>
  );
}
