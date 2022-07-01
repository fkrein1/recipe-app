import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Martini, CookingPot, User, EggCrack, Checks, Heart } from 'phosphor-react';
import './styles.scss';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer id="footer">
      <button type="button" onClick={() => navigate('/foods')}>
        <CookingPot size={32} />
        <p>Food</p>
      </button>
      <button type="button" onClick={() => navigate('/drinks')}>
        <Martini size={32} />
        <p>Drink</p>
      </button>
      <button type="button" onClick={() => navigate('/Ingredients')}>
        <EggCrack size={32} />
        <p>Ingredient</p>
      </button>

      <button type="button" onClick={() => navigate('/favorite-recipes')}>
        <Heart size={32} />
        <p>Favorite</p>
      </button>

      <button type="button" onClick={() => navigate('/done-recipes')}>
        <Checks size={32} />
        <p>Done</p>
      </button>

    </footer>
  );
}

export default Footer;
