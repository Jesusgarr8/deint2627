import type { ICategory, IRace } from "../types/interfaces";

interface IraceProps {
  race: IRace
}

interface ICategoryProps {
  category: ICategory
}

export default function Race({race}:IraceProps) {
  

  const raceDate = new Date(`${Date}T00:00:00`);
  raceDate.toLocaleDateString("es-ES", { dateStyle: "long" })

function getScoreBg(score: number): string {
  if (score >= 85) return 'bg-nota-alta'
  if (score >= 70) return 'bg-nota-media'
  return 'bg-nota-baja'
}

  return (
    <div className="border-5 border-gray-50  rounded-2xl  border-l-orange-500">
      <div className="flex justify-between p-4 ">
        <div>
          <h1 className="text-primario">{}</h1>
          <h1>{race.name}</h1>
          <p className="text-gray-600">{race.city} ({race.region})</p>
        
          
        </div>

        <p className={` ${getScoreBg(race.score)} w.fit h-fit rounded-lg text-white font-bold px-2 py-1 `}>
          {race.score}
        </p>
      </div>

    <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-200 rounded-xl  p-4">
        <p className="text-letra-suave">DISTACNIA</p>
        <p className="font-bold">{race.distance} km</p>
      </div>
      <div className="bg-gray-200 rounded-xl  p-4">
        <p className="text-letra-suave">DESNIVEL</p>
        <p className="font-bold">+{race.elevation} m</p>
      </div>
      </div>

      <ul className="flex flex-wrap gap-2 m-3 ">
         <p className='font-semibold border border-gray-200 rounded-sm w-fit h-fit  px-4 py-1'>{race.surface}</p>
          <p className='font-semibold border border-gray-200 rounded-sm w-fit h-fit  px-4 py-1'>{race.difficulty}</p>
      </ul>

      <div className="flex gap-2 items-end m-2">
      <p className="mt-auto text-2xl font-black">
       {race.price} € 
      </p>
      <p className="text-letra-suave">incripción</p>
      </div>
    </div>
  );
}
