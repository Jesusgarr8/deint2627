import React from 'react'

export default function Tareas(){
    return(
    <div className="m-10 bg-amber-50 w-300 h-300  flex flex-col items-center  ">
        <h1 className='font-bold text-5xl m-5 '>Mis tareas</h1>
        <div className='bg-gray-300 flex items-center justify-between w-150 h-20 m-3 rounded-2xl'>
        <h1 className='m-5 text-2xl font-bold'>Tarea 1</h1>
        <button className='bg-yellow-300 rounded-2xl p-2 m-5 '><h1 className='text-yellow-700'>En proceso</h1></button>
        </div>

        <div className='bg-gray-300 flex items-center justify-between w-150 h-20  m-3 rounded-2xl'>
        <h1 className='m-5 text-2xl font-bold'>Tarea 2</h1>
        <button className='bg-green-300 rounded-2xl p-2 m-5 '><h1 className='text-green-700'>Hecho</h1></button>
        </div>

        <div className='bg-gray-300 flex items-center justify-between w-150 h-20  m-3 rounded-2xl'>
        <h1 className='m-5 text-2xl font-bold'>Tarea 3</h1>
        <button className='bg-red-300 rounded-2xl p-2 m-5 '><h1 className='text-red-700'>Sin hacer</h1></button>
        </div>
    </div>
    )
}