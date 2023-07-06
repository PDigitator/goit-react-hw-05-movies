import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../icons/search-icon.svg';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

import fetchMovies from 'helpers/api';
import { Form, SearchBtn, SearchIconWrap, Input } from 'pages/Movies.styled';

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

    const fetchMoviesData = async () => {
      setIsLoading(true);

      try {
        const {
          data: { results, total_pages },
        } = await fetchMovies(query, currentPage);
        takeMovies(results, total_pages);
      } catch (error) {
        console.log('ERROR', error); //???
        Report.failure('ERROR', `${error.message}`, 'Close');
      } finally {
        setIsLoading(false);
      }
    };

    const takeMovies = (results, total_pages) => {
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
  }, [searchParams, currentPage, query]);

  // useEffect(() => {
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
  // }, [searchQuery]);

  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value); //!!!!
    // console.log('here', searchQuery); //!
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const queryValue = form.elements.query.value.toLowerCase().trim();
    if (!queryValue) {
      Notify.info(
        'Sorry, you need to fill in the search field to search for movies.'
      );

      return;
    }

    setSearchParams({ query: queryValue });
    console.log('123', query); //!
    // form.reset(); //!
    setSearchQuery(''); //?
    // console.log('here2', searchQuery); //!
  };

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   getQuery(searchQuery);

  //   reset(); //????
  // };

  return (
    // <Link to state={{ from: location }}>
    <>
      <h1>Movies</h1>
      <Form onSubmit={handleSubmit}>
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
          Search movie
        </SearchBtn>
      </Form>
    </>
    // </Link>
  );
};

export default Movies;
