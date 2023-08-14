import React, { useContext } from "react";
import { MoviesContext } from "../../Context/MoviesContext";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
  const { state } = useContext(MoviesContext);
  const navigate = useNavigate();
  return (
    <div>
      {state?.wishlist?.map((el) => {
        return (
          <div className="movie-card-container">
            <div className="movie-image">
              <img
                src={el?.imageURL}
                alt={el?.title}
                className="movie-card-img"
              />
              <h2
                className="movie-title"
                onClick={() => navigate(`/${el?.id}`)}
              >
                {el?.title}
              </h2>
            </div>
            <p className="movie-summary">{el?.summary}</p>
            <div className="btns">
              <button className="star">Star</button>
              <button className="wishlist">Added to Wishlist</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
