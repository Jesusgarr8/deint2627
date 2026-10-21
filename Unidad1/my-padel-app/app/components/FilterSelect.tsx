import React from 'react'

export interface IFilterProps{
   id: string,
   label: string,
   options: string[],
   value: string,
   onChange: (value: string)=> void
}
export default function FilterSelect({id, label, options, value, onChange}: IFilterProps) {
  return (
    <div className='flex flex-col gap-1'>
        <label htmlFor={id} className='text-sm text-gray-500'>{label}</label>
        <select id={id}  value={value} onChange={(e) => onChange(e.target.value)}
        className='rounded-full border border-gray-300 bg-white px-4 py-2 focus:border-blue-700'>
              <option value="">Todas</option>
              {options.map((opcion) => (
                <option key={opcion} value={opcion}>{opcion}</option>
              )
            )}
            
        </select>
      
    
    </div>
  )
}
