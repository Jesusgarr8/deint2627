import React from 'react'

export default function Cartelera() {
  return (
    <div className="bg-blue-950 w-full flex flex-col items-center justify-center ">
        <h1 className='text-white text-5xl'>En cartelera</h1>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"> 
            <div className="bg-blue-800  m-2 rounded-lg  ">
            <img src="https://img.magnific.com/foto-gratis/hermosas-playas-tropicales-mar-oceano-nubes-blancas-cielo-azul-copyspace_74190-8663.jpg?semt=ais_hybrid&w=740&q=80" alt="mar" className=" w-full h-50 rounded-t-lg" />
           
            <div className='bg-purple-700 w-fit px-2 py-1 rounded-lg  m-2'>
            <h1>Película 1</h1>
            </div>
            <p className='text-white font-bold p-2'>Horizonte perdido</p>
            <p  className='text-gray-300 p-2'>Una tripulacion queda atrapada en un planeta desconocido y debe descubrir sus secretos antes de que se agote el oxigeno</p>
            
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-center'>
              <img src="https://cdn.pixabay.com/photo/2016/01/12/13/04/star-1135396_1280.png" alt="estrella" className=" w-5 h-5 m-2" />
              <p className='text-yellow-300 '>8.2</p>
              </div>
              <button className='bg-purple-700 flex justify-center items-center w-fit h-fit px-2 py-1 rounded-2xl hover:bg-purple-500 m-2'>
                Comprar entrada
              </button>
            </div>
            </div>
        
        <div className="bg-blue-800  m-2 rounded-lg  ">
            <img src="https://img.magnific.com/foto-gratis/hermosas-playas-tropicales-mar-oceano-nubes-blancas-cielo-azul-copyspace_74190-8663.jpg?semt=ais_hybrid&w=740&q=80" alt="mar" className=" w-full h-50 rounded-t-lg" />
           
            <div className='bg-purple-700 w-fit px-2 py-1 rounded-lg  m-2'>
            <h1>Película 2</h1>
            </div>
            <p className='text-white font-bold p-2'>Horizonte perdido</p>
            <p  className='text-gray-300 p-2'>Una tripulacion queda atrapada en un planeta desconocido y debe descubrir sus secretos antes de que se agote el oxigeno</p>
            
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-center'>
              <img src="https://cdn.pixabay.com/photo/2016/01/12/13/04/star-1135396_1280.png" alt="estrella" className=" w-5 h-5 m-2" />
              <p className='text-yellow-300 '>8.2</p>
              </div>
              <button className='bg-purple-700 flex justify-center items-center w-fit h-fit px-2 py-1 rounded-2xl hover:bg-purple-500 m-2'>
                Comprar entrada
              </button>
            </div>
            </div>
        
        <div className="bg-blue-800  m-2 rounded-lg  ">
            <img src="https://img.magnific.com/foto-gratis/hermosas-playas-tropicales-mar-oceano-nubes-blancas-cielo-azul-copyspace_74190-8663.jpg?semt=ais_hybrid&w=740&q=80" alt="mar" className=" w-full h-50 rounded-t-lg" />
           
            <div className='bg-purple-700 w-fit px-2 py-1 rounded-lg  m-2'>
            <h1>Película 3</h1>
            </div>
            <p className='text-white font-bold p-2'>Horizonte perdido</p>
            <p  className='text-gray-300 p-2'>Una tripulacion queda atrapada en un planeta desconocido y debe descubrir sus secretos antes de que se agote el oxigeno</p>
            
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-center'>
              <img src="https://cdn.pixabay.com/photo/2016/01/12/13/04/star-1135396_1280.png" alt="estrella" className=" w-5 h-5 m-2" />
              <p className='text-yellow-300 '>8.2</p>
              </div>
              <button className='bg-purple-700 flex justify-center items-center w-fit h-fit px-2 py-1 rounded-2xl hover:bg-purple-500 m-2'>
                Comprar entrada
              </button>
            </div>
            </div>
        </div>
    </div>
  )
}
