import React from 'react'

interface IProps{
    nombre: string,
    imagen: string
}

export default function Food({nombre, imagen}: IProps) {
  return (
    <div className='border border-gray-400 w-50'>
        <p>{nombre}</p>
        <img src="{imagen}" alt="nombre" className='w-full'/>
    </div>
  )
}
