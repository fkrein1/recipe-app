import React from 'react';
import { MagnifyingGlass, X } from 'phosphor-react';
import './styles.scss';

function SearchIngredient({searchValue, setSearchValue}) {
  return (
    <div id="search-ingredient">
      <input
        type="text"
        placeholder="Search ingredients"
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
    </div>
  );
}

export default SearchIngredient;
