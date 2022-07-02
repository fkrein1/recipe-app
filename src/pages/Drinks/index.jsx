import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import RecipeGrid from '../../components/RecipeGrid';
import Footer from '../../components/Footer';
import { RecipesContext } from '../../context/RecipesContext';
import { fetchDrinkByIngredient, fetchDrinkByName  } from '../../services/drinkApi';
import SearchRecipe from '../../components/SearchRecipe';

function Drinks() {
  const { setSearchResults, filter } = useContext(RecipesContext);
  useEffect(() => {
    async function fetchRecipes() {
      if (filter === '') setSearchResults(await fetchDrinkByName(''));
      else setSearchResults(await fetchDrinkByIngredient(filter));
    }
    fetchRecipes();
  }, []);

  return (
    <div id="drinks-wrapper">
      <Header title="Drinks" />
      <SearchRecipe />
      <RecipeGrid />
      <Footer />
    </div>
  );
}

export default Drinks;
