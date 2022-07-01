import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RecipesContext } from '../../context/RecipesContext';
import './styles.scss';

function RecipeGrid() {
  const { searchResults } = useContext(RecipesContext);
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <main id="recipe-grid">
      {searchResults !== null &&
        searchResults.map((recipe, index) => (
          <Link
            key={index}
            to={
              pathname === '/'
                ? `/foods/${recipe.idMeal}`
                : `${pathname}/${recipe.idMeal || recipe.idDrink}`
            }
          >
            <img
              src={recipe.strMealThumb || recipe.strDrinkThumb}
              alt={recipe.strMeal || recipe.strDrink}
            />
            <h3>{recipe.strMeal || recipe.strDrink}</h3>
            <p>{recipe.strCategory}</p>
          </Link>
        ))}
    </main>
  );
}

export default RecipeGrid;
