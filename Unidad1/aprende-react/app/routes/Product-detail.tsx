import React from 'react'
import type { Route } from './+types/Product-detail'
import { products } from '~/data/products'
import { Link } from 'react-router';

export default function ProductDetail({params} : Route.ComponentProps) {
  
  const idProducto = Number(params.productId)
  
  const productoFilter = products.find((p) =>  p.id == idProducto);

  if(!productoFilter){
    return <div>
      {
        <div className='p-6'>
        <h1 className='text-3xl font-bold'>Producto no encontrado</h1>
        <Link to="/productos" className="text-blue-800underline">Volver a los productos</Link>
        </div>
    }
    </div>  
  }
    return (
    <div className='mx-auto flex flex-col gap-4 p-6'>
      <Link to="/productos" className='text-primario underline'>Volver a los productos</Link>

    </div>
  )
}
