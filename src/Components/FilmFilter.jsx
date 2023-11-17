import React from 'react';

const FilmFilter = ({ onTitleFilter, onCategoryFilter }) => {
  const handleTitleChange = (event) => {
    const title = event.target.value;
    onTitleFilter(title);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    onCategoryFilter(category);
  };

  return (
    <div className="film-filter">
      <input type="text" placeholder="Filtrer par nom" onChange={handleTitleChange} />
      <select onChange={handleCategoryChange}>
        <option value="">Afficher tout</option>
        <option value="Action">Action</option>
        <option value="Comédie">Comédie</option>
        <option value="Documentaire">Documentaire</option>
        <option value="Aventure">Aventure</option>
      </select>
    </div>
  );
};

export default FilmFilter;
