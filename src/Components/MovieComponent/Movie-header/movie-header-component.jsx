import React from "react";
import { useSelector } from "react-redux";
import "./movie-header.styles.scss";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function MovieHeader() {
  const data = useSelector((data) => data.movie.searchMovies);

  return (
    <div className="movies-list">
      {data.map((data, index) => (
        <Link to={`${data.id}`} key={index}>
          <Card className="card">
            <CardActionArea className="card-actionArea">
              <CardMedia
                component="img"
                className="card-image"
                image={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                alt={`${data.original_title}`}
              />
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </div>
  );
}
