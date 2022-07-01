import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Compass,
  Martini,
  CookingPot,
  User,
  EggCrack,
  Checks,
  Heart,
} from 'phosphor-react';
import './styles.scss';
import { RecipesContext } from '../../context/RecipesContext';

function Footer() {
  const { setFilter } = useContext(RecipesContext);
  const navigate = useNavigate();

  function handleFoodClick() {
    setFilter('');
    navigate('/foods');
  }

  function handleDrinkClick() {
    setFilter('');
    navigate('/drinks');
  }

  return (
    <footer id="footer">
      <button type="button" onClick={handleFoodClick}>
        <CookingPot size={32} />
        <p>Food</p>
      </button>
      <button type="button" onClick={handleDrinkClick}>
        <Martini size={32} />
        <p>Drink</p>
      </button>
      <button type="button" onClick={() => navigate('/ingredients')}>
        <EggCrack size={32} />
        <p>Ingredient</p>
      </button>

      <button type="button" onClick={() => navigate('/favorite')}>
        <Heart size={32} />
        <p>Favorite</p>
      </button>

      <button type="button" onClick={() => navigate('/finished')}>
        <Checks size={32} />
        <p>Finished</p>
      </button>
    </footer>
  );
}

export default Footer;
