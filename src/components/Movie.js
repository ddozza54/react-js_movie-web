import React from "react";
import PropTypes from "prop-types";

export default function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <div>
        <img src={coverImg} alt={title} />
        <h1>{title}</h1>
        <p>{summary}</p>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.prototypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
