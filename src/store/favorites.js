import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { useTemplatesStore } from "./templates";
import { useLoginStore } from "./login.js";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

export const useFavoritesStore = defineStore("favorites", () => {
  const useTemplate = useTemplatesStore();
  const useLogin = useLoginStore();
  const toast = useToast();

  const favorites = reactive([
    {
      userId: 1,
      id: 1,
      name: "Elegante Gala",
      price: "1200",
      link: "",
      image:
        "https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg",
      description:
        "Una plantilla elegante y sofisticada perfecta para eventos de gala y ocasiones especiales. Con detalles finamente diseñados que resaltan la exclusividad del evento.",
      events: ["Bodas Civiles", "Fiesta de Gala", "Reunión Social"],
    },
    {
      userId: 2,
      id: 1,
      name: "Elegante Gala",
      price: "1200",
      link: "",
      image:
        "https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg",
      description:
        "Una plantilla elegante y sofisticada perfecta para eventos de gala y ocasiones especiales. Con detalles finamente diseñados que resaltan la exclusividad del evento.",
      events: ["Bodas Civiles", "Fiesta de Gala", "Reunión Social"],
    },
  ]);

  const favoritesList = computed(() => {
    const user = useLogin.userLogged;
    return favorites.filter((favorite) => favorite.userId === user.id);
  });

  const addFavorite = (id) => {
    const user = useLogin.userLogged;

    const template = useTemplate.templates.find(
      (template) => template.id === id
    );

    if (template) {
      if (
        !favorites.some(
          (fav) => fav.id === template.id && fav.userId === user.id
        )
      ) {
        const favorite = {
          ...template,
          userId: user.id,
        };
        favorites.push(favorite);
        toast.open({
          message: "Plantilla agregada a favoritos",
          type: "success",
          position: "top-right",
          dismissible: true,
        });
      } else {
        toast.open({
          message: "La plantilla ya está marcada como favorita",
          type: "info",
          position: "top-right",
          dismissible: true,
        });
      }
    } else {
      toast.open({
        message: "Plantilla inexistente",
        type: "error",
        position: "top-right",
        dismissible: true,
      });
    }
  };

  const removeFavorite = (id) => {
    const user = useLogin.userLogged;
    const index = favorites.findIndex(
      (fav) => fav.id === id && fav.userId === user.id
    );

    if (index !== -1) {
      favorites.splice(index, 1);
      toast.open({
        message: "Plantilla removida de favoritos",
        type: "success",
        position: "top-right",
        dismissible: true,
      });
    } else {
      toast.open({
        message: "No se encontró la plantilla en favoritos",
        type: "error",
        position: "top-right",
        dismissible: true,
      });
    }
  };

  return { favoritesList, addFavorite, removeFavorite };
});
