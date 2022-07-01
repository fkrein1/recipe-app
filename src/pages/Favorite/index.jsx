import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.scss';

function Favorite() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [recipesFilter, setRecipesFilter] = useState(favoriteRecipes);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
    setRecipesFilter(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, [reload]);

  return (
    <>
      <Header title="Favorites" />
      <main id="favorite-recipes-grid">
        {recipesFilter &&
          recipesFilter.map((recipe, index) => (
            <div key={index} className="favorite-recipes-card">
              <Link to={`/${recipe.type}s/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.name} />
              </Link>
              <Link to={`/${recipe.type}s/${recipe.id}`}>
                <h3>{recipe.name}</h3>
                <p>{recipe.category}</p>
              </Link>
            </div>
          ))}
      </main>
      <Footer />
    </>
  );
}

export default Favorite;
