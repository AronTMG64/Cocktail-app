import { Box, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'

interface ResultProp {
  data: any;
};

export default function ResultComponent({data}: ResultProp) {

  const res = data && data.drinks ? data.drinks : [];

  return (
    <TableContainer>
      <Table className='mt-2'>
        <TableHead>
          <TableRow>
            <TableCell>img</TableCell>
            <TableCell>Cocktail name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {res.map((drink: any) => (
            <TableRow key={drink.idDrink}>
              <TableCell><Box sx={{height: 50, width: 50}} component="img" src={drink.strDrinkThumb}></Box></TableCell>
              <TableCell><Link href={`http://localhost:3000/${drink.idDrink}`}>{drink.strDrink}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};