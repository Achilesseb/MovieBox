import React from 'react';
import './introPage.styles.scss';
import { importAllImages } from '../../utils/imageHandlers';

const IntroPage = () => {
  const images = importAllImages(
    require.context('./Posters', false, /\.(png|jpe?g|svg)$/),
  );

  const imagesUrl = Object.values(images);

  return (
    <div className="intro-box">
      <h1 className="intro-message">
        <span className="intro-highlight-message">The&nbsp;MOVIE</span>
        {' library you always needed'}
      </h1>
      <div className="intro-collection-posters">
        {imagesUrl.map((image, index) => (
          <img
            src={`${image}`}
            className="intro-poster"
            key={index}
            alt={`${image}`}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroPage;
