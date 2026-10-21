import React from 'react'

export interface IFilterProps{
   value: string,
   onChange: (value: string)=> void
}
export default function SortSelect({value, onChange}: IFilterProps) {
  return (
    <div className='flex flex-col gap-1'>
        <label htmlFor="sort" className='text-sm text-gray-500'>Ordenar por</label>
        <select id="Ordenar por"  value={value} onChange={(e) => onChange(e.target.value)}
        className='rounded-full border border-gray-300 bg-white px-4 py-2 focus:border-blue-700'>
            
            <option value="score">Mejor puntuación</option>
            <option value="price-asc">Precio: de menor a mayor</option>
            <option value="price-desc">Precio: de mayor a menor</option>
            
        </select>
      
    
    </div>
  )
}
