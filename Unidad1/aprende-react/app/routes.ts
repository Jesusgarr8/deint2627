import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about","routes/About.tsx"),
    route("productos", "routes/Products.tsx"),
    route("productos/:productId", "routes/Product-detail.tsx")
    
] satisfies RouteConfig;
