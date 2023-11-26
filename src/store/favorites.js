import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { useTemplatesStore } from "./templates";

const useTemplate = useTemplatesStore();

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = reactive([]);

  const addFavorite = (id) => {
    const template = useTemplate.templates.find(
      (template) => template.id === id
    );

    if (template) {
      if (!favorites.some((fav) => fav.id === template.id)) {
        favorites.push(template);
      } else {
        console.warn(
          `El template con ID ${id} ya está en la lista de favoritos.`
        );
      }
    } else {
      console.warn(`El template con ID ${id} no existe.`);
    }
  };

  const removeFavorite = (id) => {
    const index = favorites.findIndex((fav) => fav.id === id);

    if (index !== -1) {
      favorites.splice(index, 1);
    } else {
      console.warn(
        `No se encontró el template con ID ${id} en la lista de favoritos.`
      );
    }
  };

  return { favorites, addFavorite, removeFavorite };
});
