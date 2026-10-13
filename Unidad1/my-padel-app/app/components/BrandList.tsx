import React from 'react'
import Brand from './Brand'
import type { IBrand } from '~/types/interfaces';


interface IBrandListProps {
  visibleBrands: IBrand[];
}

export default function BrandList({ visibleBrands }: IBrandListProps) {
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
      {visibleBrands.map((brand) => (
        <Brand key={brand.id} brand={brand} />
      ))}
    </div>
  )
}
