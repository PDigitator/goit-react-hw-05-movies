// import { useLocation, Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

import noImageIcon from '../../icons/noImageIcon-500x750.png';

// import {
//   Thumb,
//   Image,
// } from 'components/MoviesGalleryItem/MoviesGalleryItem.styled'; //?????

const MovieInfo = ({
  details: { title, overview, poster_path, release_date, genres, vote_average },
}) => {
  console.log('start MovieInfo');

  const date = new Date(release_date).getFullYear();
  const score = Math.round(vote_average * 10);
  const movieGenres = genres.map(genre => genre.name).join(' ');

  console.log('genres in MovieInfo', genres); //!!!

  return (
    <>
      <div>
        {poster_path ? (
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        ) : (
          <img src={noImageIcon} alt={title} />
        )}
      </div>

      <h2>
        {title} ({date})
      </h2>
      <p>User Score: {score}%</p>
      <h3>Overview</h3>
      <p>{overview ? overview : 'No overview'}</p>
      <h3>Genres</h3>
      <p>{genres ? movieGenres : 'No information'}</p>
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

export default MovieInfo;
