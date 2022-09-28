import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchGetMovieDetails } from 'components/API/Api';
import MoviesDetailsItem from 'components/movieDetails/MoviesDetailsItem';
import Button from 'components/button/Button';
import styles from '../components/moviesList/MoviesList.module.css';
import PropTypes from 'prop-types';

export default function MoviesDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    fetchGetMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  const location = useLocation();
  const from = location.state?.from;

  return (
    movie && (
      <>
        <Button text="go back" />
        <MoviesDetailsItem movie={movie} />
        <div className={styles.addBox}>
          {' '}
          <h3 className={styles.secondaryTitle}>
            <span className={styles.first}>a</span>dditional information
          </h3>
          <div className={styles.addInfo}>
            <Link className={styles.link} state={{ from }} to="cast">
              cast
            </Link>
            <Link className={styles.link} state={{ from }} to="reviews">
              reviews
            </Link>
          </div>
          <Suspense fallback={<h1>loading...</h1>}>
            <Outlet />
          </Suspense>
        </div>
      </>
    )
  );
}

MoviesDetails.propTypes = {
  movie: PropTypes.object,
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  popularity: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};
