import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShareButton from '../ShareBtn';
import FavoriteBtn from '../FavoriteBtn';
import './styles.scss';

function DrinkDetail({ id }) {
  const [drinks, setDrinks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getDrink = async () => {
      const apiData = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
      );
      const apiDrink = await apiData.json();
      setDrinks(apiDrink.drinks);
    };
    getDrink();
  }, [id]);

  function filterdIngredients() {
    if (drinks[0]) {
      return Object.entries(drinks[0])
        .filter((attr) => attr[0].includes('trIngredient') && attr[1] !== null)
        .filter((attr2) => attr2[1] !== '')
        .map((ingredient) => ingredient[1]);
    }
  }

  function filterdMesures() {
    if (drinks[0]) {
      return Object.entries(drinks[0])
        .filter((attr) => attr[0].includes('strMeasure') && attr[1] !== null)
        .filter((attr2) => attr2[1] !== '')
        .map((mesure) => mesure[1]);
    }
  }

  function isRecipeDone() {
    const doneRecipes = localStorage.getItem('doneRecipes');
    if (doneRecipes && drinks[0]) {
      return JSON.parse(doneRecipes)
        .map((recipe) => recipe.id)
        .includes(drinks[0].idDrink);
    }
  }

  function isRecipeInProgress() {
    const inProgressRecipes = localStorage.getItem('inProgressRecipes');
    if (inProgressRecipes && drinks[0]) {
      return Object.keys(JSON.parse(inProgressRecipes)?.cocktails).includes(
        drinks[0].idDrink,
      );
    }
  }

  const ingredients = filterdIngredients();
  const mesures = filterdMesures();
  const recipeDone = isRecipeDone();
  const recipeInProgress = isRecipeInProgress();

  return (
    <div id="drink-detail-page">
      {drinks.map((drink) => (
        <div key={drink.idDrink}>
          <div id="image-container">
            <img
              className="main-image"
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />
            {drinks.length > 0 && <FavoriteBtn recipe={drinks[0]} />}
            <ShareButton />
          </div>

          <h1>{drink.strDrink}</h1>
          <h3>{drink.strAlcoholic}</h3>
          <div>
            {ingredients.map((ingredient, index) => (
              <p
                key={ingredient}
              >
                {`${index + 1} - ${ingredient} ${
                  mesures[index] ? mesures[index] : ''
                }`}
              </p>
            ))}
          </div>
          <h3>Recipe</h3>
          <p>{drink.strInstructions}</p>
        </div>
      ))}
      {!recipeDone && (
        <button
          id="start-btn"
          type="button"
          onClick={() => navigate(`/drinks/${id}/in-progress`)}
        >
          {recipeInProgress && 'Continue Recipe'}
          {!recipeInProgress && 'Start Recipe'}
        </button>
      )}
    </div>
  );
}

export default DrinkDetail;
