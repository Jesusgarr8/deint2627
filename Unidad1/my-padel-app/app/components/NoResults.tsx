import React, { useState } from 'react'

type NoResultsProps = {
    onReset: (query: string) => void
}

export default function NoResults ({onReset} : NoResultsProps) {
   
  return (
    <div>
     <div className='border border-dashed rounded-2xl flex flex-col p-5 m-5 items-center'>
    <p>Ninguna marca coincide con tu búsqueda. Puede que aún no la hayamos analizado</p>
    <button onClick={() => onReset('')} className='border border-gray-700 rounded-2xl  p-5 m-5 text-blue-600'>Ver todas las marcas</button>
    </div>
    </div>
  )
}
