// import PropTypes from 'prop-types';

import CastGalleryItem from 'components/CastGalleryItem';

import { List } from 'components/MoviesGallery/MoviesGallery.styled';

const CastGallery = ({ data }) => {
  return (
    <List>
      {data.map(element => (
        <li key={element.id}>
          <CastGalleryItem element={element} />
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

export default CastGallery;
