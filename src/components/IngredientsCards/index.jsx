import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RecipesContext } from '../../context/RecipesContext';
import { drinkApi, foodApi } from '../../services/foodAndDrinkApi';
import './styles.scss';

function IngredientsCards({ param }) {
  const [ingredients, setIngredients] = useState([]);
  const location = useLocation();
  const { setFilteredResults } = useContext(RecipesContext);
  const maxIngredient = 12;
  useEffect(() => {
    async function fetchIngredient() {
      const response = await fetch(`https://www.${param}.com/api/json/v1/1/list.php?i=list`);
      const data = await response.json();

      if (param === 'themealdb') {
        setIngredients(await data.meals.slice(0, maxIngredient));
      } else {
        setIngredients(await data.drinks.slice(0, maxIngredient));
      }
    }
    fetchIngredient();
  }, []);

  const teste = async (ingredient) => {
    if (location.pathname.includes('foods')) {
      setFilteredResults(await foodApi('i', ingredient));
    } else {
      setFilteredResults(await drinkApi('i', ingredient));
    }
  };

  return (
    <div id="ingredient-grid">
      {ingredients.length > 0 && ingredients.map((ingredient, index) => (
        <Link
          className="ingredient-card"
          key={ index }
          onClick={ () => teste(ingredient.strIngredient || ingredient.strIngredient1) }
          to={ location.pathname.includes('foods') ? '/foods' : '/drinks' }
        >
          <img
            src={ `https://www.${param}.com/images/ingredients/${ingredient.strIngredient || ingredient.strIngredient1}-Small.png` }
            alt={ ingredient.strIngredient || ingredient.strIngredient1 }
          />
          <h3
          >
            {ingredient.strIngredient || ingredient.strIngredient1}
          </h3>
        </Link>
      ))}
    </div>
  );
}

export default IngredientsCards;
