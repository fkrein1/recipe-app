import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useLocation } from 'react-router-dom';
import './styles.scss';

function Recomendation() {
  const [recomendations, setRecomendations] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getRecomendation = async () => {
      const sugestions = 6;
      if (location.pathname.includes('foods')) {
        const apiData = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
        );
        const drinkRecipe = await apiData.json();
        setRecomendations(drinkRecipe.drinks.slice(0, sugestions));
      } else {
        const apiData = await fetch(
          'https://www.themealdb.com/api/json/v1/1/search.php?s=',
        );
        const foodRecipe = await apiData.json();
        setRecomendations(foodRecipe.meals.slice(0, sugestions));
      }
    };
    getRecomendation();
  }, []);

  return (
    <div id="recomendation">
      <h3>Recomendation</h3>
      <Carousel horizontal>
        {recomendations.map((recomendation) => (
          <div key={recomendation.idDrink || recomendation.idMeal}>
            <img
              src={recomendation.strDrinkThumb || recomendation.strMealThumb}
              alt={recomendation.strDrink || recomendation.strMeal}
            />
            <p className="legend">
              {recomendation.strDrink || recomendation.strMeal}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Recomendation;
