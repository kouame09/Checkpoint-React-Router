import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EnginDescription = ({ engins }) => {
  const { id } = useParams();

  // Vérifier si la liste des engins est définie et non vide
  if (!engins || engins.length === 0) {
    return (
      <div className="engin-description">
        <p>Aucun engin trouvé.</p>
        <Link to="/">Retour à la liste des engins</Link>
      </div>
    );
  }

  // Récupérer le engin correspondant à l'ID dans les paramètres d'URL
  const engin = engins.find((engin) => engin.id === id);

  // Vérifier si le engin correspondant à l'ID existe
  if (!engin) {
    return (
      <div className="engin-description">
        <p>Engin non trouvé.</p>
        <Link to="/">Retour à la liste des engins</Link>
      </div>
    );
  }

  // Afficher les détails du engin trouvé
  const { title, description, trailerURL } = engin;
  return (
    <div className="engin-description">
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
      <Link to="/">Retour à la liste des engins</Link>
    </div>
  );
};

export default EnginDescription;
