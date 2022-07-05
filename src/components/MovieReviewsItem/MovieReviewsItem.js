import React from 'react';
import { ReviewAuthor } from './MovieReviewsItem.styled';

export default function MovieReviewsItem({ author, content }) {
  return (
    <>
      <ReviewAuthor>{author}</ReviewAuthor>
      <p>{content}</p>
    </>
  );
}
