import React from 'react'

export function meta()  {
    return [{title: "Contacto - MyPadel"}]
}
export default function contact() {
  return (
    <div className='flex flex-col items-center'>
        <h1>Contacto</h1>
        <p>Datos de contacto: contacto@mypadelapp.es</p>
    </div>
  )
}
