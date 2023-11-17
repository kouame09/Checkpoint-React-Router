import React, { useState } from 'react';

const FilmAdd = ({ onAddFilm }) => {
  const [newFilm, setNewFilm] = useState({
    title: '',
    description: '',
    posterURL: '',
    category: 'Action', // Catégorie par défaut
    trailerURL: '', // Lien de la bande-annonce
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewFilm({ ...newFilm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddFilm(newFilm);
    setNewFilm({
      title: '',
      description: '',
      posterURL: '',
      category: 'Action',
      trailerURL: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="film-add">
      <input
        type="text"
        placeholder="Titre"
        name="title"
        value={newFilm.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={newFilm.description}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image URL"
        name="posterURL"
        value={newFilm.posterURL}
        onChange={handleChange}
      />
      <select name="category" value={newFilm.category} onChange={handleChange}>
        <option value="Action">Action</option>
        <option value="Comédie">Comédie</option>
        <option value="Documentaire">Documentaire</option>
        <option value="Aventure">Aventure</option>
      </select>
      <input
        type="text"
        placeholder="Lien de la bande-annonce"
        name="trailerURL"
        value={newFilm.trailerURL}
        onChange={handleChange}
      />
      <button type="submit">Ajouter Film</button>
    </form>
  );
};

export default FilmAdd;
