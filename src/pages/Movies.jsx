import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../icons/search-icon.svg';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { fetchMovies } from 'helpers/api';
import { Form, SearchBtn, SearchIconWrap, Input } from 'pages/Movies.styled';

import Searchbar from 'components/Searchbar/Searchbar';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';

const Movies = () => {
  // const location = useLocation();
  // console.log(location); //!

  const [searchParams, setSearchParams] = useSearchParams();
  // const [query, setQuery] = useState(''); //!
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    console.log('worked USEEFFECT Movies'); //!
    const fetchMoviesData = async () => {
      setIsLoading(true);
      console.log('worked fetchMoviesData'); //!

      try {
        const {
          data: { results, total_pages },
        } = await fetchMovies(query, currentPage);
        getMovies(results, total_pages);
      } catch (error) {
        console.log('ERROR', error); //???
        Report.failure('ERROR', `${error.message}`, 'Close');
      } finally {
        setIsLoading(false);
      }
    };

    const getMovies = (results, total_pages) => {
      if (results.length !== 0) {
        setMovies(prevState => [...prevState, ...results]); //?

        setTotalPages(total_pages); //?
      } else {
        Notify.failure(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      }
    };

    fetchMoviesData();
  }, [currentPage, query]);
  console.log('movies', movies); //!

  //   const getQuery = searchQuery => {
  //     if (query === searchQuery && query !== '') return;

  //     if (query) {
  //       setSearchQuery(query);
  //       setImages([]);
  //       setCurrentPage(1);
  //     } else {
  //       Notify.info(
  //         'Sorry, you need to fill in the search field to search for images.'
  //       );
  //     }
  //   };

  // const handleChange = ({ target: { value } }) => {
  //   setSearchQuery(value); //!!!!
  //   // console.log('here', searchQuery); //!
  // };

  const getQuery = queryValue => {
    if (!queryValue) {
      Notify.info(
        'Sorry, you need to fill in the search field to search for movies.'
      );

      return;
    }

    setSearchParams({ query: queryValue });
    setMovies([]);
    setCurrentPage(1);
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   const queryValue = form.elements.query.value.toLowerCase().trim();
  //   if (!queryValue) {
  //     Notify.info(
  //       'Sorry, you need to fill in the search field to search for movies.'
  //     );

  //     return;
  //   }

  //   setSearchParams({ query: queryValue });
  //   setMovies([]);
  //   setCurrentPage(1);
  //   console.log('123', query); //!
  //   // form.reset(); //!
  //   setSearchQuery(''); //?
  //   // console.log('here2', searchQuery); //!
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   getQuery(searchQuery);

  //   reset(); //????
  // };

  const onLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    // <Link to state={{ from: location }}> //!
    <>
      <Section>
        <Searchbar getQuery={getQuery} />

        {/* <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="query"
            value={searchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Movie name"
            onChange={handleChange}
          />
          <SearchBtn type="submit" aria-label="Search">
            <SearchIconWrap>
              <SearchIcon width="24" height="24" fill="currentColor" />
            </SearchIconWrap>
          </SearchBtn>
        </Form> */}

        {movies.length > 0 && (
          <>
            <MoviesGallery data={movies} />
            {currentPage < totalPages && !isLoading && (
              <Button text="Load more" onClickBtn={onLoadMore} /> //?
            )}
          </>
        )}
      </Section>
      {isLoading && <Loader />}
    </>
    // </Link>
  );
};

export default Movies;
