import React, { useState } from 'react'
import type { Route } from './+types/brand'
import { brands } from '~/data/brands'
import { Link } from 'react-router'
import RacketList from '~/components/RacketList'
import { rackets } from '~/data/rackets'
import FilterSelect from '~/components/FilterSelect'
import NoResults from '~/components/NoResults'
import SortSelect from '~/components/Sortselect'


const noFilters = { shape: "", playStyle: "", level: "" };

export function meta({ params }: Route.MetaArgs) {
  const brand = brands.find((b) => b.id === Number(params.brandId))

  if (!brand) {
    return [{ title: "Marca no encontrada - My Padel" }]
  }
  return (
    [{ title: `${brand.name} - My Padel` }]
  )
}


export default function brand({ params }: Route.MetaArgs) {
  const [filters, setFilters] = useState(noFilters);
  const [sortBy, setSortBy] = useState("score");
  const brand = brands.find((b) => b.id === Number(params.brandId))

  const brandRacket = rackets.filter((racket) =>
    racket.brandId === brand?.id);
  const visibleRackets = rackets.filter((racket) =>
    racket.brandId === brand?.id &&
    (filters.shape === "" || racket.shape === filters.shape) &&
    (filters.playStyle === "" || racket.playStyle === filters.playStyle) &&
    (filters.level === "" || racket.level === filters.level)
  );

  const sortedRackets = [...visibleRackets].sort((a, b) => {
    if (sortBy === "score") {
      return b.score - a.score;
    }

    if (sortBy === "price-asc") {
      return a.price - b.price;
    }

    if (sortBy === "price-desc") {
      return b.price - a.price;
    }

    return 0;
  });
  //const visibleRackets = brandRackets.filter((racket) => /* condición */);
  if (!brand) {
    return (
      <div className=''>
        <h1>No encontramos esa marca</h1>
        <p>Puede que la direccion  introducida no sea correcta</p>
        <button className='rounded-full border border-gray-300 p-4'>
          <Link to="/" className='text-blue-800 font-medium'>Volver a las marcas</Link>
        </button>
      </div>
    )
  }

  return (
    <div className='flex m-4 gap-4'>

      <img src={brand.logo} alt="logo" className='border rounded-2xl border-gray-200  size-20 object-contain ' />
      <div className='flex flex-col '>
        <h1 className='text-2xl font-bold  text-gray-900 '>{brand.name}</h1>
        <p className='text-gray-500'>{brand.racketCount} palas - desde {brand.minPrice}€</p>
        <div className='grid grid-cols-4 gap-4 w-full'>
          <FilterSelect id="shape" label="Forma" options={["Redonda", "Lágrima", "Diamante"]} value={filters.shape} onChange={(value) => setFilters({ ...filters, shape: value })} />
          <FilterSelect id="play-style" label="Estilo de juego" options={["Control", "Polivalente", "Potencia"]} value={filters.playStyle} onChange={(value) => setFilters({ ...filters, playStyle: value })} />
          <FilterSelect id="level" label="Nivel" options={["Iniciación", "Intermedio", "Avanzado", "Profesional"]} value={filters.level} onChange={(value) => setFilters({ ...filters, level: value })} />
          <SortSelect value={sortBy} onChange={setSortBy} />
        </div>
        <p className="text-gray-500 gap-4 p-4" aria-live="polite">Mostrando {visibleRackets.length} de {brandRacket.length} palas</p>
        {visibleRackets.length > 0 ? <RacketList visibleRackets={sortedRackets} /> : <NoResults onReset={() => setFilters(noFilters)} message="Ninguna pala de esta marca cumple los filtros" resetLabel="Quitar los filtros"></NoResults>}
      </div>

    </div>
  )
}
