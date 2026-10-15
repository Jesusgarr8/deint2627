import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("noticias", "routes/news.tsx"),
     route("contacto", "routes/contact.tsx"),
     route("*", "routes/not-found.tsx"),
     route("marcas/:brandId", "routes/brand.tsx")

] satisfies RouteConfig;
