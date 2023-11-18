import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FilmDescription = ({ films }) => {
  const { id } = useParams();

  // Vérifier si la liste des films est définie et non vide
  if (!films || films.length === 0) {
    return (
      <div className="film-description">
        <p>Aucun film trouvé.</p>
        <Link to="/">Retour à la liste des films</Link>
      </div>
    );
  }

  // Récupérer le film correspondant à l'ID dans les paramètres d'URL
  const film = films.find((film) => film.id === id);

  // Vérifier si le film correspondant à l'ID existe
  if (!film) {
    return (
      <div className="film-description">
        <p>Film non trouvé.</p>
        <Link to="/">Retour à la liste des films</Link>
      </div>
    );
  }

  const { title, description, trailerURL } = film;

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
