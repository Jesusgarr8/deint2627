import { useEffect, useState } from "react";
import type { ITip } from "~/types/interfaces";

export function meta() {
  return [{ title: "Consejos - My Race" }];
}

export default function Tips() {
 

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-4xl">Consejos</h1>
      <p className="mb-6 text-letra-suave">Lo básico para preparar tu próxima carrera.</p>

      
        <ol className="divide-y divide-borde border-y border-borde">
         
            <li className="flex gap-5 py-5">
              <span className="font-titulos text-3xl font-black text-primario">
            
              </span>
              <div>
                <span className="text-xs font-bold text-letra-suave uppercase"></span>
                <h2 className="text-xl"></h2>
                <p className="mt-1 text-letra-suave"></p>
              </div>
            </li>
  
        </ol>
   
    </main>
  );
}
