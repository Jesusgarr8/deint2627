import React from 'react'

type SearchBarProps = {
    query: string,
    onQueryChange: (query: string) => void
}

export default function SearchBar({query, onQueryChange}: SearchBarProps) {
  return (
    <div>
        <div className="relative m-3">
            <p className='absolute left-3 top-1/2 -translate-y-1/2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</p>
        <label className='sr-only' htmlFor="brand-search">Buscar marca</label>
        
        <input type="search" 
        id="brand-search"  
        placeholder=' Buscar marca...'
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}  
        className='pl-10 rounded-full border border-borde focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-primario' />
  
        </div>
    </div>
  )
}
