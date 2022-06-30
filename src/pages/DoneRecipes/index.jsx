import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Export } from 'phosphor-react';
import './styles.scss';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [recipesFilted, setRecipesFilter] = useState(doneRecipes);
  const [copySucess, setCopySucess] = useState(false);
  useEffect(() => {
    setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
    setRecipesFilter(JSON.parse(localStorage.getItem('doneRecipes')));
  }, []);

  function copiarTexto(type, id) {
    const timeout = 900;
    navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`);
    setCopySucess(true);
    setTimeout(() => {
      setCopySucess(false);
    }, timeout);
  }

  return (
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
            {recipe.alcoholicOrNot.length !== 0 && (
              <p>{recipe.alcoholicOrNot}</p>
            )}
            <p>
              {recipe.nationality ? `${recipe.nationality} - ` : ''}
              {recipe.category}
            </p>
            <p>{`${recipe.doneDate}`}</p>
            <button
              id="share-btn"
              type="button"
              onClick={() => copiarTexto(recipe.type, recipe.id)}
            >
              <Export size={25} color="#7A7AC7" alt="share icon" />
            </button>
            {copySucess && <p>Link copied!</p>}
            {recipe.tags.length > 0 &&
              recipe.tags.map((tag, i) => <p key={i}>{recipe.tags[i]}</p>)}
          </div>
        ))}
    </main>
  );
}

export default DoneRecipes;
