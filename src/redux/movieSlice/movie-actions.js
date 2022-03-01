export const fetchMovieSucces = (data) => ({
  type: "FETCH_MOVIE_SUCCES",
  payload: data,
});

export const clearMovieState = () => ({
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
export const createUser = (data) => ({
  type: "CREATE_USER_PROFILE",
  payload: data,
});
