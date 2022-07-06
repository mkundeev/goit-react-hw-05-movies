import PropTypes from 'prop-types';
import { ReviewAuthor } from './MovieReviewsItem.styled';

export default function MovieReviewsItem({ author, content }) {
  return (
    <>
      <ReviewAuthor>{author}</ReviewAuthor>
      <p>{content}</p>
    </>
  );
}

MovieReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
