import { useLocation, Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import noImageIcon from '../../icons/noImageIcon-500x750.png';

import {
  Thumb,
  Image,
} from 'components/MoviesGalleryItem/MoviesGalleryItem.styled';

const MoviesGalleryItem = ({ element: { id, poster_path, title } }) => {
  const location = useLocation();
  return (
    <>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <Thumb>
          {poster_path ? (
            <Image
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          ) : (
            <Image src={noImageIcon} alt={title} />
          )}
        </Thumb>
      </Link>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <p>{title}</p>
      </Link>
    </>
  );
};

MoviesGalleryItem.propTypes = {
  element: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoviesGalleryItem;
