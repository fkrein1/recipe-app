import React, { useEffect, useContext } from 'react';
import Header from '../../components/Header';
import RecipeCard from '../../components/RecipeCard';
import Footer from '../../components/Footer';
import { RecipesContext } from '../../context/RecipesContext';
import { drinkApi } from '../../services/foodAndDrinkApi';
import { useLocation, useParams } from 'react-router-dom';

function Drinks() {
  const { setSearchResults } = useContext(RecipesContext);
  useEffect(() => {
    async function fetchRecipes() {
      setSearchResults(await drinkApi('s', ''));
    }
    fetchRecipes();
  }, []);

  return (
    <div>
      <Header title="Drinks" />
      <RecipeCard />
      <Footer />
    </div>
  );
}

export default Drinks;
