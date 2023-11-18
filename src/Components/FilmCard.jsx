import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = ({ id, title, description, posterURL, category }) => {
  return (
    <Link to={`/film/${id}`}>
      <div className="film-card">
        <img src={posterURL} alt={title} />
        <h2>{title}</h2>
        <p>Catégorie: {category}</p>
      </div>
    </Link>
  );
};

export default FilmCard;
