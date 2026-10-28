import type { IRace } from "../types/interfaces";
import Race from "./Race";

interface IRaceList {
  raceList : IRace[];
}
export default function RaceList({raceList}:IRaceList) {
  return (
    <section className="">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{raceList.map((race) => (
              <Race key={race.id} race={race} />
            ))}</div>
    </section>
  );
}
