import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import RecipeGrid from '../../components/RecipeGrid';
import Footer from '../../components/Footer';
import { RecipesContext } from '../../context/RecipesContext';
import { foodApi } from '../../services/foodAndDrinkApi';
import SearchBar from '../../components/SearchBar';
import './styles.scss';

function Foods() {
  const { setSearchResults } = useContext(RecipesContext);
  useEffect(() => {
    async function fetchRecipes() {
      setSearchResults(await foodApi('s', ''));
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
