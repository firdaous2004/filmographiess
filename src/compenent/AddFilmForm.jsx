
import React,{ useState } from "react";

const AddFilmForm = ({ onAddFilm }) => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    releaseYear: "",
    genre: "Drama",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.director && formData.releaseYear && formData.rating) {
      onAddFilm(formData);
      setFormData({
        title: "",
        director: "",
        releaseYear: "",
        genre: "Drama",
        rating: "",
      });
    } else {
      alert("Tous les champs doivent être remplis.");
    }
  };

  return (

    <div>
      <h2>Ajouter un Film</h2>


    <form onSubmit={handleSubmit}>

      <input type="text" name="title" placeholder="Titre" value={formData.title} onChange={handleChange} />
      <input type="text" name="director" placeholder="Réalisateur" value={formData.director} onChange={handleChange} />
      <input type="number" name="releaseYear" placeholder="Année" value={formData.releaseYear} onChange={handleChange} />
      <select name="genre" value={formData.genre} onChange={handleChange}>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Fantasy">Fantasy</option>
      </select>
      <input type="number" name="rating" placeholder="Note" value={formData.rating} onChange={handleChange} min="0" max="10" />
      <button type="submit">Ajouter</button>
    </form>
    </div>
  );
};

export default AddFilmForm;
