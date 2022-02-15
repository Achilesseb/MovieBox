import "./App.scss";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import IntroPage from "./Components/IntroPageComponent/introPage-component";
import HomePage from "./Components/HomePageComponent/homePage-component";
import SearchBox from "./Components/SearchComponent/search-component";
import MovieHeader from "./Components/MovieComponent/Movie-header/movie-header-component";
import SpecificMovie from "./Components/MovieComponent/Movie-specific/movieSpecific-header/movieSpecific-component";

function App() {
  const data = useSelector((data) => data);
  console.log(data);
  if (data.length !== 0)
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox />
        </header>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route
            path="/homepage"
            element={
              data.searchMovies.length === 0 ? <HomePage /> : <MovieHeader />
            }
          />
          <Route exact path="/homepage/:id" element={<SpecificMovie />} />
          <Route path="/movies" element={<MovieHeader />} />
          <Route exact path="/movies/:id" element={<SpecificMovie />} />
        </Routes>
      </div>
    );
}

export default App;
