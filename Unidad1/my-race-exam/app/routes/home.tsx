import CategoryList from "~/components/CategoryList";
import { categories } from "~/data/categories";

export function meta() {
  return [
    { title: "My Race App" },
    { name: "description", content: "Carreras populares organizadas por categorías" },
  ];
}

export default function Home() {
const categorylist = categories




  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="text-4xl">Categorías de carreras</h1>
      <p className="mb-6 text-letra-suave">Elige una categoría para ver sus carreras.</p>

      <CategoryList categoryList={categorylist} />
   
    </main>
  );
}
