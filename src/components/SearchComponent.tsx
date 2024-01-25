'use client';

import { useEffect, useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Link } from '@mui/material';
import { fetchSearch, fetchByCategory, fetchByIngredient } from '@/utils/fetch';
import ResultComponent from './ResultComponent';

interface CategoriesProp {
  categories: any
  ingredients: any
}

export function SearchComponent({categories, ingredients}: CategoriesProp) {
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<any>();
  const [category, setCategory] = useState([]);
  const [categoryValue, setCategoryValue] = useState<string>('');
  const [ingredient, setIngredient] = useState([]);
  const [ingredientValue, setIngredientValue] = useState<string>('');


  useEffect(() => {
    setCategory(categories);
    setIngredient(ingredients);
  }, []);

  async function handleSearch () {
    try {
      const searchData = await fetchSearch(search);
      console.log('Search data:', searchData);
      setData(searchData);
    } catch (error) {
      console.error('Error fetching data:', error);
    };
  };

  async function handleCategoryChange (e: SelectChangeEvent) {
    setCategoryValue(e.target.value);
    if (e.target.value === '') {
      setData(null);
    } else {
      const data = await fetchByCategory(e.target.value);
      setData(data);
    };
  };
  
  async function handleIngredientChange (e: SelectChangeEvent) {
    setIngredientValue(e.target.value);
    if (e.target.value === '') {
      setData(null);
    } else {
      const data = await fetchByIngredient(e.target.value);
      setData(data);
    };
  };

  return (
    <div>
      <div className='flex'>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id='outlined-basic'
          variant='outlined'
          label='Search'
          type='text'
        />
        <Button onClick={handleSearch} className='h-14' variant='contained'>
          Search
        </Button>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categoryValue}
            label="Category"
            onChange={handleCategoryChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {category.map((category: any) => (
              <MenuItem key={category.strCategory} value={category.strCategory}>{category.strCategory}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Ingredient</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ingredientValue}
            label="ingredient"
            onChange={handleIngredientChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {ingredient.map((ingredient: any) => (
              <MenuItem key={ingredient.strIngredient1} value={ingredient.strIngredient1}>{ingredient.strIngredient1}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button className='h-14 ' variant='contained'>
          <Link className='text-white' href='http://localhost:3000/random'>Random drink</Link>
        </Button>
      </div>

      <ResultComponent data={data} />
    </div>
  );
};
