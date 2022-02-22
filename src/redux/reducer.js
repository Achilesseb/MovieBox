const initialState = {
  searchMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  actors: [],
  specificMovie: {},
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_SUCCES": {
      return {
        ...state,
        searchMovies: state.searchMovies.concat(action.payload),
      };
    }
    case "CLEAR_MOVIE_STATE": {
      return {
        ...state,
        searchMovies: [],
        specificMovie: {},
        actors: [],
      };
    }
    case "FETCH_SPECIFIC_MOVIE": {
      return {
        ...state,
        specificMovie: (state.specificMovie = action.payload),
      };
    }
    case "FETCH_POPULAR_SUCCES": {
      return {
        ...state,
        popularMovies: state.popularMovies.concat(action.payload),
      };
    }
    case "FETCH_TOPRATED_SUCCES": {
      return {
        ...state,
        topRatedMovies: state.topRatedMovies.concat(action.payload),
      };
    }
    case "FETCH_ACTORS_SUCCES": {
      return {
        ...state,
        actors: state.actors.concat(action.payload),
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
