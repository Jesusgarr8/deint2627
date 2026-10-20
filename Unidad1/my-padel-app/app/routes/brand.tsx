import React from 'react'
import type { Route } from './+types/brand'
import { brands } from '~/data/brands'
import { Link } from 'react-router'
import RacketList from '~/components/RacketList'
import { rackets } from '~/data/rackets'



export function meta ({params}: Route.MetaArgs){
  const brand = brands.find((b) => b.id === Number(params.brandId))

  if(!brand){
    return [{title  :"Marca no encontrada - My Padel"}]
  }
  return(
    [{title : `${brand.name} - My Padel`}]
  )
}


export default function brand  ({params}: Route.MetaArgs){
  const brand = brands.find((b) => b.id === Number(params.brandId))

  const visibleRackets = rackets.filter(
  (racket) => racket.brandId === brand?.id
);
   if(!brand){
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
           <RacketList visibleRackets={visibleRackets} />
        </div>
      </div>
  )
}
