import React, { useState, useEffect } from 'react';
import './App.css';
import EnginList from './Components/engin/EnginList';
import EnginFilter from './Components/engin/EnginFilter';
import EnginAdd from './Components/engin/EnginAdd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnginDescription from './Components/engin/EnginDescription';
import NotFound from './Components/engin/NotFound';
import NavBar from './Components/NavBar';

function App() {
  const initialEngins = [
    // Liste de engins initiale...
  ];

  const [engins, setEngins] = useState(initialEngins);
  const [filteredEngins, setFilteredEngins] = useState(initialEngins);

  useEffect(() => {
    setFilteredEngins(engins);
  }, [engins]);

  const addEngin = (newEngin) => {
    setEngins([...engins, newEngin]);
    setFilteredEngins([...engins, newEngin]);
  };

  const filterByTitle = (title) => {
    const filtered = engins.filter((engin) =>
      engin.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredEngins(filtered);
  };

  const filterByCategory = (category) => {
    if (category === '') {
      setFilteredEngins(engins);
    } else {
      const filtered = engins.filter(
        (engin) => engin.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredEngins(filtered);
    }
  };

  const resetFilters = () => {
    setFilteredEngins(engins);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <h1>Gestion de Packing</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <EnginAdd onAddengin={addEngin} />
                <EnginFilter
                  onTitleFilter={filterByTitle}
                  onCategoryFilter={filterByCategory}
                  onResetFilters={resetFilters}
                />
                <EnginList engins={filteredEngins} />
              </>
            }
          />
          <Route
            path="/engin/:id"
            element={<EnginDescription engins={engins} />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
