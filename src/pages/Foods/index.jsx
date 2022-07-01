import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import RecipeGrid from '../../components/RecipeGrid';
import Footer from '../../components/Footer';
import { RecipesContext } from '../../context/RecipesContext';
import { foodApi } from '../../services/foodAndDrinkApi';
import SearchBar from '../../components/SearchBar';
import './styles.scss';

function Foods() {
  const { setSearchResults, filter } = useContext(RecipesContext);
  useEffect(() => {
    async function fetchRecipes() {
      if (filter === '') setSearchResults(await foodApi('s', ''));
      else setSearchResults(await foodApi('i', filter));
    }
    fetchRecipes();
  }, []);

  return (
    <div id="food-wrapper">
      <Header title="Foods" />
      <SearchBar />
      <RecipeGrid />
      <Footer />
    </div>
  );
}

export default Foods;
