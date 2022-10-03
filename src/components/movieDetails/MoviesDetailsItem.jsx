import PropTypes from 'prop-types';
import Moment from 'react-moment';
import OfficialTrailer from 'components/videoTrailer/videoTrailer';
import styles from './MoviesDetailsItem.module.css';

export default function MoviesDetailsItem({ movie }) {
  return (
    movie && (
      <div className={styles.container}>
        <div className={styles.movieBox}>
          <h2 className={styles.title}>
            {movie.original_title}
            <br />
            <span>
              (<Moment format="MM.YYYY">{movie.release_date}</Moment>)
            </span>
          </h2>
        </div>
        <div className={styles.movieGallery}>
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.original_title}
            width={300}
          />
          <div>
            <div className={styles.infoBox}>
              <div className={styles.descBox}>
                <h3 className={styles.genresTitle}>
                  <span className={styles.first}>u</span>ser score:
                </h3>
                <p className={styles.userItem}>
                  {' '}
                  {Math.round(movie.vote_average * 10)}/100%
                </p>
                <h3 className={styles.genresTitle}>
                  <span className={styles.first}>g</span>enres:
                </h3>
                <ul className={styles.genresList}>
                  {movie.genres?.map(({ id, name }) => (
                    <li key={id} className={styles.genresItem}>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
              <OfficialTrailer />
            </div>

            <h3 className={styles.genresTitle}>
              <span className={styles.first}>o</span>verview
            </h3>
            <p className={styles.descText}>{movie.overview}</p>
          </div>
        </div>
      </div>
    )
  );
}

MoviesDetailsItem.propTypes = {
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
