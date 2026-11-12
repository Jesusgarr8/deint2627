import React from 'react'
import { NavLink } from 'react-router'

export default function () {
  return (
    <div className='flex flex-col items-center gap-2'>
        <p> © 2026 My Padel</p>
       
        <NavLink to="/contacto"  className="text-primario">Contacto </NavLink>
        
    </div>
  )
}
