import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import RecipeGrid from '../../components/RecipeGrid';
import Footer from '../../components/Footer';
import { RecipesContext } from '../../context/RecipesContext';
import { fetchFoodByIngredient, fetchFoodByName } from '../../services/foodApi';
import SearchRecipe from '../../components/SearchRecipe';
import './styles.scss';

function Foods() {
  const { setSearchResults, filter } = useContext(RecipesContext);
  useEffect(() => {
    async function fetchRecipes() {
      if (filter === '') setSearchResults(await fetchFoodByName(''));
      else setSearchResults(await fetchFoodByIngredient(filter));
    }
    fetchRecipes();
  }, []);

  return (
    <div id="food-wrapper">
      <Header title="Foods" />
      <SearchRecipe />
      <RecipeGrid />
      <Footer />
    </div>
  );
}

export default Foods;
