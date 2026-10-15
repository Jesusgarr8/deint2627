import React from 'react'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className='mx-auto  p-6'>
        <h1 className='text-3xl font-bold'>Pagina no encontrada</h1>
        <p>La direccion no existe</p>
        <Link to="/" className="text-blue-800 underline">Volver al inicio</Link>

    </div>
  )
}
