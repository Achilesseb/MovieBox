import React, { useState } from "react";
import "./search-component.styles.scss";
import { fetchMovieSucces } from "../../redux/actions";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchField, setSearch] = useState("");
  const fetchData = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?t=${searchField}&apikey=7906feff`)
      .then((response) => response.json())
      .then((res) => dispatch(fetchMovieSucces(res)))
      .catch((err) => {
        console.error(err);
      });

    setSearch("");
  };

  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <div className="search-bar" onSubmit={fetchData}>
      <form className="form">
        <label className="label">
          MovieBox
          <input
            onChange={onChange}
            className="input"
            type="search"
            placeholder="Search your movie here!"
            value={searchField}
          ></input>
        </label>
      </form>
    </div>
  );
};

export default SearchBox;
