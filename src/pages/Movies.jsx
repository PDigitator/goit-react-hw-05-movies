import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Link to state={{ from: location }}>
      <h1>Movies</h1>
    </Link>
  ); //!
};

export default Movies;
