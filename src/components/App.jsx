import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Layout from 'components/Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<div>MovieDetails</div>}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
        {/* <Route path="*" element={<div>NotFound</div>} /> //?? */}
      </Route>
    </Routes>
  );
};

export default App;
