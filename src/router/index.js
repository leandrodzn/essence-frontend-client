import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/templates",
      name: "Templates",
      component: () => import("../views/TemplatesView.vue"),
    },
    {
      path: "/template/:id",
      name: "Template",
      component: () => import("../views/TemplateInfoView.vue"),
    },
    {
      path: "/favorites",
      name: "Favorites",
      component: () => import("../views/FavoritesView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
