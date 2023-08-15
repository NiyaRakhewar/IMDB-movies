import React, { useContext, useState } from "react";
import "./home.css";
import { MoviesContext } from "../../Context/MoviesContext";
import { useNavigate } from "react-router-dom";
import { MovieForm } from "../MovieForm/MovieForm";

export const Home = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(MoviesContext);

  const [show, setShow] = useState(false);
  const [currId, setCurrId] = useState([]);

  const [genreFilter, setGenreFilter] = useState("All Genre");
  const [yearFilter, setYearFilter] = useState("Release Year");
  const [ratingFilter, setRatingFilter] = useState("All Rating");

  const allGenres = [
    ...new Set([...state.moviesData].flatMap((movie) => movie.genre)),
  ];

  const allYear = [...new Set(state.moviesData.flatMap((movie) => movie.year))];

  const allRating = [
    ...new Set([...state.moviesData].flatMap((movie) => movie.rating)),
  ];

  const changeHandlerGenre = (value) => {
    setGenreFilter(value);
  };

  const filteredGenre =
    genreFilter === "All Genre"
      ? state.moviesData
      : state.moviesData.filter(({ genre }) => genre.includes(genreFilter));

  const changeHandlerYear = (value) => {
    setYearFilter(value);
  };

  const filteredYear =
    yearFilter === "Release Year"
      ? filteredGenre
      : filteredGenre.filter(({ year }) => Number(year) >= Number(yearFilter));

  const changeHandlerRating = (value) => {
    setRatingFilter(value);
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

  const clickHandlerWishlist = (movie) => {
    setCurrId([...currId, movie.id]);
    dispatch({ type: "ADD_TO_WISHLIST", payload: movie });
  };

  const clickHandlerGoToWishlist = (movie) => {
    navigate("/wishlist");
  };

  return (
    <div className="home-outer-container">
      <div className="home-inner-container">
        <div className="home-filter-container">
          <h2>Movies</h2>
          {/* Genre Filter */}
          <select onChange={(e) => changeHandlerGenre(e.target.value)}>
            <option>All Genre</option>
            {allGenres?.map((genre) => (
              <option key={genre}>{genre}</option>
            ))}
          </select>
          {/* Year Filter */}
          <select onChange={(e) => changeHandlerYear(e.target.value)}>
            <option>Release Year</option>
            {allYear?.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
          {/* Rating Filter */}
          <select onChange={(e) => changeHandlerRating(e.target.value)}>
            <option>All Rating</option>
            {allRating?.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
          <div>
            <button onClick={clickHandler}>Add Movie</button>
            {/* Modal */}
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
          {/* Movie Cards */}
          {filteredRating?.map((movie) => {
            const { imageURL, title, summary, id } = movie;
            return (
              <div className="movie-card-container" key={id}>
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
                  {/* Wishlist Button */}

                  {currId.includes(movie.id) ? (
                    <button
                      className={
                        currId.includes(movie.id)
                          ? "wishlist added"
                          : "wishlist"
                      }
                      onClick={() => clickHandlerGoToWishlist(movie)}
                    >
                      Go To Wishlist
                    </button>
                  ) : (
                    <button
                      className={
                        currId.includes(movie.id)
                          ? "wishlist added"
                          : "wishlist"
                      }
                      onClick={() => clickHandlerWishlist(movie)}
                    >
                      Add to Wishlist{" "}
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
