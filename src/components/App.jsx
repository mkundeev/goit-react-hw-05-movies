import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'pages/page.styled';
import { BallTriangle } from 'react-loader-spinner';

const Navigation = lazy(() =>
  import('./Navigation' /* webpackChunkName: "navigation" */)
);
const Home = lazy(() => import('pages/Home' /* webpackChunkName: "home" */));
const Movies = lazy(() =>
  import('pages/Movies' /* webpackChunkName: "movies" */)
);
const SingleMovieInfo = lazy(() =>
  import('pages/SingleMovieInfo' /* webpackChunkName: "single-movie" */)
);
const MovieCast = lazy(() =>
  import('./MovieCast' /* webpackChunkName: "movie-cast" */)
);
const MovieReviews = lazy(() =>
  import('./MovieReviews' /* webpackChunkName: "movie-reviews" */)
);

export const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <Loader>
            <BallTriangle
              height="200px"
              width="200px"
              color="grey"
              ariaLabel="loading-indicator"
            />
          </Loader>
        }
      >
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
      </Suspense>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
