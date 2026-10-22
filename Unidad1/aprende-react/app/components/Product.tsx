import React from 'react'
import { Link } from "react-router";

interface IProps {
  id: number;
  title: string;
  desc: string;
  price: number;
}

export default function Product(props: IProps) {
  return (
    <div className="flex flex-col gap-2 rounded-tarjeta border border-borde bg-superficie p-4 shadow-sm hover:shadow-md dark:shadow-none">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-primario">{props.title}</h2>
        <span className="font-bold text-acento">{props.price} €</span>
      </div>
      <p className="text-sm text-letra-suave">{props.desc}</p>
      <Link
        to={`/productos/${props.id}`}
        className="mt-2 self-start rounded-boton bg-primario px-3 py-1 text-sm font-semibold text-letra-boton"
      >
        Ver ficha
      </Link>
    </div>
  );
}