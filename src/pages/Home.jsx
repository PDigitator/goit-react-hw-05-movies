import { useState, useEffect } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

import fetchTrendMovies from 'helpers/api';

import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //   if (!searchQuery) {
    //     return;
    //   }

    const fetchTrendMoviesData = async () => {
      setIsLoading(true);

      try {
        const {
          data: { results, total_pages },
        } = await fetchTrendMovies(currentPage);
        takeTrendMovies(results, total_pages);
      } catch (error) {
        console.log('ERROR', error); //???
        Report.failure('ERROR', `${error.message}`, 'Close');
      } finally {
        setIsLoading(false);
      }
    };

    const takeTrendMovies = (results, total_pages) => {
      if (results.length !== 0) {
        setMovies(prevState => [...prevState, ...results]); //?
        setTotalPages(total_pages); //?
      } else {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
    };

    fetchTrendMoviesData();
  }, [currentPage]);

  const onLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <>
      {movies.length > 0 && (
        <Section title="Trending today">
          <MoviesGallery data={movies} />
          {currentPage < totalPages && !isLoading && (
            <Button text="Load more" onClickBtn={onLoadMore} /> //?
          )}
        </Section>
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default Home;
