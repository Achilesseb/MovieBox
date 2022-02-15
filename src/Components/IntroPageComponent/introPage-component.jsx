import React from "react";
import "./introPage.styles.scss";

const IntroPage = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => (images[item.replace("./", "")] = r(item)));
    return images;
  }
  const images = importAll(
    require.context("./Posters", false, /\.(png|jpe?g|svg)$/)
  );
  const imagesUrl = Object.values(images);
  return (
    <div className="intro-box">
      <h1 className="intro-message">
        <span className="intro-highlight-message">The&nbsp;MOVIE</span>
        {" library you always needed"}
      </h1>
      <div className="intro-collection-posters">
        {imagesUrl.map((image) => (
          <img src={`${image}`} className="intro-poster" />
        ))}
      </div>
    </div>
  );
};

export default IntroPage;
