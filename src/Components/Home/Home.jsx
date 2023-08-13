import React, { useContext } from "react";
import "./home.css";
import { MoviesContext } from "../../Context/MoviesContext";
export const Home = () => {
  const { state } = useContext(MoviesContext);

  console.log("state", state);
  const filtered = [...state.moviesData].map(({ genre }) => [...genre]);

  console.log("fill", filtered);

  return (
    <div className="home-outer-container">
      <div className="home-inner-container">
        <div className="home-filter-container">
          <h2>Movies</h2>
          <select>
            <option>All Genre </option>
          </select>
          <select>
            <option>Release Year</option>
          </select>
          <select>
            <option>Rating</option>
          </select>
          <button>Add a Movie</button>
        </div>
        <div className="movies-list-container">
          {[...state.moviesData].map((movie) => {
            const { imageURL, title, summary } = movie;
            return (
              <div className="movie-container">
                <div className="movie-image">
                  <img src={imageURL} alt={title} className="movie-card-img" />
                  <h2 className="movie-title">{title}</h2>
                </div>
                <p className="movie-summary">{summary}</p>
                <div className="btns">
                  <button className="star">Star</button>
                  <button className="wishlist">Add to Wishlist</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
