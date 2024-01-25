import { Box, Card, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react'

interface ResultProp {
  data: any;
};

export default function CocktailComponent({data}: ResultProp) {

  function renderIngredients() {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = data?.[`strIngredient${i}`];
      const measure = data?.[`strMeasure${i}`];
  
      if (ingredient && measure) {
        ingredients.push(
          <ListItem key={i}>
            <ListItemText primary={`${ingredient}: ${measure}`} />
          </ListItem>
        );
      };
    };
    return ingredients;
  };

  return (
    <Container>
      <Card className='flex p-12 gap-12 justify-center'>
        <Card className='p-8'>
          <Box sx={{height: 250, width: 250}} component='img' alt='cocktail_image' src={data.strDrinkThumb}></Box>
          <Typography className='text-center' variant='h3'>{data.strDrink}</Typography>
        </Card>
        <Card className='p-8 flex flex-col justify-center'>
          <Typography variant='h5'>Ingredients:</Typography>
          <List>{renderIngredients()}</List>
        </Card>
        <Card className='p-8 flex flex-col justify-center'>
          <Typography variant='h5'>Instructions:</Typography>
          <Typography className='max-w-64'>{data.strInstructions}</Typography>
        </Card>
      </Card>
    </Container>
  );
};
