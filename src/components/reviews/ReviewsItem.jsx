import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieReviews } from 'components/API/Api';
import PropTypes from 'prop-types';
import styles from './ReviewsItem.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchGetMovieReviews(movieId)
      .then(result => {
        setReviews(result.results);
      })
      .catch(error => console.log(error));
  }, [movieId, reviews]);

  return (
    reviews && (
      <ul className={styles.list}>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id} className={styles.item}>
              <p className={styles.author}>{author}</p>
              <p className={styles.text}>{content}</p>
            </li>
          ))
        ) : (
          <p className={styles.error}>
            Sorry, there is no reviews about this movie
          </p>
        )}
      </ul>
    )
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};
