import React from "react";
import SearchBar from "./SearchBar";

const Header = ({ onSearch }) => {
  return (
    <header>
      <div className="lg"><h1>Filmographie</h1></div>
      <SearchBar onSearch={onSearch} />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        
      </nav>

    </header>
  );
};

export default Header;