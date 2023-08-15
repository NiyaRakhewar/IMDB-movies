import React, { useContext } from "react";
import { MoviesContext } from "../../Context/MoviesContext";
import { useNavigate } from "react-router-dom";
import "./wishlist.css";
export const Wishlist = () => {
  const { state, dispatch } = useContext(MoviesContext);
  const navigate = useNavigate();

  console.log("wish", state.wishlist);
  const clickHandlerRemoveWishlist = (el) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: el });
  };

  return (
    <div className="wishlist-outer-container">
      <div className="wishlist-inner-container">
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

                <button
                  className="wishlist"
                  onClick={() => clickHandlerRemoveWishlist(el)}
                >
                  Remove From Wishlist
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
