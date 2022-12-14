// import { fetchGetMovieCredits } from 'components/API/Api';
import { useState } from 'react';
import styles from './Cast.module.css';
import PropTypes from 'prop-types';

export default function CastItem({ profile_path, id, name, character }) {
  const [error, setError] = useState(false);
  return (
    <li key={id} className={styles.item}>
      <img
        className={styles.img}
        onError={e => {
          setError(true);
        }}
        src={
          profile_path && !error
            ? `https://image.tmdb.org/t/p/original${profile_path}`
            : `https://w0.peakpx.com/wallpaper/460/557/HD-wallpaper-black-tree-alone-amazing-balck-empty-frases-lonely-new-sad-tree.jpg`
        }
        alt={name}
        width={'150px'}
        height={`225px`}
      />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.desc}>Character: {character}</p>
    </li>
  );
}
CastItem.propTypes = {
  id: PropTypes.number,
  profile_path: PropTypes.string,
  character: PropTypes.string,
  error: PropTypes.string,
};
