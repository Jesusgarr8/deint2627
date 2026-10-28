import { Link } from "react-router";

export function meta() {
  return [{ title: "Página no encontrada - My Race" }];
}

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center p-6 gap-2">
      
      <h1 className="">NO ENCONTRAMOS ESA PAGINA</h1>
      <p className="">Puede que la estemos añadinedo</p>
      <p className="">
       
      </p>
     <button className='rounded-full border border-borde p-4'>
        <Link to="/" className='text-primario font-medium'>Volver a las categorias</Link>
        </button>

      
    </main>
  );
}
