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
import DropBox from "../DropBox/dropBox-main-component";

const SearchBox = () => {
  const data = useSelector((data) => data.user);
  const dispatch = useDispatch();
  const [searchField, setSearch] = useState("");
  const [dropBoxStatus, setDropBoxStatus] = useState("hidden");
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

  const toggleDropBoxStatus = () =>
    dropBoxStatus === "hidden"
      ? setDropBoxStatus("show")
      : setDropBoxStatus("hidden");
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
          <div className="homepage-link" onClick={() => toggleDropBoxStatus()}>
            <AccountBoxIcon fontSize="large" />
          </div>
        ) : (
          <div className="homepage-link" onClick={() => toggleDropBoxStatus()}>
            <Avatar
              src={`${data.currentUser.photoURL}`}
              sx={
                dropBoxStatus === "hidden"
                  ? { width: 40, height: 40 }
                  : { width: 60, height: 60 }
              }
            />
          </div>
        )}{" "}
        {dropBoxStatus === "hidden" ? (
          <span className="current-user">{`${
            data.currentUser === null
              ? "Guest"
              : data.currentUser.displayName === null
              ? "User"
              : data.currentUser.displayName.slice(
                  data.currentUser.displayName.lastIndexOf(" ")
                )
          }`}</span>
        ) : null}
      </div>
      {dropBoxStatus === "show" ? (
        <div
          className="dropbox-searchBar"
          onMouseLeave={() => setTimeout(() => toggleDropBoxStatus(), 1000)}
        >
          <DropBox
            name={
              data.currentUser === null ? "Guest" : data.currentUser.displayName
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default SearchBox;
