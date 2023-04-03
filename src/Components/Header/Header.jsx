import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearMovieState } from '../../redux/movieSlice/movie-actions';

import './header.styles.scss';

export const MBHeader = () => {
  const data = useSelector(data => data.user);
  const dispatch = useDispatch();
  const [searchField, setSearch] = useState('');
  const [dropBoxStatus, setDropBoxStatus] = useState('hidden');

  const fetchData = e => {
    dispatch(clearMovieState());
    e.preventDefault();

    setSearch('');
  };
  const clearState = () => {
    dispatch(clearMovieState());
  };

  const toggleDropBoxStatus = () =>
    dropBoxStatus === 'hidden'
      ? setDropBoxStatus('show')
      : setDropBoxStatus('hidden');

  return (
    <>
      <div className="search-bar">
        <Link to="/homepage" className="introPage-link" onClick={clearState}>
          MovieBox
        </Link>
        <form className="form" onSubmit={fetchData}>
          <input
            autoFocus
            onChange={e => setSearch(e.target.value)}
            className="input"
            type="text"
            placeholder="Search your movie here!"
            value={searchField}
          ></input>
        </form>
        <div className="searchBar-user">
          {data.currentUser === null ? (
            <div
              className="homepage-link"
              onClick={() => toggleDropBoxStatus()}
            />
          ) : (
            <div
              className="homepage-link"
              onClick={() => toggleDropBoxStatus()}
            />
          )}{' '}
          {dropBoxStatus === 'hidden' ? (
            <span className="current-user">{`${
              data.currentUser === null
                ? 'Guest'
                : data.currentUser.displayName === null
                ? 'User'
                : data.currentUser.displayName.slice(
                    data.currentUser.displayName.lastIndexOf(' '),
                  )
            }`}</span>
          ) : null}
        </div>
        {dropBoxStatus === 'show' ? (
          <div
            className="dropbox-searchBar"
            onMouseLeave={() => setTimeout(() => toggleDropBoxStatus(), 1000)}
          />
        ) : null}
      </div>
    </>
  );
};
