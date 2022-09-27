import { useState, useEffect } from 'react';
import { fetchTrendMovie } from 'components/API/Api';
import MovieList from 'components/moviesList/MoviesList';
import PropTypes from 'prop-types';

const Home = () => {
  const [movies, setTrendMovies] = useState([]);

  useEffect(() => {
    // setLoading(true);
    fetchTrendMovie()
      .then(data => setTrendMovies(data.results))
      .catch(error => console.log(error));
    // .finally(setLoading(false));
  }, []);

  return (
    <div>
      <h1>trending today</h1>
      {<MovieList movies={movies} />}
    </div>
  );
};

export default Home;

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
