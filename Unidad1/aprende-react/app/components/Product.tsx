import React from 'react'
import { Link } from 'react-router'

interface IProps{
    id: number,
    title: string,
    desc: string,
    price: number
}

export default function Product(props : IProps) {
  return (
    <div className='flex flex-col gap-2 rounded-xl border border-gray-200 bg_white p-4 shadow-sm hover:shadow-md'>
      <div className='flex items-center justify-between'>
          <h2 className='text-lg font-semibold text-gray-900'>{props.title}</h2>
          <span className='font-bold text-blue-800'>{props.price}</span>
      </div>
        <p className='text-sm text-gray-600'>{props.desc}</p>
        <Link to={`/productos/${props.id}`} className='mt-2 self-start rounded-lg bg-blue-800  px-3 py-1 text-sm text-white'>Ver producto</Link>
    </div>
  )
}
