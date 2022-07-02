import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../../context/RecipesContext';
import SearchIngredient from '../SearchIngredient';
import { fetchDrinkIngredients } from '../../services/drinkApi';
import { fetchFoodIngredients } from '../../services/foodApi';
import './styles.scss';

function IngredientsGrid() {
  const [ingredients, setIngredients] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const { setFilter } = useContext(RecipesContext);

  useEffect(() => {
    async function fetchIngredient() {
      const [foodResponse, drinkResponse] = await Promise.all([
        fetchFoodIngredients(),
        fetchDrinkIngredients(),
      ]);

      const foodIngredients = foodResponse.meals.map((ingredient) => [
        ingredient.strIngredient,
        'food',
      ]);
      const drinkIngredients = drinkResponse.drinks.map((ingredient) => [
        ingredient.strIngredient1,
        'drink]',
      ]);
      setIngredients([...foodIngredients, ...drinkIngredients]);
    }
    fetchIngredient();
  }, []);

  const addFilter = (ingredient) => {
    setFilter(ingredient);
  };

  return (
    <>
      <SearchIngredient
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div id="ingredient-grid">
        {ingredients
          .sort()
          .filter((ingredient) =>
            ingredient[0]
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase()),
          )
          .map((ingredient, index) =>
            ingredient[1] === 'food' ? (
              <Link
                key={index}
                onClick={() => addFilter(ingredient[0])}
                to="/foods"
              >
                <img
                  src={`https://www.themealdb.com/images/ingredients/${ingredient[0]}-Small.png`}
                  alt={ingredient[0]}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src =
                      'https://www.themealdb.com/images/ingredients/ancho%20chillies-Small.png';
                  }}
                />
                <h3>{ingredient[0]}</h3>
              </Link>
            ) : (
              <Link
                key={index}
                onClick={() => addFilter(ingredient[0])}
                to="/drinks"
              >
                <img
                  src={`https://www.thecocktaildb.com/images/ingredients/${ingredient[0]}-Small.png`}
                  alt={ingredient[0]}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src =
                      'https://www.themealdb.com/images/ingredients/bitters-Small.png';
                  }}
                />
                <h3>{ingredient[0]}</h3>
              </Link>
            ),
          )}
      </div>
    </>
  );
}

export default IngredientsGrid;
