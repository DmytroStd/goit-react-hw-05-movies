import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Navigation = lazy(() => import('./navigation/Navigation'));
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails'));
const Cast = lazy(() => import('../components/cast/Cast'));
const Reviews = lazy(() => import('../components/reviews/ReviewsItem'));
const NotFound = lazy(() => import('../components/notFound/NotFound'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<h1> loading...</h1>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
