export const MAIN_URL = process.env.REACT_APP_API_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;
export const POPULAR_URL = `${MAIN_URL}/movie/popular?api_key=${API_KEY}&region=RO&page=1`;
export const TOPRATED_URL = `${MAIN_URL}/movie/top_rated?api_key=${API_KEY}&region=RO&page=1`;
export const SEARCH_MOVIE_URL = `${MAIN_URL}/search/movie`;
export const MOVIE_URL = `${MAIN_URL}/movie`;
