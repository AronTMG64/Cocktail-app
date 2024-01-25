'use client'

import CocktailComponent from "@/components/CocktailComponent";
import { fetchId } from "@/utils/fetch";


export default async function DynamicPage({ params }: { params: { id: string } }) { 

  const res = await fetchId(params.id);
  const data = res.drinks[0];

  return (
    <div>
      <CocktailComponent data={data} />
    </div>
  );
};