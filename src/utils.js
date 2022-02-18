import { API_KEY } from "./api_key";
const MAIN_URL = "https://api.themoviedb.org/3";
const POPULAR_URL = `${MAIN_URL}/movie/popular?api_key=${API_KEY}&region=RO&page=1`;
const TOPRATED_URL = `${MAIN_URL}/movie/top_rated?api_key=${API_KEY}&region=RO&page=1`;
const SEARCH_MOVIE_URL = `${MAIN_URL}/search/movie`;
const MOVIE_URL = `${MAIN_URL}/movie`;
export const fetchPopular = fetch(POPULAR_URL);
export const fetchTopRated = fetch(TOPRATED_URL);

export const fetchSearch = (searchField) =>
  fetch(
    `${SEARCH_MOVIE_URL}?api_key=${API_KEY}&query=${searchField}&include_adult=true`
  );
export const fetchActors = (id) =>
  fetch(`${MOVIE_URL}/${id}/credits?api_key=${API_KEY}`);
