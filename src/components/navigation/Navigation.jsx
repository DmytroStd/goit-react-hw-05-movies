import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const setActiveLink = ({ isActive }) => {
    return !isActive ? styles.navLink : `${styles.navLink} ${styles.active}`;
  };
  return (
    <>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/" className={setActiveLink}>
            home
          </NavLink>
          <NavLink to="/movies" className={setActiveLink}>
            movies
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={<h1>loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
}
