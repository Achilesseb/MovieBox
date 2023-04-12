import { API_KEY, SEARCH_MOVIE_URL } from '../constants/apiURLS';

export const getMovieByName = async (searchField: string) => {
  const fetchMovieURL = `${SEARCH_MOVIE_URL}?api_key=${API_KEY}&query=${searchField}&include_adult=true`;
  const movieData = await fetch(fetchMovieURL);
  return movieData.json();
};
