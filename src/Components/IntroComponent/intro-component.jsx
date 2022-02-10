import React from "react";
import "./intro-component.styles.scss";

const Intro = () => {
  const importAll = (r) => {
    return r.keys().map(r);
  };
  const posters = importAll(
    require.context("./Posters", false, /\.(png|jpe?g|svg)$/)
  );
  console.log(posters);

  const Poster = () =>
    posters.map((poster) => (
      <div>
        <img className="poster" src={`${poster}`} />
      </div>
    ));
  return (
    <div className="intro-page">
      <div className="intro-posters">
        <Poster />
      </div>
    </div>
  );
};
export default Intro;
