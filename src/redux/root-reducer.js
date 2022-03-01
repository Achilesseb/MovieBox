import { combineReducers } from "redux";
import userReducer from "./userSlice/user-reducer";
import movieReducer from "./movieSlice/movie-reducer";
export default combineReducers({
  user: userReducer,
  movie: movieReducer,
});
