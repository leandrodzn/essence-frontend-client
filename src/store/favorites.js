import { computed, reactive, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useTemplatesStore } from "./templates";
import { useLoginStore } from "./login.js";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useRouter } from "vue-router";

export const useFavoritesStore = defineStore("favorites", () => {
  const useTemplate = useTemplatesStore();
  const useLogin = useLoginStore();
  const toast = useToast();
  const router = useRouter();

  let favorites = reactive([]);

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
          onClick: redirectFavorites,
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
        onClick: redirectFavorites,
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

  const redirectFavorites = () => {
    router.push("/favorites");
  };

  //Local Storage
  const initializeStore = () => {
    const storedData = localStorage.getItem("favoritesStore");
    if (storedData) {
      favorites.length = 0;
      favorites.push(...JSON.parse(storedData));
    }
  };

  // Save local storage data
  const storeDataInLocalStorage = () => {
    localStorage.setItem("favoritesStore", JSON.stringify(favorites));
  };

  onMounted(() => {
    initializeStore();
  });

  watch([favorites], () => {
    storeDataInLocalStorage();
  });

  return { favoritesList, addFavorite, removeFavorite };
});
