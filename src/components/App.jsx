import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Navigation from './Navigation';
import SingleMovieInfo from 'pages/SingleMovieInfo';
import MovieCast from './MovieCast';
import MovieReviews from './MovieReviews';

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<SingleMovieInfo />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
