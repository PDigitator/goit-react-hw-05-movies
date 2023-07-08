import PropTypes from 'prop-types';

import noImageIcon from '../../icons/noImageIcon-250x375.png';

import {
  Thumb,
  Image,
} from 'components/CastGalleryItem/CastGalleryItem.styled';

const CastGalleryItem = ({ element: { profile_path, name, character } }) => {
  return (
    <>
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
      <p>{name}</p>
      {character && <p>Character: {character}</p>}
    </>
  );
};

CastGalleryItem.propTypes = {
  element: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }).isRequired,
};

export default CastGalleryItem;
