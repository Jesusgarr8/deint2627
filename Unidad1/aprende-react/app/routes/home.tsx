import Tarjeta from "~/components/Tarjeta";
import Tareas from "~/components/Tareas";
import Cartelera from "~/components/Cartelera";

export default function Home() {
  return (
    <div className="flex flex-col items-center  h-screen gap-5 m-10">
     
    <Tarjeta></Tarjeta>
    <Tareas></Tareas>
      <Cartelera>
        
      </Cartelera>
    </div>
  );
}