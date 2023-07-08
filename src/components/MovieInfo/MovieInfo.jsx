import PropTypes from 'prop-types';

import noImageIcon from '../../icons/noImageIcon-500x750.png';

// import {
//   Thumb,
//   Image,
// } from 'components/MoviesGalleryItem/MoviesGalleryItem.styled'; //!!

const MovieInfo = ({
  details: { title, overview, poster_path, release_date, genres, vote_average },
}) => {
  const date = new Date(release_date).getFullYear();
  const score = Math.round(vote_average * 10);
  const movieGenres = genres.map(genre => genre.name).join(' ');

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

      <h3>
        {title} ({date})
      </h3>
      <p>User Score: {score}%</p>
      <h4>Overview</h4>
      <p>{overview ? overview : 'No overview'}</p>
      <h4>Genres</h4>
      <p>{genres ? movieGenres : 'No information'}</p>
    </>
  );
};

MovieInfo.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieInfo;
