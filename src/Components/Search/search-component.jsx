import React, { useState } from "react";
import "./search-component.styles.scss";
import { fetchMovieSucces, clearMovieState } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSearch } from "../../utils";

const SearchBox = () => {
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
      <Link to="/homepage" className="homepage-link" onClick={clearState}>
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
    </div>
  );
};

export default SearchBox;
