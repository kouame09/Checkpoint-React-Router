import React, { useState } from 'react';

const FilmCard = ({ title, description, posterURL, category, trailerURL }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleToggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  return (
    <div className="film-card" onClick={handleToggleTrailer}>
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Catégorie: {category}</p>
      {showTrailer && (
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
      )}
    </div>
  );
};

export default FilmCard;
