import React, { useState } from "react";
import { useEffect } from "react";
import "./intro-component.styles.scss";
import Album from "./homePage-layout-component";
import { fetchPopularSucces, fetchTopRatedSucces } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const HomePage = () => {
  const POPULAR_URL = fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4419c2df8d66a246f89be8fd55dd282d&region=RO&page=1"
  );

  const TOPRATED_URL = fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=4419c2df8d66a246f89be8fd55dd282d&region=RO&page=1"
  );

  const fetchData = Promise.all([POPULAR_URL, TOPRATED_URL]);
  const dispatch = useDispatch();
  useEffect(() => {
    const solvePromises = fetchData.then((response) =>
      response.map((response) => response.json())
    );
    return solvePromises.then((promise) =>
      promise.map((result, index) => {
        if (index === 0)
          result.then((res) => dispatch(fetchPopularSucces(res)));
        if (index === 1)
          result.then((res) => dispatch(fetchTopRatedSucces(res)));
      })
    );
  }, []);
  const data = useSelector((data) => data);
  const { popularMovies } = data;
  const { topRatedMovies } = data;
  if (popularMovies.length === 0 || topRatedMovies.length === 0)
    return (
      <div className="App">
        <div className="waiting-content">
          <ClipLoader size={150} />
        </div>
      </div>
    );
  return (
    <div className="intro-page">
      <Album props={[popularMovies, "POPULAR right now"]} />
      <Album props={[topRatedMovies, "Top RATED Movies"]} />
    </div>
  );
};
export default HomePage;
