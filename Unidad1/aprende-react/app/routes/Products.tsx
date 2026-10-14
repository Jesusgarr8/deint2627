import React, { useState } from 'react'
import Product from '~/components/Product';
import { products, type IProduct } from '~/data/products';

//import { products, products } from '~/data/products'



export default function Products() {

const [productos, setProducts] = useState<IProduct [] >(products);

    return (
    <div>
<h1 className='text-3xl font-bold'>Productos</h1>
<div className='grid gap-4 sm-grid-cols-2'>
    {
        productos.map((p) => (
            <Product key={p.id} {...p}></Product>
        ))
    }
</div>

    </div>
  )
}
