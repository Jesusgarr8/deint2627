import React from 'react'
import type { Route } from './+types/Product-detail'
import { products } from '~/data/products'

export default function ProductDetail({params} : Route.ComponentProps) {
  
  const idProducto = Number(params.productId)
  
  const productoFilter = products.find((p) =>  p.id == idProducto);

  if(!productoFilter){
    return <div>
      {
        <h1>Producto no encontrado</h1>
    }
    </div>  
  }
    return (
    <div>Product-detail: {productoFilter?.title}</div>
  )
}
