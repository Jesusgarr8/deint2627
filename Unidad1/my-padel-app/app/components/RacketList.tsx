import React from 'react'
import Racket from './Racket';
import type { IRacket } from '~/types/interfaces';

interface IRacketListProps {
  visibleRackets: IRacket[];
}

export default function RacketList({ visibleRackets }: IRacketListProps) {
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
      {visibleRackets.map((racket) => (
        <Racket key={racket.id} racket={racket} />
      ))}
    </div>
  )
}
