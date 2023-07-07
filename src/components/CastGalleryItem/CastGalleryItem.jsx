// import { useLocation, Link } from 'react-router-dom'; //!

// import PropTypes from 'prop-types';

import noImageIcon from '../../icons/noImageIcon-500x750.png';

import {
  Thumb,
  Image,
} from 'components/CastGalleryItem/CastGalleryItem.styled';

const CastGalleryItem = ({ element: { profile_path, name, character } }) => {
  // const location = useLocation(); //!
  return (
    <>
      {/* <Link to={`/movies/${id}`} state={{ from: location }}> */}
      <Thumb>
        {profile_path ? (
          <Image
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={name}
          />
        ) : (
          <Image src={noImageIcon} alt={name} />
        )}
      </Thumb>
      {/* </Link> */}
      {/* <Link to={`/movies/${id}`} state={{ from: location }}> */}
      <p>{name}</p>
      <p>Character: {character}</p>

      {/* </Link> */}
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

export default CastGalleryItem;
