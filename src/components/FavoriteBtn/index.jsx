import React, { useEffect, useState } from 'react';
import { Heart } from 'phosphor-react';
import './styles.scss';

function FavoriteBtn({ recipe }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favoriteRecipes = localStorage.getItem('favoriteRecipes');
    if (favoriteRecipes && recipe) {
      setFavorite(
        JSON.parse(favoriteRecipes)
          .map((favRecipe) => favRecipe.id)
          .includes(recipe?.idDrink || recipe?.idMeal),
      );
    }
  }, [recipe]);

  function deleteFavorite() {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

    const newFavorites = favoriteRecipes.filter(
      (favRecipe) =>
        favRecipe.id !== recipe.idMeal && favRecipe.id !== recipe.idDrink,
    );
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    setFavorite(false);
  }

  function addFavorite() {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newRecipe = {
      id: recipe?.idMeal || recipe?.idDrink,
      type: Object.keys(recipe).includes('idDrink') ? 'drink' : 'food',
      nationality: recipe?.strArea || '',
      category: recipe.strCategory,
      alcoholicOrNot: Object.keys(recipe).includes('idDrink')
        ? recipe.strAlcoholic
        : '',
      name: recipe?.strMeal || recipe?.strDrink,
      image: recipe?.strMealThumb || recipe?.strDrinkThumb,
    };
    if (favoriteRecipes) {
      localStorage.setItem(
        'favoriteRecipes',
        JSON.stringify([...favoriteRecipes, newRecipe]),
      );
    } else localStorage.setItem('favoriteRecipes', JSON.stringify([newRecipe]));
    setFavorite(true);
  }

  return (
    <div id="favorite-btn">
      {!favorite && (
        <button type="button" onClick={addFavorite}>
          <Heart size={35} color="#7A7AC7" alt="blanck heart icon" />
        </button>
      )}

      {favorite && (
        <button type="button" onClick={deleteFavorite}>
          <Heart
            size={35}
            color="#7A7AC7"
            weight="fill"
            alt="purple heart icon"
          />
        </button>
      )}
    </div>
  );
}

export default FavoriteBtn;
