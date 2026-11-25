export interface IHourPrice {
  hour: number; // de 0 a 23
  price: number; // en €/kWh
}

export const prices: IHourPrice[] = [
  { hour: 0, price: 0.118 },
  { hour: 1, price: 0.109 },
  { hour: 2, price: 0.104 },
  { hour: 3, price: 0.101 },
  { hour: 4, price: 0.099 },
  { hour: 5, price: 0.103 },
  { hour: 6, price: 0.121 },
  { hour: 7, price: 0.168 },
  { hour: 8, price: 0.214 },
  { hour: 9, price: 0.197 },
  { hour: 10, price: 0.142 },
  { hour: 11, price: 0.093 },
  { hour: 12, price: 0.071 },
  { hour: 13, price: 0.064 },
  { hour: 14, price: 0.059 },
  { hour: 15, price: 0.068 },
  { hour: 16, price: 0.089 },
  { hour: 17, price: 0.127 },
  { hour: 18, price: 0.181 },
  { hour: 19, price: 0.226 },
  { hour: 20, price: 0.239 },
  { hour: 21, price: 0.212 },
  { hour: 22, price: 0.163 },
  { hour: 23, price: 0.134 },
];