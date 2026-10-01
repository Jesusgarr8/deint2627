import React from 'react'

export default function Cartelera() {
  return (
    <div className="bg-blue-950 w-full flex flex-col items-center justify-center ">
        <h1 className='text-white text-5xl'>En cartelera</h1>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"> 
            <div>
            <h1>1</h1>
            </div>
        
        <div>
        <h1>2</h1>
        </div>
        
        <h1>3</h1>
        </div>
    </div>
  )
}
