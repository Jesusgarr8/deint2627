import React from 'react'

export default function Header() {
  return (
    <div>
        <div className='flex justify-between'>
        <h1>My padel web</h1>
        
        <div className='flex gap-3 m-4'>
        <p>Catalogo</p>
        <p>Contacto</p>
        </div>
        </div>
    </div>
  )
}
