import React, { useState } from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import SortButtons from "./SortButtons";
import MovieDetails from "./MovieDetails";
import Pagination from "./Pagination";
import AddFilmForm from "./AddFilmForm";
import Footer from "./Footer";
import './App.css';

const WholePage = () => {
    const [movies, setMovies] = useState([ 
        { 
          "title": "Inception", 
          "director": "Christopher Nolan", 
          "releaseYear": 2010, 
          "genre": "Science Fiction", 
          "rating": 8.8 
        }, 
        { 
          "title": "The Godfather", 
          "director": "Francis Ford Coppola", 
          "releaseYear": 1972, 
          "genre": "Crime", 
          "rating": 9.2 
        }, 
        { 
          "title": "The Dark Knight", 
          "director": "Christopher Nolan", 
          "releaseYear": 2008, 
          "genre": "Action", 
          "rating": 9.0 
        }, 
        { 
          "title": "Pulp Fiction", 
          "director": "Quentin Tarantino", 
          "releaseYear": 1994, 
          "genre": "Crime", 
          "rating": 8.9 
        }, 
        { 
          "title": "Schindler's List", 
          "director": "Steven Spielberg", 
          "releaseYear": 1993, 
          "genre": "Historical Drama", 
          "rating": 9.0 
        }, 
        { 
          "title": "The Shawshank Redemption", "director": "Frank Darabont", 
          "releaseYear": 1994, 
          "genre": "Drama", 
          "rating": 9.3 
        }, 
        { 
          "title": "Forrest Gump", 
          "director": "Robert Zemeckis", 
          "releaseYear": 1994, 
          "genre": "Comedy-Drama", 
          "rating": 8.8 
        }, 
        { 
          "title": "The Matrix", 
          "director": "Lana Wachowski, Lilly Wachowski", 
          "releaseYear": 1999, 
          "genre": "Science Fiction", 
          "rating": 8.7 
        }, 
        { 
          "title": "Fight Club", 
          "director": "David Fincher", 
          "releaseYear": 1999, 
          "genre": "Drama", 
          "rating": 8.8 
        }, 
        { 
          "title": "The Lord of the Rings: The Return of the King", 
          "director": "Peter Jackson", 
          "releaseYear": 2003, 
          "genre": "Fantasy", 
          "rating": 9.0 
        } 
      ] );
    
      const [favorites, setFavorites] = useState([]);
      const [selectedMovie, setSelectedMovie] = useState(null);
      const [currentPage, setCurrentPage] = useState(1);
      const [searchTerm, setSearchTerm] = useState("");
    
      const handleSearch = (term) => {
        setSearchTerm(term);
        setCurrentPage(1);
      };
      
      
    
      const handleSortByRating = () => {
        setMovies([...movies].sort((a, b) => b.rating - a.rating));
      };
    
      const handleSortByYear = () => {
        setMovies([...movies].sort((a, b) => b.releaseYear - a.releaseYear));
      };
    
      const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
      };
    
      const handleAddFilm = (newFilm) => {
        setMovies([...movies, newFilm]);
      };
    
      const handleToggleFavorite = (movie) => {
        const updatedFavorites = favorites.includes(movie)
          ? favorites.filter(f => f !== movie)
          : [...favorites, movie];
        setFavorites(updatedFavorites);
      };
    
      const moviesPerPage = 5;
      const totalPages = Math.ceil(movies.length / moviesPerPage);
      const currentMovies = movies.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage);

  return (
    <div className="container">
      
      <Header/>
      <SortButtons onSortByRating={handleSortByRating} onSortByYear={handleSortByYear} />
      <MovieList movies={currentMovies} onSelectMovie={handleSelectMovie} />
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
     {/* <Favorites favorites={favorites} />*/}
      <AddFilmForm onAddFilm={handleAddFilm} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      
      <Footer/>
    </div>
  );
};

export default WholePage;
