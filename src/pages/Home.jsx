import { useState, useEffect } from 'react';
import { fetchTrendMovie } from 'components/API/Api';
import MovieList from 'components/moviesList/MoviesList';
import PropTypes from 'prop-types';
import styles from '../components/moviesList/MoviesList.module.css';

export default function Home() {
  const [movies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovie()
      .then(data => setTrendMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div>
        <h1 className={styles.heroTitle}>
          <span className={styles.first}>t</span>rending{' '}
          <span className={styles.first}>t</span>oday
        </h1>
        {<MovieList movies={movies} />}
      </div>
    </>
  );
}

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

// useEffect(() => {
//   // setLoading(true);
//   fetchTrendMovie()
//     .then(data => setTrendMovies(data.results))
//     .catch(error => console.log(error));
//   // .finally(setLoading(false));
// }, []);
