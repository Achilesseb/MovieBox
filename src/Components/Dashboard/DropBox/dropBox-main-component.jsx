import React from 'react';
import './dropbox-component.styles.scss';
import { auth } from '../../../firebase.config';
import { Link } from 'react-router-dom';
const DropBox = prop => {
  const name = prop.name;
  const condition = name === 'Guest';
  return (
    <div className="dropbox">
      {condition ? (
        <p className="display-name">Hello, Guest!</p>
      ) : name === null ? (
        'Hello, User!'
      ) : (
        <p className="display-name">{`Hello, ${name.slice(
          name.lastIndexOf(' '),
        )}!`}</p>
      )}
      {condition ? '' : <span>Account</span>}
      <span>Favorites</span>
      <span>Watchlist</span>
      {condition ? (
        <Link to="/signin" className="dropbox-signout">
          Sign in
        </Link>
      ) : (
        <span className="dropbox-signout" onClick={() => auth.signOut()}>
          SignOut
        </span>
      )}
    </div>
  );
};

export default DropBox;
