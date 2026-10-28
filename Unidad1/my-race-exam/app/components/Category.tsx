import { Link } from "react-router";
import type { ICategory } from "~/types/interfaces";

interface ICategoryProps {
  category: ICategory
}
export default function Category({category} : ICategoryProps) {
  return (
    <Link to={`categorias/${category.id}`} className="">
   <div className='flex flex-col justify-between border border-borde rounded-2xl  bg-superficie gap-4 group hover:shadow-lg hover:border-primario'>
      <div>
        
        <img src={category.image} alt="logo" className=' rounded-t-2xl border-5 border-gray-50 border-b-orange-500  h-44 w-full object-cover' />
        {category.raceCount >= 150 ?
          <div className='flex gap-1 text-destacada bg-destacada-fondo w-fit px-2 py-2 rounded-2xl'>
            <p className=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg></p>
            <p>Destacada</p>
          </div>
          : null
        } 
         

         </div>
        <div className='flex flex-col gap-3 m-3 '>
          <h1 className='font-bold  text-letra  text-2xl'>{category.name}</h1>
          <p className='text-letra-suave font-semibold'>{category.raceCount} carreras al año - desde {category.minPrice}€</p>
       
      </div>

      <div className='flex gap-3'>
        <p className='font-semibold border border-gray-200 rounded-sm w-fit h-fit  px-4 py-1'>{category.distance}</p>
        <p className=' font-semibold border border-gray-200 rounded-sm w-fit h-fit  px-4 py-1'>{category.surface}</p>
      </div>
      <div className='flex flex-col justify-between gap-3 m-3'>
        <p className='text-letra-suave'>La mas famosa: <span className=' font-bold text-gray-950'>{category.flagshipRace}</span></p>


    

        <div className='flex gap-1 lg:opacity-0  lg:group-hover:opacity-100 '>
          <p className='text-primario font-bold'>VER LAS CARRERAS </p>

          <p className='text-primario hover:translate-x-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
          </p>
        </div>

      </div>
    </div>
     </Link>
  );
}
