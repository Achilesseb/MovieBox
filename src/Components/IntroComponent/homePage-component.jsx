import React, { useState } from "react";
import { useEffect } from "react";
import "./intro-component.styles.scss";
import Album from "./homePage-layout-component";
import { fetchPopularSucces } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const Intro = () => {
  const dispatch = useDispatch();
  useEffect(
    () =>
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=4419c2df8d66a246f89be8fd55dd282d&region=RO&page=1"
      )
        .then((response) => response.json())
        .then((result) => dispatch(fetchPopularSucces(result))),
    []
  );
  const data = useSelector((data) => data);
  console.log(data);
  if (data.popularMovies.length === 0)
    return (
      <div className="App">
        <div className="waiting-content">
          <ClipLoader size={150} />
        </div>
      </div>
    );
  return (
    <div className="intro-page">
      <Album />
    </div>
  );
};
export default Intro;
