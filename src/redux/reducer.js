const initialState = [];
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_SUCCES": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default movieReducer;
