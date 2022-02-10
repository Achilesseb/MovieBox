import "./App.scss";
import SearchBox from "./Components/SearchComponent/search-component";
import MovieHeader from "./Components/MovieComponent/Movie-header.jsx/movie-header-component";
import { useSelector } from "react-redux";
import Intro from "./Components/IntroComponent/intro-component";
import { Routes, Route } from "react-router-dom";
import SpecificMovie from "./Components/MovieComponent/Movie-specific/movieSpecific-component";

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
          <Route exact path="/movies" element={<MovieHeader />} />
          <Route exact path="/movies/:id" element={<SpecificMovie />} />
        </Routes>
        {/* <div className="header-content">{<MovieHeader />}</div> */}
      </div>
    );
  if (data.length === 0 || data.Response === "False") {
    if (data.Response === "False") alert(data.Error);
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox />
        </header>
        <div className="waiting-content">
          <Intro />
        </div>
      </div>
    );
  }
}

export default App;
