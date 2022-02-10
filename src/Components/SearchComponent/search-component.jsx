import React, { useState } from "react";
import "./search-component.styles.scss";
import { fetchMovieSucces, clearMovieState } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchField, setSearch] = useState("");
  const fetchData = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4419c2df8d66a246f89be8fd55dd282d&query=${searchField}&include_adult=true`
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((res) => dispatch(fetchMovieSucces(res.results)))
      .catch((err) => {
        console.log(err);
      });

    setSearch("");
  };

  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
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
          onChange={onChange}
          className="input"
          type="search"
          placeholder="Search your movie here!"
          value={searchField}
        ></input>
      </form>
    </div>
  );
};

export default SearchBox;
