import React from "react";
const MovieDetails = ({ movie }) => {
    if (!movie) return null;
  
    return (
      <div className="movie-details">
        <h1>Film Details</h1>
        <h2>{movie.title}</h2>
        <p> Réalisateur: {movie.director}</p>
        <p>Année: {movie.releaseYear}</p>
        <p>Genre: {movie.genre}</p>
        <p>Note: {movie.rating}</p>
      </div>
    );
  };
  
  export default MovieDetails;
  