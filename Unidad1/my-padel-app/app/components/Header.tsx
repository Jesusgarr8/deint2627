import React from 'react'
import logo from '../assets/logo.png'
export default function Header() {
  return (
    <div>
      <div className='flex justify-between bg-blue-600'>
        <div className='flex  m-4'>
          <img src={logo} alt="logo" className='w-20 h-20 rounded-full' />
          <h1 className='m-4 font-bold text-white'>My padel web</h1>
        </div>
        <div className='flex gap-3 m-8'>
          <p className='text-white'>Catalogo</p>
          <p className='text-white'>Contacto</p>
        </div>
      </div>
    </div>
  )
}
