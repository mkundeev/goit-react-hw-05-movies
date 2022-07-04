import axios from 'axios';
import { axiosConfigs } from 'configs/axiosConfigs';

const { url, API_KEY } = axiosConfigs;

export const fetchTrendMovies = () => {
  return axios(`${url}trending/movie/day?api_key=${API_KEY}`).then(results => {
    return results.data.results;
  });
};

export const fetchMoviesBySearch = query => {
  return axios(
    `${url}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  ).then(results => {
    return results.data.results;
  });
};

export const fetchMovieById = id => {
  return axios(`${url}movie/${id}?api_key=${API_KEY}&language=en-US`).then(
    results => {
      return results.data;
    }
  );
};
