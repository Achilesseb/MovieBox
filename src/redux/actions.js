export const fetchMovieSucces = (data) => ({
  type: "FETCH_MOVIE_SUCCES",
  payload: data,
});

export const clearMovieState = (data) => ({
  type: "CLEAR_MOVIE_STATE",
});
