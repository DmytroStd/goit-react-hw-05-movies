import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={styles.item}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              <img
                className={styles.img}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.original_title}
                width={200}
                height={300}
              />

              <span className={styles.title}>{movie.title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
  id: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
};
