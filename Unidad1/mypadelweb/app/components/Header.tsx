import React from 'react'

export default function Header() {
  return (
    <div>
        <div className='flex justify-between bg-blue-600'>
        <h1 className='m-4'>My padel web</h1>
        
        <div className='flex gap-3 m-4'>
        <p>Catalogo</p>
        <p>Contacto</p>
        </div>
        </div>
    </div>
  )
}
