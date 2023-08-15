import React from "react";
import { Search } from "../Search/Search";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-outer-container">
      <div className="navbar-inner-container">
        <h2 className="logo" onClick={() => navigate("/")}>
          <b>IMDB</b>
        </h2>
        <Search className="search" />
        <div className="navbar-inner-container-right">
          <p onClick={() => navigate("/")}>Movies</p>
          <p onClick={() => navigate("/wishlist")}>Wish List</p>
          <p>Starred Movies</p>
        </div>
      </div>
    </div>
  );
};
