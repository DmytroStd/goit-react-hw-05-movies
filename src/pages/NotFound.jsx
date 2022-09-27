import styles from '../pages/notFound/NotFound.module.css';
// import styles from '../images';

export const NotFound = () => {
  return (
    <main className={styles.main}>
      <img src="../images/0945761.jpg" alt="error" />
      <b className={styles.errorNumber}>404</b>
      <p>Sorry, we couldn't find that page :(</p>
    </main>
  );
};
// ../../images/0945761.jpg
