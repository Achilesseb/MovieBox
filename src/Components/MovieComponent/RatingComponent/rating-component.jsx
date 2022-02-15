import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./rating-component.styles.scss";

const Rating = () => {
  const data = useSelector((data) => data.Ratings);
  console.log(data);
  const RaitingView = () =>
    data.map((data) => {
      const ratingLabel = data.Source;
      const ratingValue = data.Value;

      return (
        <div className="card-container">
          <div className="card-container name">{ratingLabel}</div>
          <div className="card-container name">{ratingValue}</div>
        </div>
      );
    });
  return (
    <div className="card-list">
      <RaitingView />
    </div>
  );
};

export default Rating;
