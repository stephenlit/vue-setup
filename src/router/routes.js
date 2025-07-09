import { createRouter, createWebHistory } from "vue-router";
import { APP_ROUTE_NAMES } from "../constants/routeNames.js";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: APP_ROUTE_NAMES.HOME,
      component: Home,
    },
  ],
});

export default router;
