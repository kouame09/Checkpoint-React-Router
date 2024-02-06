import React from 'react';

const EnginFilter = ({ onTitleFilter, onCategoryFilter }) => {
  const handleLabelChange = (event) => {
    const label = event.target.value;
    onTitleFilter(label);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    onCategoryFilter(category);
  };

  return (
    <div className="engin-filter">
      <input type="text" placeholder="Filtrer par libellé" onChange={handleLabelChange} />
      <select onChange={handleCategoryChange}>
        <option value="">Afficher tout</option>
        <option value="Trottinette">Trottinette</option>
        <option value="Vélo">Vélo</option>
        <option value="Moto">Moto</option>
        <option value="Voiture">Voiture</option>
      </select>
    </div>
  );
};

export default EnginFilter;
