import "./App.scss";
import SearchBox from "./Components/SearchComponent/search-component";
import MovieHeader from "./Components/MovieComponent/Movie-header.jsx/movie-header-component";
import { useSelector } from "react-redux";
import SquareLoader from "react-spinners/PuffLoader";
import Rating from "./Components/RatingComponent/rating-component";
import Navigation from "./Components/NavComponent/nav-component";

function App() {
  const data = useSelector((data) => data);
  console.log(data);
  if (data.length !== 0)
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox />
        </header>
        <div className="header-content">
          <Navigation />
          <MovieHeader />
        </div>
      </div>
    );
  else
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox />
        </header>
        <div className="waiting-content">
          <SquareLoader size="60vh" color="#282c34" />
        </div>
      </div>
    );
}

export default App;
