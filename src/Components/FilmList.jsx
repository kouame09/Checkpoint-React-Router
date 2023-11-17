import React from 'react';
import FilmCard from './FilmCard';

const FilmList = ({ films }) => {
  return (
    <div className="film-list">
      {films.map((film, index) => (
        <FilmCard key={index} {...film} />
      ))}
    </div>
  );
};

export default FilmList;
