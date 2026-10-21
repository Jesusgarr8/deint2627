import React from 'react'
import type { IRacket } from '~/types/interfaces';

interface IRacketListProps {
  racket: IRacket;
}

function getScoreBorder(score: number): string {
  if (score >= 85) return 'border-green-500'
  if (score >= 70) return 'border-amber-500'
  return 'border-red-500'
}

export default function Racket({ racket }: IRacketListProps) {
  return (
    <div className='flex flex-col h-full border border-gray-200 rounded-2xl bg-white overflow-hidden hover:shadow-lg hover:border-blue-600'>

      <img
        src={racket.image}
        alt={`Pala ${racket.model}`}
        className='h-48 w-full object-contain bg-white border-b border-gray-200'
      />

      <div className='flex flex-col flex-1 justify-between gap-4 p-5'>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between items-center gap-4'>
            <h1 className='text-lg font-semibold text-gray-900'>{racket.model}</h1>
            <p
              className={`flex items-center justify-center shrink-0 w-14 h-14 rounded-full border-4 font-semibold text-gray-900 ${getScoreBorder(racket.score)}`}
            >
              {racket.score}
            </p>
          </div>

          <div className='flex flex-wrap gap-3'>
            <p className='bg-gray-100 text-gray-900 rounded-2xl w-fit h-fit px-4 py-1'>{racket.shape}</p>
            <p className='bg-gray-100 text-gray-900 rounded-2xl w-fit h-fit px-4 py-1'>{racket.playStyle}</p>
            <p className='bg-gray-100 text-gray-900 rounded-2xl w-fit h-fit px-4 py-1'>{racket.level}</p>
          </div>
        </div>

        <p className='text-2xl font-bold text-gray-900'>{racket.price}€</p>
      </div>
    </div>
  )
}