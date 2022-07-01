import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import FoodDetail from '../../components/FoodDetail';
import DrinkDetail from '../../components/DrinkDetail';
import Recomendation from '../../components/Recomendation';

function Recipe() {
  const { pathname } = useLocation();
  const isDrink = pathname.includes('drinks');
  const isFood = pathname.includes('foods');
  const { id } = useParams();

  return (
    <div>
      {isFood && (
        <>
          <FoodDetail id={id} />
          <Recomendation />
        </>
      )}
      {isDrink && (
        <>
          <DrinkDetail id={id} />
          <Recomendation />
        </>
      )}
    </div>
  );
}

export default Recipe;
