// import PropTypes from 'prop-types';

import {
  Thumb,
  Image,
} from 'components/MoviesGalleryItem/MoviesGalleryItem.styled';

const MoviesGalleryItem = ({
  element: { poster_path, largeImageURL, title },
  onClickImage,
}) => {
  return (
    <>
      <Thumb>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          onClick={() => {
            onClickImage(largeImageURL, title);
          }}
        />
      </Thumb>
      <p>{title}</p>
    </>
  );
};

// MoviesGalleryItem.propTypes = {
//   element: PropTypes.shape({
//     poster_path: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//   }).isRequired,
//   onClickImage: PropTypes.func.isRequired,
// };

export default MoviesGalleryItem;
