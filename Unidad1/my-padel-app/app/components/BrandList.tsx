import React from 'react'
import Brand from './Brand'
import type { IBrand } from '~/types/interfaces';


interface IBrandListProps {
  brands: IBrand[];
}
export default function BrandList({ brands }: IBrandListProps) {
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
      {brands.map((brand) => (
        <Brand key={brand.id} brand={brand} />
      ))}
    </div>
  )
}
