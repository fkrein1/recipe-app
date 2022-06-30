import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles.scss';

function Profile() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('user');
    setUser(JSON.parse(email));
  }, []);

  const navigate = useNavigate();

  const clearStorage = () => {
    localStorage.clear();
    navigate('/');
  };

  console.log(user);

  return (
    <div id="profile-page">
      <Header title="Profile" />

      <form>
        <div>
          {user && user.email}
        </div>

        <button
          type="button"
          onClick={ () => navigate('/done-recipes') }
        >
          Done Recipes
        </button>

        <button
          type="button"
          onClick={ () => navigate('/favorite-recipes') }
        >
          Favorite Recipes
        </button>

        <button
          type="button"
          onClick={ clearStorage }
        >
          Logout
        </button>

      </form>
      <Footer />
    </div>
  );
}

export default Profile;
