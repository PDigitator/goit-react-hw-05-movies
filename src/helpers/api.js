import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '96335405b345233f2a3dbecabd0603e6'; //!
const options = {
  method: 'GET',
  // api_key: API_KEY, //!
  // page: currentPage, //!
  params: { language: 'en-US' },
  // headers: {
  //   accept: 'application/json',
  //   Authorization:
  //     'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjMzNTQwNWIzNDUyMzNmMmEzZGJlY2FiZDA2MDNlNiIsInN1YiI6IjY0YTMwMjdiZTlkYTY5MDBhZTJmMTRmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-JNYq0lLf2QZFKI9PWQ6B2ydwjA4oq3z-bATNKk5WQ',
  // },
};

const fetchTrendMovies = async currentPage => {
  const endpoint = '/trending/movie/day';

  const params = new URLSearchParams({
    api_key: API_KEY, //!

    page: currentPage,
  });

  // page: currentPage,
  //     query: '',
  //     include_adult: 'false', //?

  const response = await axios.request(
    `${BASE_URL}${endpoint}?${params}`,
    options
  );

  return response;
};

export default fetchTrendMovies;
