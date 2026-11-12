import { useState } from "react";
import BrandList from "~/components/BrandList";
import FilterSelect from "~/components/FilterSelect";
import NoResults from "~/components/NoResults";
import RacketList from "~/components/RacketList";
import SearchBar from "~/components/SearchBar";
import { brands } from "~/data/brands";
import type { IBrand } from "~/types/interfaces";

export function meta() {
  return [{ title: "Marcas - MyPadel" }]
}


export default function Home() {

  const [query, setQuery] = useState("");
  const [shape, setShape] = useState("");



  const visibleBrands = brands.filter((brand) =>
    brand.name.toLowerCase().trim().includes(query.toLowerCase().trim()) &&
    brand.mainShape === shape || shape === ""
  );

  function Reiniciar() {
    setQuery("")
    setShape("")
  }

  return (
    <main className="  w-full h-full mx-auto max-w-7xl p-6">
      <h1 className="text-2xl font-bold">Marcas de palas</h1>
      <div className="flex">
        <SearchBar query={query} onQueryChange={setQuery} />
        <FilterSelect id="shape" label="" options={["Redonda", "Lágrima", "Diamante"]} value={shape} onChange={setShape} />
      </div>

      <p className="text-letra-suave" aria-live="polite">Mostrando {visibleBrands.length} de 12 marcas</p>

      {visibleBrands.length > 0 ? <BrandList visibleBrands={visibleBrands} /> : <NoResults onReset={Reiniciar} message="Ninguna marca coincide con tu búsqueda..." resetLabel="Ver todas las marcas"></NoResults>}


    </main>
  );
}