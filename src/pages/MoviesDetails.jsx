import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchGetMovieDetails } from 'components/API/Api';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

export default function MoviesDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  //   const realeseYear = release_date?.slice(0, 4);
  //   const votesPercentage = Math.round(vote_average * 10);
  //   const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    fetchGetMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
    //   .finally(setLoading(false));
  }, [movieId]);
  return (
    movie && (
      <>
        <button type="button">go back</button>
        <div>
          <div>
            <h2>
              {movie.original_title}(
              <Moment format="YYYY">{movie.release_date}</Moment>)
            </h2>
            <p>user score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>overview</h3>
            <p>{movie.overview}</p>
            <h3>genres</h3>
            <p>
              {movie.genres?.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </p>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.original_title}
            width={300}
          />
        </div>

        <div>
          <h3>additional information</h3>
          <Link className="{styles.link}" to={`cast`}>
            cast
          </Link>
          <Link className="{styles.link}" to={`rewiews`}>
            rewiews
          </Link>
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
