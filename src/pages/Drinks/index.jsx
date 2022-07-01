import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import RecipeGrid from '../../components/RecipeGrid';
import Footer from '../../components/Footer';
import { RecipesContext } from '../../context/RecipesContext';
import { drinkApi } from '../../services/foodAndDrinkApi';
import { useLocation, useParams } from 'react-router-dom';
import SearchRecipe from '../../components/SearchRecipe';

function Drinks() {
  const { setSearchResults, filter } = useContext(RecipesContext);
  useEffect(() => {
    async function fetchRecipes() {
      if (filter === '') setSearchResults(await drinkApi('s', ''));
      else setSearchResults(await drinkApi('i', filter));
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
