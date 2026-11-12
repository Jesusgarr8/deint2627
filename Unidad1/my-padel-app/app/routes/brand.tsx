import React, { useState } from 'react'
import type { Route } from './+types/brand'
import { brands } from '~/data/brands'
import { Link } from 'react-router'
import RacketList from '~/components/RacketList'
import { rackets } from '~/data/rackets'
import FilterSelect from '~/components/FilterSelect'
import NoResults from '~/components/NoResults'
import SortSelect from '~/components/Sortselect'
import VerRackets from '~/components/VerRacket'


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
  const [vistas, SetVistas] = useState("tres")

  const brandRacket = rackets.filter((racket) =>
    racket.brandId === brand?.id);
  const visibleRackets = rackets.filter((racket) =>
    racket.brandId === brand?.id &&
    (filters.shape === "" || racket.shape === filters.shape) &&
    (filters.playStyle === "" || racket.playStyle === filters.playStyle) &&
    (filters.level === "" || racket.level === filters.level)
  );

  const BestRacket = [...brandRacket].sort((a, b) => b.score - a.score)[0]



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


  const verTres = sortedRackets.slice(0, 3)
  const verTodas = sortedRackets.slice(0, sortedRackets.length)





  if (!brand) {
    return (
      <div className=''>
        <h1>No encontramos esa marca</h1>
        <p>Puede que la direccion  introducida no sea correcta</p>
        <button className='rounded-full border border-borde p-4'>
          <Link to="/" className='text-primario font-medium'>Volver a las marcas</Link>
        </button>
      </div>
    )
  }

  return (
    <div className='flex m-4 gap-4'>

      <img src={brand.logo} alt="logo" className='border rounded-2xl border-borde  size-20 object-contain ' />
      <div className='flex flex-col '>
        <h1 className='text-2xl font-bold  text-letra '>{brand.name}</h1>
        <p className='text-letra-suave'>{brand.racketCount} palas - desde {brand.minPrice}€</p>
        {brandRacket.length > 0 ? <p className='text-letra-suave'>{BestRacket.model} </p> : null}
        <div className='grid grid-cols-4 gap-4 w-full'>
          <FilterSelect id="shape" label="Forma" options={["Redonda", "Lágrima", "Diamante"]} value={filters.shape} onChange={(value) => setFilters({ ...filters, shape: value })} />
          <FilterSelect id="play-style" label="Estilo de juego" options={["Control", "Polivalente", "Potencia"]} value={filters.playStyle} onChange={(value) => setFilters({ ...filters, playStyle: value })} />
          <FilterSelect id="level" label="Nivel" options={["Iniciación", "Intermedio", "Avanzado", "Profesional"]} value={filters.level} onChange={(value) => setFilters({ ...filters, level: value })} />
          <SortSelect value={sortBy} onChange={setSortBy} />
        </div>
        <p className="text-letra-suave gap-4 p-4" aria-live="polite">Mostrando {visibleRackets.length} de {brandRacket.length} palas</p>
        {visibleRackets.length > 0 && vistas === "tres" && 
        <><RacketList visibleRackets={verTres} /><VerRackets title="Ver todas" onChange={() => SetVistas("todas")} /></> 
        }

        {visibleRackets.length > 0 && vistas === "todas" &&
         <><RacketList visibleRackets={verTodas} /><VerRackets title="Ver menos" onChange={() => SetVistas("tres")} /></> 
         }

        {visibleRackets.length === 0 && <NoResults onReset={() => setFilters(noFilters)} message="Ninguna pala de esta marca cumple los filtros" resetLabel="Quitar los filtros"></NoResults>}
       

      </div>

    </div>
  )
}
