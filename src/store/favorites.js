import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "@axios";

const route = "/client/favorites";

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = ref([]);
  const count = ref(0);

  const getAllWebTemplatesFavorites = async ({ filters, update }) => {
    const params = {
      filter: filters,
    };

    const response = await axios.get(route, params);

    const shouldUpdate = update ?? false;
    if (shouldUpdate) {
      favorites.value = response.data.rows;
      count.value = response.data.count;
    }

    return response.data;
  };

  return { favorites, getAllWebTemplatesFavorites };
});
