import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router'
import ThemeToggle from './ThemeToggle'
export default function Header() {


  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-blue-500" : ""

  return (
    <div>
      <div className='flex justify-between bg-color-fondo  border border-color-borde'>

        <Link to="/" className='flex  m-4'>
          <img src={logo} alt="logo" className='w-20 h-20 rounded-full' />
          <h1 className='m-4 font-bold text-primario text-2xl'>My padel web</h1>
        </Link>

        <div className='flex items-center gap-6'>


          <div className='flex gap-3 items-center m-8'>
            <NavLink to="/" className={navClass}>Marcas</NavLink>
            <NavLink to="/noticias" className={navClass}>Noticias</NavLink>
            <NavLink to="/contacto" className={navClass}>Contacto</NavLink>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}
