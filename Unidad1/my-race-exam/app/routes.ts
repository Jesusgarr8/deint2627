import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("consejos", "routes/tips.tsx"),
  route("categorias/:categoryId", "routes/category.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
