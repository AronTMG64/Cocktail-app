import { SearchComponent } from "@/components/SearchComponent";
import { fetchCategories, fetchIngredients } from "@/utils/fetch";

export default async function Home() {

  const categories = await fetchCategories();
  const ingredients = await fetchIngredients();

  return (
    <main className="flex items-center justify-center min-h-full p-2">
      <SearchComponent categories={categories.drinks} ingredients={ingredients.drinks} />
    </main>
  );
};
