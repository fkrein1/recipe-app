import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RecipesProvider } from './context/RecipesContext';

import Login from './pages/Login';
import Foods from './pages/Foods';
import Profile from './pages/Profile';
import Drinks from './pages/Drinks';
import Recipe from './pages/Recipe';
import InProgress from './pages/InProgress';
import DoneRecipes from './pages/DoneRecipes';
import Explore from './pages/Explore';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (
    <RecipesProvider>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/foods" element={<Foods />} />
        <Route exact path="/drinks" element={<Drinks />} />
        <Route exact path="/foods/:id" element={<Recipe />} />
        <Route exact path="/drinks/:id" element={<Recipe />} />
        <Route path="/foods/:id/in-progress" element={<InProgress />} />
        <Route path="/drinks/:id/in-progress" element={<InProgress />} />
        <Route exact path="/done-recipes" element={<DoneRecipes />} />
        <Route exact path="/favorite-recipes" element={<FavoriteRecipes />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/explore" element={<Explore />} />
      </Routes>
    </RecipesProvider>
  );
}

export default App;
