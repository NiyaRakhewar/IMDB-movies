import React, { useState, useContext } from "react";
import "./MovieForm.css";
import { MoviesContext } from "../../Context/MoviesContext";
export const MovieForm = ({ show, setShow }) => {
  const { dispatch } = useContext(MoviesContext);

  const [newMovie, setNewMovie] = useState({
    title: "",
    summary: "",
    year: "",
    cast: [],
    genre: [],
    rating: "",
    director: "",
    writer: "",
    imageURL: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleAddMovie = () => {
    dispatch({ type: "ADD_MOVIE", payload: newMovie });
    setNewMovie({
      title: "",
      summary: "",
      year: "",
      cast: [],
      genre: [],
      rating: "",
      director: "",
      writer: "",
      imageURL: "",
    });

    setShow(false);
  };

  return (
    <div className=".new-movie-form">
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="imageURL"
          value={newMovie.imageURL}
          onChange={handleInputChange}
          placeholder="image link"
        />
      </label>
      <label>
        rating:
        <input
          type="text"
          name="rating"
          value={newMovie.rating}
          onChange={handleInputChange}
          placeholder="rating"
        />
      </label>
      <label>
        Director:
        <input
          type="text"
          name="director"
          value={newMovie.director}
          onChange={handleInputChange}
          placeholder="director"
        />
      </label>
      <label>
        Year:
        <input
          type="text"
          name="year"
          value={newMovie.year}
          onChange={handleInputChange}
          placeholder="year"
        />
      </label>
      <textarea
        name="summary"
        value={newMovie.summary}
        onChange={handleInputChange}
        placeholder="Summary"
      />

      {/* Other input fields for cast, genre, rating, director, writer, and imageURL */}
      <button onClick={handleAddMovie}>Save</button>
    </div>
  );
};
