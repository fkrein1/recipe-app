import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RecipesContext } from '../../context/RecipesContext';
import { drinkApi, foodApi } from '../../services/foodAndDrinkApi';
import './styles.scss';

function IngredientsGrid() {
  const [ingredients, setIngredients] = useState([]);
  const location = useLocation();
  const { setFilteredResults } = useContext(RecipesContext);

  useEffect(() => {
    async function fetchIngredient() {
      const [foodApi, drinkApi] = await Promise.all([
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list'),
        fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'),
      ])
      const [foodResponse, drinkResponse] = await Promise.all([
        foodApi.json(),
        drinkApi.json()
      ])
      const foodIngredients = foodResponse.meals.map((ingredient) => [ingredient.strIngredient, 'food'])
      const drinkIngredients = drinkResponse.drinks.map((ingredient) => [ingredient.strIngredient1, 'drink]'])
      setIngredients([...foodIngredients, ...drinkIngredients])
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
      {ingredients.length > 0 && ingredients
        .sort()
        .map((ingredient, index) => (
          ingredient[1] === 'food' && (
            <Link
            className="ingredient-card"
            key={ index }
            // onClick={ () => teste(ingredient.strIngredient || ingredient.strIngredient1) }
            to={ location.pathname.includes('/foods')}
          >
            <img
              src={ `https://www.themealdb.com/images/ingredients/${ingredient[0]}-Small.png` }
              alt={ ingredient[0] }
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="https://www.themealdb.com/images/ingredients/ancho%20chillies-Small.png";
              }}
            />
            <h3
            >
              {ingredient[0]}
            </h3>
          </Link>
          )

      ))}
    </div>
  );
}

export default IngredientsGrid;
