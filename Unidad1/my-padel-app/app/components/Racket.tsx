import React from 'react'
import type { IRacket } from '~/types/interfaces';


interface IRacketListProps {
  racket : IRacket;
}

export default function Racket({racket}: IRacketListProps) {
  return (
    <div className='flex flex-col'>
        <img src={racket.image} alt="imagen pala" className='h-48 object-contain'/>
        <div className='flex gap-4'>
            <p className='text-lg font-semibold'>{racket.model}</p>
            <p className=' border-2 rounded-full w-16 h-16 gap-2 p-4'>{racket.score}</p>
            </div>        
    </div>
  )
}
