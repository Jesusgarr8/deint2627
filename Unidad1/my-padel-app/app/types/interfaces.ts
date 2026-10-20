import React from 'react'

export interface IBrand {
  id: number,
  name: string,
  logo: string,
  racketCount: number,
  minPrice: number,
  mainShape: string,
  playStyle: string,
  flagshipModel: string
}

export interface IRacket {
  id :string,
  brandId : number,
  model: string,
  image: string,
  score : number,
  shape: string,
  playStyle: string,
  level: string,
  price: number
} 
/*
export default function interfaces() {
  return (
    <div>interfaces</div>
  )
}
*/