import { createRouter, createWebHistory } from "vue-router";
import { useLoginStore } from "../store/login";

const requireLogged = (to, from, next) => {
  const useLogin = useLoginStore();

  if (useLogin.isLogged) {
    next();
  } else {
    next("/login");
  }
};

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
      path: "/history",
      name: "History",
      component: () => import("../views/TemplatesHistoryView.vue"),
      beforeEnter: requireLogged,
    },
    {
      path: "/content",
      name: "content",
      component: () => import("../views/ContentView.vue"),
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
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/favorites",
      name: "Favorites",
      component: () => import("../views/FavoritesView.vue"),
      beforeEnter: requireLogged,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
