import PropTypes from 'prop-types';

// import {
//   Thumb,
//   Image,
// } from 'components/ReviewsGalleryItem/ReviewsGalleryItem.styled'; //!

const ReviewsGalleryItem = ({ element: { author, content } }) => {
  return (
    <>
      <p>{author}</p>
      <p>{content}</p>
    </>
  );
};

ReviewsGalleryItem.propTypes = {
  element: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewsGalleryItem;
