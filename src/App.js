import React, { useState, useEffect } from 'react';
import './App.css';
import FilmList from './Components/FilmList';
import FilmFilter from './Components/FilmFilter';
import FilmAdd from './Components/FilmAdd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FilmDescription from './Components/FilmDescription';
import NotFound from './Components/NotFound';

function App() {
  const initialFilms = [
    // Liste de films initiale...
  ];

  const [films, setFilms] = useState(initialFilms);
  const [filteredFilms, setFilteredFilms] = useState(initialFilms);

  useEffect(() => {
    setFilteredFilms(films);
  }, [films]);

  const addFilm = (newFilm) => {
    setFilms([...films, newFilm]);
    setFilteredFilms([...films, newFilm]);
  };

  const filterByTitle = (title) => {
    const filtered = films.filter((film) =>
      film.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredFilms(filtered);
  };

  const filterByCategory = (category) => {
    if (category === '') {
      setFilteredFilms(films);
    } else {
      const filtered = films.filter(
        (film) => film.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredFilms(filtered);
    }
  };

  const resetFilters = () => {
    setFilteredFilms(films);
  };

  return (
    <Router>
      <div className="App">
        <h1>IvoireFlix</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FilmAdd onAddFilm={addFilm} />
                <FilmFilter
                  onTitleFilter={filterByTitle}
                  onCategoryFilter={filterByCategory}
                  onResetFilters={resetFilters}
                />
                <FilmList films={filteredFilms} />
              </>
            }
          />
          <Route
            path="/film/:id"
            element={<FilmDescription films={films} />} // Envoyez les films au composant FilmDescription
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
