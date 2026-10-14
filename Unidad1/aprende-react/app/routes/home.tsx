import Tarjeta from "~/components/Tarjeta";
import Tareas from "~/components/Tareas";
import Cartelera from "~/components/Cartelera";
import Button from "~/components/Button";
import Product from "~/components/Product";
import Food from "~/components/Food";
import { useState } from "react";
import { Link } from "react-router";

export function meta(){
  return [
    {title: "Home -aprende-react"}
  ]
}

export default function Home() {

  return<> 
  <div className="flex flex-col items-center gap-6 px-6 py-16 text-center">

  <span className="rounded-full  bg-blue-100 px-3 py-1 text-sm  font-medium  text-blue-800">Tienda de informatica</span>

  <h1 className="text-4xl font-bold text-gray-900">¡Investiga nuestros productos!</h1>

  <p className="text-lg text-gray-600">Ordenadores, monitores  y perifericos para estudiar y trabajar. 
    Elige un producto y consulta su ficha</p>

    <div className="flex gap-4">
      <Link to="/productos" className="rounded-lg bg-blue-800 px-5 py-3 font-semibold  text-white hover:bg-blue-950">Ver productos</Link>
      <Link to="/about" className="rounded-lg bg-gray-300 px-5 py-3 font-semibold  hover:bg-gray-700">Sobre el proyecto</Link>

    </div>

  </div> 
  </>
}