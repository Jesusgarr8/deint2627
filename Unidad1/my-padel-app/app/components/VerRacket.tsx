import { title } from 'process'
import React from 'react'

export interface IRacketNumberProps{
   title : string
   onChange: (value: string)=> void,
   
}
export default function VerRackets({title, onChange}: IRacketNumberProps) {
  return (
    
     <div className='flex justify-center  p-4'>
        <button className='rounded-full border border-borde p-4 text-primario bg-etiqueta w-fit gap-4' onClick={() => onChange('')} >
       {title}
        </button>
        </div>
  )
}
