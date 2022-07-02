import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchDrinkByName } from '../../services/drinkApi';
import { useLocation } from 'react-router-dom';
import './styles.scss';
import { fetchFoodByName } from '../../services/foodApi';

function Recomendation() {
  const [recomendations, setRecomendations] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getRecomendation = async () => {
      const sugestions = 6;
      if (location.pathname.includes('drinks')) {
        const drinkRecipe = await fetchDrinkByName('')
        setRecomendations(drinkRecipe.slice(0, sugestions));
      } else {
        const foodRecipe = await fetchFoodByName('')
        setRecomendations(foodRecipe.slice(0, sugestions));
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
