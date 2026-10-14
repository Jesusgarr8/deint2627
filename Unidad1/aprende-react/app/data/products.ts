export interface IProduct {
  id: number;
  title: string;
  desc: string;
  price: number;
}

export const products: IProduct[] = [
  { id: 1, title: "Portátil", desc: "Lenovo IdeaPad Slim 5, 16 GB RAM, SSD 512 GB", price: 749 },
  { id: 2, title: "Monitor", desc: "LG UltraGear 27 pulgadas QHD 165 Hz", price: 279 },
  { id: 3, title: "Teclado", desc: "Logitech MX Keys S inalámbrico", price: 119 },
  { id: 4, title: "Ratón", desc: "Logitech MX Master 3S", price: 99 },
];