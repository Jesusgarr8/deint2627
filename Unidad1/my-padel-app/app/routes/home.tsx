import { useState } from "react";
import BrandList from "~/components/BrandList";
import NoResults from "~/components/NoResults";
import RacketList from "~/components/RacketList";
import SearchBar from "~/components/SearchBar";
import { brands } from "~/data/brands";
import type { IBrand } from "~/types/interfaces";
export default function Home() {
  
const [query, setQuery] = useState("");
//<SearchBar query={query} onQueryChange={setQuery} />


const visibleBrands = brands.filter((brand) =>
brand.name.toLowerCase().trim().includes(query.toLowerCase().trim())
);



  return (
    <main className="  w-full h-full mx-auto max-w-7xl p-6">
      <h1 className="text-2xl font-bold">Marcas de palas</h1>
     <SearchBar query={query} onQueryChange={setQuery} />
      <p className="text-letra-suave" aria-live="polite">Mostrando {visibleBrands.length} de 12 marcas</p>
      
     {visibleBrands.length > 0 ? <BrandList visibleBrands={visibleBrands}  /> : <NoResults onReset={setQuery} message="Ninguna marca coincide con tu búsqueda..." resetLabel="Ver todas las marcas"></NoResults>}
   
  
    </main>
  );
}