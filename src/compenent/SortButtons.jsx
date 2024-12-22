 import React from "react";
const SortButtons = ({ onSortByRating, onSortByYear }) => {
    return (
      <div className="trie">
        <button onClick={onSortByRating}>Trier par note</button>
        <button onClick={onSortByYear}>Trier par année</button>
      </div>
    );
  };
  
  export default SortButtons;
  