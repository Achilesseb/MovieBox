import "./App.scss";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import IntroPage from "./Components/IntroPageComponent/introPage-component";
import HomePage from "./Components/HomePage/homePage-component";
import SearchBox from "./Components/Search/search-component";
import MovieHeader from "./Components/MovieComponent/Movie-header/movie-header-component";
import SpecificMovie from "./Components/MovieComponent/Movie-specific/movieSpecific-header/movieSpecific-component";
import SignIn from "./Components/LogInPage/login-component";
import SignUp from "./Components/LogInPage/singup-component";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { createUserProfileDocument } from "./firebase.config";
import { setCurrentUser } from "./redux/userSlice/user-actions";

function App() {
  const data = useSelector((data) => data);
  console.log(data);
  const auth = getAuth();
  let unsubscribefromAuth;
  useEffect(() => {
    unsubscribefromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
        setCurrentUser(userAuth);
      }
    });
  }, []);
  useEffect(() => {
    return () => {
      unsubscribefromAuth();
    };
  }, []);
  if (data.movie.length !== 0)
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              data.movie.searchMovies.length === 0 ? (
                <IntroPage />
              ) : (
                <MovieHeader />
              )
            }
          />
          <Route
            path="/homepage"
            element={
              data.movie.searchMovies.length === 0 ? (
                <HomePage />
              ) : (
                <MovieHeader />
              )
            }
          />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/:id" element={<SpecificMovie />} />
          <Route exact path="/homepage/:id" element={<SpecificMovie />} />
          <Route path="/movies" element={<MovieHeader />} />
          <Route exact path="/movies/:id" element={<SpecificMovie />} />
        </Routes>
      </div>
    );
}

export default App;
