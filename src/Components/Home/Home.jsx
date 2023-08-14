import React, { useContext, useState } from "react";
import "./home.css";
import { MoviesContext } from "../../Context/MoviesContext";
import { useNavigate } from "react-router-dom";
import { MovieForm } from "../MovieForm/MovieForm";
export const Home = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(MoviesContext);

  const [show, setShow] = useState(false);

  const [genreFilter, setGenreFilter] = useState("All Genre");

  const [yearFilter, setYearFilter] = useState("Release Year");

  const [ratingFilter, setRatingFilter] = useState("All Rating");

  const [isWishlisted, setIsWishlisted] = useState(false);

  // console.log("state", state);

  const allGenres = [
    ...new Set([...state.moviesData].flatMap((movie) => movie.genre)),
  ];

  const allYear = [...new Set(state.moviesData.flatMap((movie) => movie.year))];

  const allRating = [
    ...new Set([...state.moviesData].flatMap((movie) => movie.rating)),
  ];

  const changeHandlerGenre = (value) => {
    setGenreFilter(value);
    console.log("genre", value);

    // setData(filteredGenre);
  };
  const filteredGenre =
    genreFilter === "All Genre"
      ? state.moviesData
      : state.moviesData.filter(({ genre }) => genre.includes(genreFilter));

  console.log("genbeFilter", filteredGenre);

  const changeHandlerYear = (value) => {
    setYearFilter(value);

    // console.log("genre", filteredGenre);
  };

  const filteredYear =
    yearFilter === "Release Year"
      ? filteredGenre
      : filteredGenre.filter(({ year }) => Number(year) >= Number(yearFilter));

  console.log("yearFilter", filteredYear);

  const changeHandlerRating = (value) => {
    setRatingFilter(value);

    // console.log("genre", filteredGenre);
  };

  const filteredRating =
    ratingFilter === "All Rating"
      ? filteredYear
      : filteredYear.filter(
          ({ rating }) => Number(rating) === Number(ratingFilter)
        );

  const clickHandler = () => {
    setShow(!show);
  };

  const clickHandlerWishlist = (el) => {
    const wishlistItem = state.moviesData?.find((movie) => movie.id === el.id);

    dispatch({ type: "ADD-WISHLIST-ITEM", payload: wishlistItem });

    setIsWishlisted(true);
  };

  const clickHandlerRemoveWishlist = (el) => {
    const removeWishlist = state.wishlist?.filter(
      (movie) => movie.id !== el.id
    );
    dispatch({ type: "REMOVE-WISHLIST-ITEM", payload: removeWishlist });
    setIsWishlisted(false);
  };

  return (
    <div className="home-outer-container">
      <div className="home-inner-container">
        <div className="home-filter-container">
          <h2>Movies</h2>
          <select onChange={(e) => changeHandlerGenre(e.target.value)}>
            <option>All Genre </option>
            {allGenres?.map((genre) => (
              <option>{genre}</option>
            ))}
          </select>
          <select onChange={(e) => changeHandlerYear(e.target.value)}>
            <option>Release Year</option>
            {allYear?.map((year) => (
              <option>{year}</option>
            ))}
          </select>
          <select onChange={(e) => changeHandlerRating(e.target.value)}>
            <option>All Rating</option>
            {allRating?.map((year) => (
              <option>{year}</option>
            ))}
          </select>
          <div>
            <button onClick={clickHandler}>Add Movie</button>
            {show && (
              <div className="modal-container active">
                <div className="modal-content">
                  <span className="modal-close" onClick={clickHandler}>
                    &times;
                  </span>
                  <MovieForm show={show} setShow={() => setShow()} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="movies-list-container">
          {filteredRating?.map((movie) => {
            const { imageURL, title, summary, id } = movie;
            return (
              <div className="movie-card-container">
                <div className="movie-image">
                  <img src={imageURL} alt={title} className="movie-card-img" />
                  <h2
                    className="movie-title"
                    onClick={() => navigate(`/${id}`)}
                  >
                    {title}
                  </h2>
                </div>
                <p className="movie-summary">{summary}</p>
                <div className="btns">
                  <button className="star">Star</button>

                  {isWishlisted ? (
                    <button
                      className="wishlist"
                      onClick={(movie) => clickHandlerRemoveWishlist(movie)}
                    >
                      Remove Wishlist
                    </button>
                  ) : (
                    <button
                      className="wishlist"
                      onClick={(movie) => clickHandlerWishlist(movie)}
                    >
                      Add to Wishlist
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
