import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Martini, CookingPot, User } from 'phosphor-react';
import './styles.scss';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer id="footer">
      <button
        type="button"
        onClick={() => navigate('/foods')}
      >
        <CookingPot size={32} />
        <p>Foods</p>
      </button>
      <button
        type="button"
        onClick={() => navigate('/drinks')}
      >
        <Martini size={32} />
        <p>Drinks</p>
      </button>
      <button
        type="button"
        onClick={() => navigate('/explore')}
      >
        <Compass size={32} />
        <p>Explore</p>
      </button>

      <button
        type="button"
        onClick={() => navigate('/profile')}
      >
        <User size={32} />
        <p>Profile</p>
      </button>
    </footer>
  );
}

export default Footer;
