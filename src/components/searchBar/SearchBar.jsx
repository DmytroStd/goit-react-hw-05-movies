import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearch } from '../API/Api';
import MovieList from '../moviesList/MoviesList';
import styles from './SearchBar.module.css';
import PropTypes from 'prop-types';

export default function SearchBar() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const handleSubmit = e => {
    e.preventDefault();
    if (search?.trim() === '') {
      return alert('Try again');
    }
    const form = e.currentTarget;
    setSearchParams({ search: form.elements.search.value });
    form.reset();
  };

  useEffect(() => {
    if (search) {
      getSearch(search)
        .then(data => setMovies(data.results))
        .catch(error => console.log(error));
    }
  }, [search]);

  return (
    <>
      <div className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <label className={styles.label}>
            <button type="submit" className={styles.searchFormButton}>
              <span className={styles.searchFormButtonLabel}>search</span>
            </button>

            <input
              className={styles.SearchFormInput}
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
  getSearch: PropTypes.func,
};
