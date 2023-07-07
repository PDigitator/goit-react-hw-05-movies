import { useState, useRef, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet, NavLink } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { fetchMovieCast } from 'helpers/api';

import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import CastGallery from 'components/CastGallery';
import MovieInfo from 'components/MovieInfo';
// import { getMovieById } from '../fakeAPI';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams(); //???

  // const location = useLocation();

  // const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchMovieCastData = async () => {
      setIsLoading(true);

      try {
        const {
          data: { cast },
        } = await fetchMovieCast(movieId);

        getMovieCast(cast);
      } catch (error) {
        console.log('ERROR', error); //???
        Report.failure('ERROR', `${error.message}`, 'Close');
      } finally {
        setIsLoading(false);
      }
    };

    const getMovieCast = cast => {
      if (cast.length !== 0) {
        setMovieCast(cast); //?
      } else {
        Notify.failure('Sorry, there are no movie cast.');
      }
    };

    fetchMovieCastData();
  }, [movieId]);

  console.log('movieCast', movieCast);
  return (
    <>
      <Section>
        {movieCast.length !== 0 && <CastGallery data={movieCast} />}
      </Section>

      {isLoading && <Loader />}
    </>
  );
};

export default Cast;
