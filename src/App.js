import "./App.scss";
import SearchBox from "./Components/SearchComponent/search-component";
import MovieHeader from "./Components/MovieComponent/Movie-header/movie-header-component";
import { useSelector } from "react-redux";
import Intro from "./Components/IntroComponent/homePage-component";
import { Routes, Route } from "react-router-dom";
import SpecificMovie from "./Components/MovieComponent/Movie-specific/movieSpecific-header/movieSpecific-component";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

function App() {
  const data = useSelector((data) => data);
  console.log(data);
  // if (data.length === 0) {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <SearchBox />
  //       </header>
  //       <div className="waiting-content">
  //         <ClipLoader size={150} />
  //       </div>
  //     </div>
  //   );
  // }
  if (data.length !== 0)
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox />
        </header>
        <Routes>
          <Route path="/homepage" element={<Intro />} />
          <Route exact path="/homepage/:id" element={<SpecificMovie />} />
          <Route path="/movies" element={<MovieHeader />} />
          <Route exact path="/movies/:id" element={<SpecificMovie />} />
        </Routes>
      </div>
    );
}

export default App;
