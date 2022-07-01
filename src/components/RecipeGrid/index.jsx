import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RecipesContext } from '../../context/RecipesContext';
import './styles.scss';

function RecipeGrid() {
  const { searchResults, filteredResults } = useContext(RecipesContext);
  const location = useLocation();
  let filteredRecipes = [];
  const maxRecipes = 24;
  if (filteredResults && filteredResults.length > 0) {
    filteredRecipes = filteredResults.slice(0, maxRecipes);
  } else if (searchResults.length > 0) {
    filteredRecipes = searchResults.slice(0, maxRecipes);
  }

  return (
    <main id="recipe-grid">
      {filteredRecipes.length > 0 &&
        filteredRecipes.map((recipe, index) => (
          <Link
            key={index}
            to={
              location.pathname.includes('nationalities')
                ? `/foods/${recipe.idMeal}`
                : `${location.pathname}/${recipe.idMeal || recipe.idDrink}`
            }
          >
            <img
              src={recipe.strMealThumb || recipe.strDrinkThumb}
              alt={recipe.strMeal || recipe.strDrink}
            />
            <h3>{recipe.strMeal || recipe.strDrink}</h3>
          </Link>
        ))}
    </main>
  );
}

export default RecipeGrid;
