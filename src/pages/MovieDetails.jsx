import { useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink';
// import { getMovieById } from '../fakeAPI';

const MovieDetails = () => {
  //   const { id } = useParams(); //!
  //   const movie = getMovieById(id); //!
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies'; //!
  console.log('location.state.from', location.state?.from); //!

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          {/* Product - {movie.name} - {id} */}
          Product -
        </h2>
        <p>Lorem ipsum</p>
      </div>
    </main>
  );
};

export default MovieDetails;
