const initialState = {
  movies: [],
  popularMovies: [],
  actors: [],
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "FETCH_MOVIE_SUCCES": {
    //   return [...state, action.payload];
    // }
    // case "CLEAR_MOVIE_STATE": {
    //   return state;
    // }
    // case "FETCH_CAST_SUCCES": {
    //   return [state.actors, action.payload];
    // }
    case "FETCH_POPULAR_SUCCES": {
      return {
        ...state,
        popularMovies: state.popularMovies.concat(action.payload),
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
