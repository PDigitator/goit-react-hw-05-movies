import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { fetchMovieReviews } from 'helpers/api';

import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import ReviewsGallery from 'components/ReviewsGallery';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchMovieReviewsData = async () => {
      setIsLoading(true);

      try {
        const {
          data: { results },
        } = await fetchMovieReviews(movieId);

        getMovieReviews(results);
      } catch (error) {
        console.log('ERROR', error); //???
        Report.failure('ERROR', `${error.message}`, 'Close');
      } finally {
        setIsLoading(false);
      }
    };

    const getMovieReviews = results => {
      if (results.length !== 0) {
        setMovieReviews(results);
      } else {
        Notify.failure('Sorry, there are no movie reviews.');
      }
    };

    fetchMovieReviewsData();
  }, [movieId]);

  return (
    <>
      {movieReviews.length !== 0 ? (
        <ReviewsGallery data={movieReviews} />
      ) : (
        <p>No reviews. But you can keep yours...</p>
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default Reviews;
