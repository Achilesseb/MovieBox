import React from "react";
import { useSelector } from "react-redux";
import "./movie-header.styles.scss";

const MovieHeader = () => {
  const data = useSelector((data) => data);
  console.log(data);

  const {
    Title: title,
    Poster: imgUrl,
    Year: year,
    Rated: rated,
    Plot: plot,
    Genre: genre,
  } = data;
  console.log(genre);

  const genreTypes = genre.split(",");
  const GenrgeTypes = () =>
    genreTypes.map((genre) => <div className="genre-type">{genre}</div>);
  console.log(genreTypes);

  return (
    <div className="movie">
      <div className="movie-header">
        {/* <div className="genre">
          <GenrgeTypes />
        </div> */}
        <div className="movie-info">
          <div className="movie-title">{title}</div>
        </div>
        <div className="movie-poster">
          <img src={imgUrl} alt={`${title} poster`} className="poster" />
        </div>
      </div>
    </div>
  );
};
export default MovieHeader;
