import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MagnifyingGlass, X } from 'phosphor-react';
import { foodApi, drinkApi } from '../../services/foodAndDrinkApi';
import { RecipesContext } from '../../context/RecipesContext';
import './styles.scss';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const { setSearchResults } = useContext(RecipesContext);
  const location = useLocation();

  const handleSearchApi = async () => {
    event.preventDefault();
    if (location.pathname === '/foods') {
      const apiResult = await foodApi('s', searchValue);
      if (!apiResult) {
        alert("Sorry, we haven't found any recipes for these filters.");
        setSearchResults([]);
      } else {
        setSearchResults(apiResult);
      }
    } else {
      const apiResult = await drinkApi('s', searchValue);
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

export default SearchBar;
