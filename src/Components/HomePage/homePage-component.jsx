import React from "react";
import { useEffect } from "react";
import "./intro-component.styles.scss";
import Album from "./homePage-layout-component";
import { fetchPopularSucces, fetchTopRatedSucces } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { fetchPopular, fetchTopRated } from "../../utils";

const HomePage = () => {
  const checkData = useSelector((data) => data.popularMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkData.length === 1) return;
    const fetchData = Promise.all([fetchPopular, fetchTopRated]);
    const solvePromises = fetchData.then((response) =>
      response.map((response) => response.json())
    );
    return solvePromises.then((promise) =>
      promise.forEach((result, index) => {
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
