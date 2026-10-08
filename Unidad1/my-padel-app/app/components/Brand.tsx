import React from 'react'
import type { IBrand } from '~/types/interfaces';


interface IBrandListProps {
  brand: IBrand[];
}

export default function Brand({brand}: IBrandListProps) {
  return (
    <div className='flex flex-col border border-gray-300 rounded-2xl p-5 bg-white gap-4'> 
  <div className='flex m-4 gap-4'>
        <img src={brand.logo} alt="logo" className='border rounded-2xl border-amber-500  w-30 h-15 '/>    
        <div className='flex flex-col '>
        <h1 className='font-bold text-black'>{brand.name}</h1>
        <p className='text-gray-600'>{brand.racketCount} palas - desde {brand.minPrice}€</p>
        </div>
        </div>
       
       <div  className='flex gap-3'>
        <p className='bg-gray-200 text-black rounded-2xl w-fit h-fit  px-4 py-1'>Sobre todo {brand.mainShape}</p>
        <p className='bg-gray-200 text-black rounded-2xl w-fit h-fit  px-4 py-1'>{brand.playStyle}</p>
        </div>
        <div className='flex flex-col justify-between'>
        <p className='text-gray-600'>Su carta de presentacion: <span className=' text-black'>{brand.flagshipModel}</span></p>
      
        </div>
    </div>
  )
}
