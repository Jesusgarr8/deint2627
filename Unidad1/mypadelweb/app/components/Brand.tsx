import React from 'react'

export default function Brand() {
  return (
    <div className='flex flex-col border border-gray-300 rounded-2xl p-5 bg-white gap-4'> 
  <div className='flex m-4 gap-4'>
        <img src="https://noxsport.com/cdn/shop/files/logo_nox_240x.png?v=1717594954" alt="logo" className='border rounded-2xl border-amber-500  w-30 h-15 '/>    
        <div className='flex flex-col '>
        <h1 className='font-bold'>Nox</h1>
        <p>115 palas - desde 65€</p>
        </div>
        </div>
       
       <div  className='flex gap-3'>
        <p className='bg-gray-200 rounded-2xl w-fit h-fit  px-4 py-1'>Sobre todo lagrima</p>
        <p className='bg-gray-200 rounded-2xl w-fit h-fit  px-4 py-1'>Polivalente</p>
        </div>
        <div className='flex flex-col justify-between'>
        <p className='text-gray-600'>Su carta de presentacion: <span className=' text-black'>AT10 GENIUS 18K 2025 by AGUSTIN TAPIA</span></p>
      
        </div>
    </div>
  )
}
