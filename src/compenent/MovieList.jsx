 import React from "react";

const MovieList = ({ movies, onSelectMovie }) => {
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.title} onClick={() => onSelectMovie(movie)}>
            <h3> Title : {movie.title}</h3>
            <p>Annee : {movie.releaseYear}</p>
            <p> Genre : {movie.genre}</p>
            <p>Note: {movie.rating}</p>
            <button>Ajouter </button>
          </div>
        ))}
     
      </div>
    );
  };
  
  export default MovieList;
  