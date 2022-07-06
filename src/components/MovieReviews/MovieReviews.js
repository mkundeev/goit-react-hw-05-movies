import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviewsById } from 'services/fetchAPI';
import MovieReviewsItem from 'components/MovieReviewsItem';
import {
  MovieReviewsItemStyled,
  MovieReviewsListStyled,
  NoReviews,
} from './MovieReviews.styled';

export default function MovieReviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieReviewsById(Number(movieId)).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && (
        <MovieReviewsListStyled>
          {reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => {
              return (
                <MovieReviewsItemStyled key={id}>
                  <MovieReviewsItem author={author} content={content} />
                </MovieReviewsItemStyled>
              );
            })
          ) : (
            <NoReviews>There are no rewievs for this film</NoReviews>
          )}
        </MovieReviewsListStyled>
      )}
    </>
  );
}
