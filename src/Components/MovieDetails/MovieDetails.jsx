import React, { useContext, useState } from "react";
import "./movieDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { MoviesContext } from "../../Context/MoviesContext";

export const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currId, setCurrId] = useState([]);

  const { state, dispatch } = useContext(MoviesContext);

  const movieDetail = [...state.moviesData]?.find(
    (movie) => movie.id === Number(id)
  );

  const clickHandlerWishlist = (movie) => {
    setCurrId([...currId, movie.id]);
    dispatch({ type: "ADD_TO_WISHLIST", payload: movie });
  };

  const clickHandlerGoToWishlist = () => {
    navigate("/wishlist");
  };

  const {
    title,
    year,
    genre,
    rating,
    imageURL,
    summary,
    writer,
    cast,
    director,
  } = movieDetail;

  return (
    <div className="moviedetail-outer-container">
      <div className="moviedetail-card-container">
        <img className="moviedetail-img" src={imageURL} alt="" />
        <div className="movie-detail-container">
          <h1 className="moviedetail-title">{title}</h1>
          <p className="moviedetail-summary">{summary}</p>
          <p>
            <b>Year: </b> {year}
          </p>
          <p>
            <b>Genre: </b> {genre.join(", ")}
          </p>
          <p>
            <b>Rating: </b> {rating}
          </p>
          <p>
            <b>Director: </b> {director}
          </p>
          <p>
            <b>Writer: </b> {writer}
          </p>
          <p>
            <b>Cast: </b>
            {cast.join(", ")}
          </p>
          <div className="detail-btns">
            <button className="detail-star">Star</button>
            {currId.includes(movieDetail.id) ? (
              <button
                className={
                  currId.includes(movieDetail.id)
                    ? "wishlist added"
                    : "wishlist"
                }
                onClick={() => clickHandlerGoToWishlist(movieDetail)}
              >
                Go To Wishlist
              </button>
            ) : (
              <button
                className="detail-wishlist"
                onClick={() => clickHandlerWishlist(movieDetail)}
              >
                Add to Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
