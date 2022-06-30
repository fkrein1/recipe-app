import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UnfavoriteBtn from '../../components/UnfavoriteBtn';
import './styles.scss';

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [recipesFilter, setRecipesFilter] = useState(favoriteRecipes);
  const [copySucess, setCopySucess] = useState(false);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
    setRecipesFilter(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, [reload]);

  return (
    <>
      <Header title="Favorites" />
      <main>
        {recipesFilter &&
          recipesFilter.map((recipe, index) => (
            <div key={index}>
              <Link to={`/${recipe.type}s/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.name} />
              </Link>
              <Link to={`/${recipe.type}s/${recipe.id}`}>
                <p>{recipe.name}</p>
              </Link>
              {recipe.alcoholicOrNot.length !== 0 && (
                <p>
                  alcoholic or not:
                  {recipe.alcoholicOrNot}
                </p>
              )}
              <p>
                {recipe.nationality !== '' && `${recipe.nationality} - `}
                {recipe.category}
              </p>
              <UnfavoriteBtn id={recipe.id} reload={setReload} index={index} />
            </div>
          ))}
      </main>
      <Footer />
    </>
  );
}

export default FavoriteRecipes;
