import BrandList from "~/components/BrandList";

export default function Home() {
  return (
    <main className="  w-full h-full mx-auto max-w-7xl p-6">
      <h1 className="text-2xl font-bold">Marcas de palas</h1>
      <BrandList></BrandList>
    </main>
  );
}