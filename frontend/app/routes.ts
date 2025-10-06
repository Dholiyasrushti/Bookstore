import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("login/login.tsx"),          // 👈 Default route `/` -> Login page
  route("home", "routes/home.tsx"),   // 👈 `/home` -> Home page
] satisfies RouteConfig;
