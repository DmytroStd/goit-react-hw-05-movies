import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '7ef171008597e4d392359a67eba29580',
  },
});

export const fetchTrendMovie = async () => {
  try {
    const { data } = await instance.get('/trending/movie/week');
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchGetSearch = async query => {
  try {
    const { data } = await instance.get('/search/movie', { params: { query } });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchGetMovieDetails = async movie_id => {
  try {
    const { data } = await instance.get(`/movie/${movie_id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchGetMovieCredits = async movie_id => {
  try {
    const { data } = await instance.get(`/movie/${movie_id}/credits`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchGetMovieReviews = async movie_id => {
  try {
    const { data } = await instance.get(`/movie/${movie_id}/reviews`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchGetMovieVideo = async movie_id => {
  try {
    const { data } = await instance.get(`/movie/${movie_id}/videos`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
