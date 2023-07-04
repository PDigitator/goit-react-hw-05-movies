// import PropTypes from 'prop-types';

import MovieGalleryItem from 'components/MoviesGalleryItem/MoviesGalleryItem';

import { List } from 'components/MoviesGallery/MoviesGallery.styled';

const MoviesGallery = ({ data, onClickMovie }) => {
  return (
    <List>
      {data.map(element => (
        <li key={element.id}>
          <MovieGalleryItem element={element} onClickMovie={onClickMovie} />
        </li>
      ))}
    </List>
  );
};

// MoviesGallery.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onClickImage: PropTypes.func.isRequired,
// };

export default MoviesGallery;
