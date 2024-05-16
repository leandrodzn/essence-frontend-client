import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "@axios";

const route = "/client/web-templates";

export const useTemplatesStore = defineStore("templates", () => {
  const templates = ref([]);
  const count = ref(0);

  const getOneTemplate = (id) => {
    return templates.value.find((template) => template.id === id);
  };

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

  return { templates, count, getOneTemplate, getAllWebTemplates };
});
