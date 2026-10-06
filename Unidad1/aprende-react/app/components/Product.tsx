import React from 'react'

interface IProps{
    title: string,
    desc: string,
    price: number
}

export default function Product(props : IProps) {
  return (
    <div className='border-2 border-blue-600 rounded-2xl'>
        <h1 className='text-green-600'>{props.title} </h1>
        <p>{props.desc}</p>
        <p>{props.price}€</p>
    </div>
  )
}
