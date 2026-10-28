import category from "~/routes/category";
import type { ICategory } from "../types/interfaces";
import Category from "./Category";

interface ICategoryList {
  categoryList : ICategory[];
}

export default function CategoryList({categoryList}:ICategoryList) {
  return (
    //<section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
         {categoryList.map((category) => (
        <Category key={category.id} category={category} />
      ))}
      </div>
    //</section>
  );
}
