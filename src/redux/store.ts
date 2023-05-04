import { createWrapper } from 'next-redux-wrapper';
import {
  configureStore,
  createSlice,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import movieReducer from './movieSlice/movie-reducer';

// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: {
    searchMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    actors: [],
    specificMovie: {},
    user: {},
  },
  reducers: { movieReducer },
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

const makeStore = () =>
  configureStore({
    reducer: {
      [movieSlice.name]: movieSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
