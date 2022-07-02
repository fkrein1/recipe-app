import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MagnifyingGlass, X } from 'phosphor-react';
import { fetchDrinkByName } from '../../services/drinkApi';
import { fetchFoodByName } from '../../services/foodApi';
import { RecipesContext } from '../../context/RecipesContext';
import './styles.scss';

function SearchRecipe() {
  const [searchValue, setSearchValue] = useState('');
  const { setSearchResults, setFilter } = useContext(RecipesContext);
  const {pathname} = useLocation();

  const handleSearchApi = async () => {
    event.preventDefault();
    setFilter('');
    if (pathname === '/foods' || pathname === '/') {
      const apiResult = await fetchFoodByName(searchValue);
      if (!apiResult) {
        alert("Sorry, we haven't found any recipes for these filters.");
        setSearchResults([]);
      } else {
        setSearchResults(apiResult);
      }
    } else {
      const apiResult = await fetchDrinkByName(searchValue);
      if (!apiResult) {
        alert("Sorry, we haven't found any recipes for these filters.");
        setSearchResults([]);
      } else {
        setSearchResults(apiResult);
      }
    }
    setSearchValue('');
  };

  return (
    <form id="search-bar" onSubmit={(event) => handleSearchApi(event)}>
      <input
        type="text"
        placeholder="Search recipes"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
      <MagnifyingGlass size={22} color="gray" id="search-icon" />
      {searchValue.length > 0 && (
        <X
          size={22}
          color="gray"
          id="x-icon"
          onClick={() => setSearchValue('')}
        />
      )}
    </form>
  );
}

export default SearchRecipe;
