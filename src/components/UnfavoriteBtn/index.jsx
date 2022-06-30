import React, { useEffect, useState } from 'react';
import { Heart } from 'phosphor-react';
import './styles.scss';

function UnfavoriteBtn({ id, reload, index }) {
  const [favorite, setFavorite] = useState(true);

  useEffect(() => {
    const favoriteRecipes = localStorage.getItem('favoriteRecipes');
    if (favoriteRecipes && id) {
      setFavorite(JSON.parse(favoriteRecipes)
        .map((favRecipe) => favRecipe.id)
        .includes(id));
    }
  }, [id]);

  function deleteFavorite() {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newFavorites = favoriteRecipes
      .filter((favRecipe) => favRecipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    setFavorite(false);
    reload((prev) => !prev);
  }

  return (
    <div id="unfavorite-btn">
      {favorite && (
        <button
          type="button"
          onClick={ deleteFavorite }
        >
          <Heart size={ 40 } color="#7A7AC7" weight="fill" alt="purple heart icon" />
        </button>
      )}
    </div>
  );
}

export default UnfavoriteBtn;

