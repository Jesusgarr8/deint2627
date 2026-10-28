export type Surface = "Asfalto" | "Tierra" | "Montaña"; // Terreno
export type Difficulty = "Fácil" | "Media" | "Exigente" | "Extrema"; // Dificultad

export interface ICategory {
  id: number; // Identificador
  name: string; // Nombre
  image: string; // Imagen
  raceCount: number; // Carreras
  minPrice: number; // Desde
  surface: Surface; // Terreno
  distance: string; // Distancia
  flagshipRace: string; // Emblemática
}

export interface IRace {
  id: string; // Identificador
  categoryId: number; // Categoría
  name: string; // Nombre
  city: string; // Ciudad
  region: string; // Región
  date: string; // Fecha
  distance: number; // Kilómetros
  elevation: number; // Desnivel
  surface: Surface; // Terreno
  difficulty: Difficulty; // Dificultad
  price: number; // Precio
  score: number; // Valoración
}

export interface ITip {
  id: number; // Identificador
  topic: string; // Tema
  title: string; // Título
  text: string; // Contenido
}
