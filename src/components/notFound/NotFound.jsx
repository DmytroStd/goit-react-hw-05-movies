import styles from '../notFound/NotFound.module.css';

export default function NotFound() {
  return (
    <main className={styles.main}>
      <img src="images/0945761.jpg" alt="error" width={400} />
      <b className={styles.errorNumber}>404</b>
      <p>Sorry, we couldn't find that page :(</p>
    </main>
  );
}
