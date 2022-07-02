import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchFoodById } from '../../services/foodApi';
import ShareButton from '../ShareBtn';
import FavoriteBtn from '../FavoriteBtn';
import './styles.scss';
import BackArrow from '../BackArrow';

function FoodDetail({ id }) {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getFood = async () => {
      const foodDetail = await fetchFoodById(id)
      setFoods(foodDetail);
    };
    getFood();
  }, [id]);

  function filterdIngredients() {
    if (foods[0]) {
      return Object.entries(foods[0])
        .filter((attr) => attr[0].includes('trIngredient') && attr[1] !== null)
        .filter((attr2) => attr2[1] !== '')
        .map((ingredient) => ingredient[1]);
    }
  }

  function filterdMesures() {
    if (foods[0]) {
      return Object.entries(foods[0])
        .filter((attr) => attr[0].includes('strMeasure') && attr[1] !== null)
        .filter((attr2) => attr2[1] !== '')
        .map((mesure) => mesure[1]);
    }
  }

  function isRecipeDone() {
    const doneRecipes = localStorage.getItem('doneRecipes');
    if (doneRecipes && foods[0]) {
      return JSON.parse(doneRecipes)
        .map((recipe) => recipe.id)
        .includes(foods[0].idMeal);
    }
  }

  function isRecipeInProgress() {
    const inProgressRecipes = localStorage.getItem('inProgressRecipes');
    if (inProgressRecipes && foods[0]) {
      return Object.keys(JSON.parse(inProgressRecipes)?.meals).includes(
        foods[0].idMeal,
      );
    }
  }

  const ingredients = filterdIngredients();
  const mesures = filterdMesures();
  const recipeDone = isRecipeDone();
  const recipeInProgress = isRecipeInProgress();

  return (
    <div id="food-detail-page">
      {foods.map((food) => (
        <div key={food.idMeal}>
          <div id="image-container">
            <img
              className="main-image"
              src={food.strMealThumb}
              alt={food.strMeal}
            />
            {foods.length > 0 && <FavoriteBtn recipe={foods[0]} />}
            <ShareButton />
            <BackArrow />
          </div>

          <h1>{food.strMeal}</h1>
          <h3>{food.strCategory}</h3>
          <div>
            {ingredients.map((ingredient, index) => (
              <p key={index}>
                {`${index + 1} - ${ingredient} ${
                  mesures[index] ? mesures[index] : ''
                }`}
              </p>
            ))}
          </div>
          <h3>Recipe</h3>
          <p>{food.strInstructions}</p>
          <iframe
            height="290"
            src={`https://www.youtube.com/embed/${food.strYoutube
              .split('?v=')
              .pop()}`}
            title="YouTube video player"
            frameBorder="0"
          />
        </div>
      ))}

      {!recipeDone && (
        <button
          id="start-btn"
          type="button"
          onClick={() => navigate(`/foods/${id}/in-progress`)}
        >
          {recipeInProgress && 'Continue Recipe'}
          {!recipeInProgress && 'Start Recipe'}
        </button>
      )}
    </div>
  );
}

export default FoodDetail;
