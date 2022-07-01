import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.scss';

function Finished() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [recipesFilted, setRecipesFilter] = useState(doneRecipes);
  useEffect(() => {
    setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
    setRecipesFilter(JSON.parse(localStorage.getItem('doneRecipes')));
  }, []);

  return (
    <>
      <Header title="Finished" />
      <main id="done-recipes-grid">
        {recipesFilted &&
          recipesFilted.map((recipe, index) => (
            <div key={index} className="done-recipes-card">
              <Link to={`/${recipe.type}s/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.name} />
              </Link>
              <Link to={`/${recipe.type}s/${recipe.id}`}>
                <h3>{recipe.name}</h3>
              </Link>
              <p>{recipe.category}</p>
            </div>
          ))}
      </main>
      <Footer />
    </>
  );
}

export default Finished;
