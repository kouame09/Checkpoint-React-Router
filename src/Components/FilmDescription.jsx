import React from 'react';
import { Link } from 'react-router-dom';

const FilmDescription = ({ title, description, trailerURL }) => {
  return (
    <div className="film-description">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="trailer">
        <iframe
          title={title}
          width="560"
          height="315"
          src={trailerURL}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Retour à la liste des films</Link>
    </div>
  );
};

export default FilmDescription;
