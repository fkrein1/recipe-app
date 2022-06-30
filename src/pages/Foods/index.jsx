import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import RecipeCard from '../../components/RecipeCard';
import Footer from '../../components/Footer';
import { RecipesContext } from '../../context/RecipesContext';
import { foodApi } from '../../services/foodAndDrinkApi';

function Foods() {
  const { setSearchResults } = useContext(RecipesContext);
  useEffect(() => {
    async function fetchRecipes() {
      setSearchResults(await foodApi('s', ''));
    }
    fetchRecipes();
  }, []);

  return (
    <div>
      <Header title="Foods" />
      <RecipeCard />
      <Footer />
    </div>
  );
}

export default Foods;
