'use client'

import CocktailComponent from "@/components/CocktailComponent";
import { useState, useEffect } from "react";


export default function DynamicPage() { 

  const [random, setRandom] = useState([]);
  
  async function fetchRandom() {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
    const data = await res.json();
    setRandom(data.drinks[0]);
  };

  useEffect(() => {
    fetchRandom();
  },[]);


  return (
    <div>
      <CocktailComponent data={random} />
    </div>
  );
};