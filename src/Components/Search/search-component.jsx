import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./search-component.styles.scss";
import {
  fetchMovieSucces,
  clearMovieState,
} from "../../redux/movieSlice/movie-actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSearch } from "../../utils";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Avatar } from "@mui/material";

const SearchBox = () => {
  const data = useSelector((data) => data.user);
  const dispatch = useDispatch();
  const [searchField, setSearch] = useState("");
  const fetchData = (e) => {
    dispatch(clearMovieState());
    e.preventDefault();
    const fetchedData = fetchSearch(searchField);
    fetchedData
      .then((response) => {
        return response.json();
      })
      .then((res) => dispatch(fetchMovieSucces(res.results)))
      .catch((err) => {
        console.log(err);
      });

    setSearch("");
  };

  const clearState = () => {
    dispatch(clearMovieState());
  };
  return (
    <div className="search-bar">
      <Link to="/homepage" className="introPage-link" onClick={clearState}>
        MovieBox
      </Link>
      <form className="form" onSubmit={fetchData}>
        <input
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
          className="input"
          type="text"
          placeholder="Search your movie here!"
          value={searchField}
        ></input>
      </form>
      <div className="searchBar-user">
        {data.currentUser === null ? (
          <Link to="/singin" className="homepage-link">
            <AccountBoxIcon fontSize="large" />
          </Link>
        ) : (
          <Link to="/homepage" className="homepage-link">
            <Avatar src={`${data.currentUser.photoURL}`} />
          </Link>
        )}{" "}
        <span className="current-user">{`Hello, ${
          data.currentUser === null
            ? "Guest"
            : data.currentUser.displayName.slice(
                data.currentUser.displayName.lastIndexOf(" ")
              )
        }!`}</span>
      </div>
    </div>
  );
};

export default SearchBox;
