import React from 'react'
import { Link } from 'react-router'

export default function notFound() {
  return (
    <div className='flex flex-col items-center m-10 gap-3'>
        <h1 className='text-blue-800  text-8xl'>404</h1>
        <h2 className='text-4xl font-bold'>Esta página no existe</h2>
        <p>Puede que la direccion  introducida no sea correcta</p>
        <button className='rounded-full border border-gray-300 p-4'>
        <Link to="/" className='text-blue-800 font-medium'>Volver a las marcas</Link>
        </button>
    </div>
  )
}
