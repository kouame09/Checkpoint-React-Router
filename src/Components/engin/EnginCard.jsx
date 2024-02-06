import React from 'react';
import { Link } from 'react-router-dom';

const EnginCard = ({ id, label, detail, photoURL, category }) => {
  return (
    <Link to={`/engin/${id}`}>
      <div className="engin-card">
        <img src={photoURL} alt={label} />
        <h2 style={{color : "#e50914"}}>{label}</h2>
        <p>Catégorie: {category}</p>
      </div>
    </Link>
  );
};

export default EnginCard;
