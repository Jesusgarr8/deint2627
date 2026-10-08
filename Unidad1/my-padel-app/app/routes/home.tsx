import BrandList from "~/components/BrandList";
import type { IBrand } from "~/types/interfaces";
export default function Home() {
  const brands: IBrand[] = [
  {
    id: 1,
    name: "Nox",
    logo: "https://noxsport.com/cdn/shop/files/logo_nox_240x.png?v=1717594954",
    racketCount: 115,
    minPrice: 65,
    mainShape: "Lágrima",
    playStyle: "Polivalente",
    flagshipModel: "AT10 GENIUS 18K 2025 by AGUSTIN TAPIA",
  },
  {
    id: 2,
    name: "Bullpadel",
    logo: "https://iconape.com/wp-content/files/ix/180792/png/bullpadel-logo.png",
    racketCount: 98,
    minPrice: 71,
    mainShape: "Diamante",
    playStyle: "Potencia",
    flagshipModel: "NEURON 02 Cloud 2026 FEDE CHINGOTTO",
  },
  {
    id: 3,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    racketCount: 61,
    minPrice: 75,
    mainShape: "Redonda",
    playStyle: "Control",
    flagshipModel: "METALBONE Ctrl 2026",
  },
  {
    id: 4,
    name: "StarVie",
    logo: "https://starvie.com/cdn/shop/files/LOGOTIPO_NEGRO_ESTRELLA_ROJA.png?v=1750079850&width=400",
    racketCount: 41,
    minPrice: 86,
    mainShape: "Lágrima",
    playStyle: "Polivalente",
    flagshipModel: "Raptor +",
  },
  {
    id: 5,
    name: "Siux",
    logo: "https://www.siuxpadel.com/cdn/shop/files/Logo_ISO-12_1negro.png?v=1761306725&width=400",
    racketCount: 34,
    minPrice: 68,
    mainShape: "Lágrima",
    playStyle: "Polivalente",
    flagshipModel: "Trilogy Pro 5 2025",
  },
  {
    id: 6,
    name: "Babolat",
    logo: "https://www.babolat.com/on/demandware.static/Sites-babolateu-Site/-/default/dw02395253/images/logo.svg",
    racketCount: 22,
    minPrice: 60,
    mainShape: "Diamante",
    playStyle: "Potencia",
    flagshipModel: "BL 003 25",
  },
];

  return (
    <main className="  w-full h-full mx-auto max-w-7xl p-6">
      <h1 className="text-2xl font-bold">Marcas de palas</h1>
     <BrandList brands={brands} />
    </main>
  );
}