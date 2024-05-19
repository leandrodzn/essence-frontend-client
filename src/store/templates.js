import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "@axios";

const route = "/client/web-templates";

export const useTemplatesStore = defineStore("templates", () => {
  const templates = ref([]);
  const count = ref(0);

  const getAllWebTemplates = async ({ filters, update }) => {
    const params = {
      filter: filters,
    };

    const response = await axios.get(route, params);

    const shouldUpdate = update ?? false;
    if (shouldUpdate) {
      templates.value = response.data.rows;
      count.value = response.data.count;
    }

    return response.data;
  };

  const getWebTemplateById = async ({ id }) => {
    const response = await axios.get(`${route}/${id}`);

    return response.data;
  };

  const getWebTemplateFavoriteById = async ({ id }) => {
    const response = await axios.get(`${route}/${id}/favorite`);

    return response.data;
  };

  const createWebTemplateFavorite = async ({ id }) => {
    const response = await axios.post(`${route}/${id}/favorite`);

    return response.data;
  };

  const deleteWebTemplateFavorite = async ({ id }) => {
    const response = await axios.delete(`${route}/${id}/favorite`);

    return response;
  };

  return {
    templates,
    count,
    getAllWebTemplates,
    getWebTemplateById,
    getWebTemplateFavoriteById,
    createWebTemplateFavorite,
    deleteWebTemplateFavorite,
  };
});
