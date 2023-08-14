import React, { useContext, useState } from "react";
import { MoviesContext } from "../../Context/MoviesContext";
import "./search.css";
import { useNavigate } from "react-router-dom";
export const Search = () => {
  const navigate = useNavigate();

  const { state } = useContext(MoviesContext);
  const [input, setInput] = useState("");

  const changeHandler = (value) => {
    setInput(value);
  };

  const filteredData = state.moviesData?.filter(({ title, cast, director }) =>
    title.toLowerCase().includes(input.toLowerCase())
  );
  // setData(filteredData);

  // console.log("fd", filteredData);

  const clickHandler = (id) => {
    setInput("");
    navigate(`/${id}`);
  };

  return (
    <div className="search-outer-container">
      <input
        placeholder=" search movies by title, cast and director..."
        value={input}
        onChange={(e) => changeHandler(e.target.value)}
      />
      {input && (
        <div className="search-items-container">
          {filteredData.map((movie) => (
            <div
              className="search-item"
              onClick={(movie) => clickHandler(movie.id)}
            >
              <img src={movie.imageURL} alt="" />
              <div className="detail">
                <h2>{movie.title}</h2>
                <p>
                  <b>Director:</b> {movie.director}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
