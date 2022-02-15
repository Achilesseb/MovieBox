export const fetchMovieSucces = (data) => ({
  type: "FETCH_MOVIE_SUCCES",
  payload: data,
});

export const clearMovieState = (data) => ({
  type: "CLEAR_MOVIE_STATE",
});

export const fetchCastSucces = (data) => ({
  type: "FETCH_ACTORS_SUCCES",
  payload: data,
});

export const fetchPopularSucces = (data) => ({
  type: "FETCH_POPULAR_SUCCES",
  payload: data,
});
export const fetchTopRatedSucces = (data) => ({
  type: "FETCH_TOPRATED_SUCCES",
  payload: data,
});

export const fetchSpecificMovie = (data) => ({
  type: "FETCH_SPECIFIC_MOVIE",
  payload: data,
});
