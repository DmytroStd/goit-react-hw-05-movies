import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchGetSearch } from '../API/Api';
import MovieList from '../moviesList/MoviesList';
import Notiflix from 'notiflix';
import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';

export default function SearchBar() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const handleSubmit = e => {
    e.preventDefault();
    if (search?.trim() === '') {
      return Notiflix.Notify.warning('please, enter valid movie name');
    }
    const form = e.currentTarget;
    setSearchParams({ search: form.elements.search.value });
    form.reset();
  };

  useEffect(() => {
    if (search) {
      fetchGetSearch(search)
        .then(data => setMovies(data.results))
        .catch(error => console.log(error));
    }
  }, [search]);

  return (
    <>
      <div className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <label className={styles.label}>
            <button type="submit" className={styles.searchButton}>
              <span className={styles.searchFormButtonLabel}>search</span>
            </button>

            <input
              className={styles.searchInput}
              type="text"
              autoComplete="off"
              name="search"
              autoFocus
              placeholder="search movies"
            />
          </label>
        </form>
      </div>
      {movies && <MovieList movies={movies} />}
    </>
  );
}

SearchBar.propType = {
  fetchGetSearch: PropTypes.func,
};
