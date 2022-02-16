import { API_KEY } from "./api_key";
const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&region=RO&page=1`;
const TOPRATED_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&region=RO&page=1`;
export const fetchPopular = fetch(POPULAR_URL);
export const fetchTopRated = fetch(TOPRATED_URL);

export const fetchSearch = (searchField) =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchField}&include_adult=true`
  );
export const fetchActors = (id) =>
  fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);
