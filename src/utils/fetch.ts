export async function fetchSearch(input: string) {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
  return await res.json();
};

export async function fetchId(id: string) {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  return await res.json();
};

export async function fetchCategories() {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
  return await res.json();
};

export async function fetchByCategory(category: string) {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  return await res.json();
};

export async function fetchIngredients() {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`);
  return await res.json();
};

export async function fetchByIngredient(ingredient: string) {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  return await res.json();
};

export async function fetchRandom() {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
  return await res.json();
};