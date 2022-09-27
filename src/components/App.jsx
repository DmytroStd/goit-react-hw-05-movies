import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home';
import { Movies } from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails';
import { NotFound } from 'pages/NotFound';
// import Header from './header/Header';
import { Header } from './App.styled';
import styles from './App.module.css';

export const App = () => {
  const setActiveLink = ({ isActive }) => {
    return !isActive ? styles.navLink : `${styles.navLink} ${styles.active}`;
  };
  return (
    <>
      <Header>
        <nav>
          <NavLink to="/" className={setActiveLink}>
            home
          </NavLink>
          <NavLink to="/movies" className={setActiveLink}>
            movies
          </NavLink>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
        {/*<Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
