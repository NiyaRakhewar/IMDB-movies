import React from "react";
import { Search } from "../Search/Search";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar-outer-container">
      <div className="navbar-inner-container">
        <h2 className="logo">
          <b>IMDB</b>
        </h2>
        <Search className="search" />
        <div className="navbar-inner-container-right">
          <p>Movies</p>
          <p>Watch List</p>
          <p>Starred Movies</p>
        </div>
      </div>
    </div>
  );
};
