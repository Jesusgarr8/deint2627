import React from 'react'
import type { IRacket } from '~/types/interfaces';

interface IRacketListProps {
  racket: IRacket;
}

function getScoreBorder(score: number): string {
  if (score >= 85) return 'border-nota-alta'
  if (score >= 70) return 'border-nota-media'
  return 'border-nota-baja'
}

export default function Racket({ racket }: IRacketListProps) {
  return (
    <div className='flex flex-col h-full border border-borde rounded-2xl bg-superficie overflow-hidden hover:shadow-lg hover:border-primario'>

      <img
        src={racket.image}
        alt={`Pala ${racket.model}`}
        className='h-48 w-full object-contain bg-foto border-b border-borde'
      />

      <div className='flex flex-col flex-1 justify-between gap-4 p-5'>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between items-center gap-4'>
            <h1 className='text-lg font-semibold text-letra'>{racket.model}</h1>
            <p
              className={`flex items-center justify-center shrink-0 w-14 h-14 rounded-full border-4 font-semibold text-letra ${getScoreBorder(racket.score)}`}
            >
              {racket.score}
            </p>
          </div>

          <div className='flex flex-wrap gap-3'>
            <p className='bg-etiqueta text-letra rounded-2xl w-fit h-fit px-4 py-1'>{racket.shape}</p>
            <p className='bg-etiqueta text-letra rounded-2xl w-fit h-fit px-4 py-1'>{racket.playStyle}</p>
            <p className='bg-etiqueta text-letra rounded-2xl w-fit h-fit px-4 py-1'>{racket.level}</p>
          </div>
        </div>

        <p className='text-2xl font-bold text-letra'>{racket.price}€</p>
      </div>
    </div>
  )
}