import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '7ef171008597e4d392359a67eba29580',
  },
});

export const fetchTrendMovie = async () => {
  const { data } = await instance.get('/trending/movie/week');
  return data;
};

export const getSearch = async query => {
  const { data } = await instance.get('/search/movie', { params: { query } });
  return data;
};

export const fetchGetMovieDetails = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}`);
  return data;
};

export const fetchGetMovieCredits = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/credits`);
  return data;
};

export const fetchGetMovieReviews = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}/reviews`);
  return data;
};

// export const fetchGetMovieVideo = async movie_id => {
//   const { data } = await instance.get(`/movie/${movie_id}/videos`);
//   return data;
// };
