import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Martini, CookingPot, EggCrack, Checks, Heart } from 'phosphor-react';
import './styles.scss';
import { RecipesContext } from '../../context/RecipesContext';

function Footer() {
  const { setFilter } = useContext(RecipesContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleFoodClick() {
    setFilter('');
    navigate('/foods');
  }

  function handleDrinkClick() {
    setFilter('');
    navigate('/drinks');
  }

  const foods = pathname.includes('/foods') || pathname === '/';
  const drinks = pathname.includes('/drinks');
  const ingredients = pathname.includes('/ingredients');
  const favorite = pathname.includes('/favorite');
  const finished = pathname.includes('/finished');

  return (
    <footer id="footer">
      <button
        type="button"
        onClick={handleFoodClick}
        className={foods ? 'active' : ''}
      >
        <CookingPot
          size={28}
          weight={foods ? 'fill' : 'regular'}
          color={foods ? '#7A7AC7' : 'black'}
        />
        <p>Foods</p>
      </button>
      <button
        type="button"
        onClick={handleDrinkClick}
        className={drinks ? 'active' : ''}
      >
        <Martini
          size={28}
          weight={drinks ? 'fill' : 'regular'}
          color={drinks ? '#7A7AC7' : 'black'}
        />
        <p>Drinks</p>
      </button>
      <button
        type="button"
        onClick={() => navigate('/ingredients')}
        className={ingredients ? 'active' : ''}
      >
        <EggCrack
          size={28}
          weight={ingredients ? 'fill' : 'regular'}
          color={ingredients ? '#7A7AC7' : 'black'}
        />
        <p>Ingredients</p>
      </button>

      <button
        type="button"
        onClick={() => navigate('/favorite')}
        className={favorite ? 'active' : ''}
      >
        <Heart
          size={28}
          weight={favorite ? 'fill' : 'regular'}
          color={favorite ? '#7A7AC7' : 'black'}
        />
        <p>Favorite</p>
      </button>

      <button
        type="button"
        onClick={() => navigate('/finished')}
        className={finished ? 'active' : ''}
      >
        <Checks
          size={28}
          weight={finished ? 'fill' : 'regular'}
          color={finished ? '#7A7AC7' : 'black'}
        />
        <p>Finished</p>
      </button>
    </footer>
  );
}

export default Footer;
