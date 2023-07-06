import { useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BackLink from 'components/BackLink';
// import { getMovieById } from '../fakeAPI';

const MovieDetails = () => {
  const { movieId } = useParams(); //!
  //   const movie = getMovieById(id); //!
  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  console.log('location.state.from', location); //!
  console.log('backLinkLocationRef', backLinkLocationRef); //!

  return (
    <main>
      <BackLink to={backLinkLocationRef}>Go back</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {'movie.name'} - {movieId}
        </h2>
        <p>Lorem ipsum</p>
      </div>
    </main>
  );
};

export default MovieDetails;
