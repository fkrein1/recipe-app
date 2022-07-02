export const fetchFoodIngredients = async () => {
  let url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const response = await fetch(url);
  const ingredients = await response.json();
  return ingredients;
};

export const fetchFoodById = async (id) => {
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};

export const fetchFoodByName = async (name) => {
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};

export const fetchFoodByIngredient = async (ingredient) => {
  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};