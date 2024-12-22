import React from "react";

const Favorites = ({ favorites }) => {
    return (
      <div className="favorites">
        <h2>Mes films favoris</h2>
        {favorites.length === 0 ? (
          <p>Aucun film favori</p>
        ) : (
          <div className="movie-list">
            {favorites.map((movie) => (
              <div className="movie-card" key={movie.title}>
                <h3>{movie.title}</h3>
                <p>{movie.releaseYear}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Favorites;
  