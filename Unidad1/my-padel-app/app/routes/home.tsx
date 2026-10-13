import { useState } from "react";
import BrandList from "~/components/BrandList";
import SearchBar from "~/components/SearchBar";
import { brands } from "~/data/brands";
import type { IBrand } from "~/types/interfaces";
export default function Home() {
  
const [query, setQuery] = useState("");
<SearchBar query={query} onQueryChange={setQuery} />
console.log(query);
  return (
    <main className="  w-full h-full mx-auto max-w-7xl p-6">
      <h1 className="text-2xl font-bold">Marcas de palas</h1>
     <SearchBar query={query} onQueryChange={setQuery} />
     <BrandList brands={brands} />
    </main>
  );
}