import React from 'react'
import { NavLink } from 'react-router'

const navLinkStyles  =  ({isActive}: {isActive: boolean}) => (isActive ? "font-bold text-blue-800  underline" : "text-gray-600" )


    
export default function Header() {
  return (
   <header className='border-b border-gray-200'>
    <nav className='flex justify-center gap-6 p-4'>
            <NavLink to="/" 
            className={
                ({isActive}) => (
                    isActive   ?  "font-bold text-blue800 underline": "text-gray-600 hover:text-gray-800 "
                ) } > Home
            </NavLink>

             <NavLink to="/productos" 
            className={
                ({isActive}) => (
                    isActive   ?  "font-bold text-blue800 underline": "text-gray-600 hover:text-gray-800 "
                ) } > Productos
            </NavLink>


             <NavLink to="/about" 
            className={
                ({isActive}) => (
                    isActive   ?  "font-bold text-blue800 underline": "text-gray-600 hover:text-gray-800 "
                ) } > About
            </NavLink>

    </nav>


   </header>
  )
}
