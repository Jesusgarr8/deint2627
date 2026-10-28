import { races } from "~/data/races";
import type { Route } from "./+types/category";
import RaceList from "~/components/RaceList";
import { categories } from "~/data/categories";
import { useState } from "react";
import SearchBar from "~/components/SearchBar";


export function meta({ params }: Route.MetaArgs) {
  const category = categories.find((c) => c.id === Number(params.categoryId))
  if (!category) {
    return [{ name: "Categoria no encontrada" }]
  }
  return [{ name: "Carreras - My Race" }];
}




export default function CategoryPage({ params }: Route.ComponentProps) {
  const [filters, setFilters] = useState();
  const category = categories.find((c) => c.id === Number(params.categoryId))

  const categoriaCarrera = races.filter((race) =>
    race.categoryId === category?.id);

  const racelist = races;


  const [query, setQuery] = useState("");

  const visibleRaces = categoriaCarrera.filter((race) =>
    race.name.toLowerCase().trim().includes(query.toLowerCase().trim()) || race.city.toLowerCase().trim().includes(query.toLowerCase().trim()) || race.surface.toLowerCase().trim().includes(query.toLowerCase().trim())
  );

  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="relative mb-8 overflow-hidden rounded-tarjeta">

        <img src={category?.image} alt="logo" />
        <p>{category?.name}</p>
        <div className="flex gap-1">
          <p>{category?.distance} - </p>
          <p>{category?.raceCount} carreras al año - desde</p>
          <p>{category?.minPrice} €</p>
        </div>
      </div>
      <SearchBar query={query} onQueryChange={setQuery} />
      <div className="mb-4">

      </div>

      <p className="mb-6 text-sm text-letra-suave" aria-live="polite">
        Mostrando {visibleRaces.length} de {categoriaCarrera.length} carreras
      </p>

      {/* Listado de carreras */}
      {visibleRaces.length > 0 ? <RaceList raceList={visibleRaces} /> : <p>No se han encontrado carreras</p>}


    </main>
  );
}
