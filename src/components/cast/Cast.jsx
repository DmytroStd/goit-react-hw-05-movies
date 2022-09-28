import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieCredits } from 'components/API/Api';
import CastItem from './CastItem';
import PropTypes from 'prop-types';
import styles from './Cast.module.css';

// export default function CastItem({ cast }) {
//   const [error, setError] = useState(false);
//   return (

//     <li key={id}>
//       <img
//         className={styles.img}
//         onError={(e) => {
//           setError(true);
//         }}
//         src={
//           profile_path && !error
//             ? `https://image.tmdb.org/t/p/original${profile_path}`
//             : `https://www.peakpx.com/en/hd-wallpaper-desktop-pbxaj`
//         }
//         alt={name}
//         width={'400px'}
//       />
//       <h3 className={styles.name}>{name}</h3>
//       <p className={styles.desc}>Character: {character}</p>
//     </li>
// )}

export default function Cast({ error }) {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchGetMovieCredits(movieId)
      .then(result => {
        setCast(result.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {' '}
      {cast &&
        cast.map(({ id, name, profile_path, character }) => (
          <CastItem
            key={id}
            name={name}
            profile_path={profile_path}
            character={character}
            error={error}
          />
        ))}
    </ul>
  );
}

Cast.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  profile_path: PropTypes.string,
  character: PropTypes.string,
  error: PropTypes.string,
};
