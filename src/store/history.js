import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "@axios";

const route = "/client/template-contact";

export const useHistoryStore = defineStore("history", () => {
  const history = ref([]);
  const count = ref(0);

  const createWebTemplateHistory = async ({ id, data }) => {
    const response = await axios.post(`${route}/${id}`, data);

    return response.data;
  };

  const getDateTime = (date) => {
    let currentDate = new Date(date);

    let day = currentDate.getDate();
    let month = currentDate.toLocaleString("es-ES", { month: "long" });
    let year = currentDate.getFullYear();

    let hours = currentDate.getHours();
    let minutes = ("0" + currentDate.getMinutes()).slice(-2);
    let seconds = ("0" + currentDate.getSeconds()).slice(-2);

    let ampm = hours >= 12 ? "p.m." : "a.m.";
    hours = hours % 12;
    hours = hours ? hours : 12;

    let formatDateTime = `${day} de ${month} de ${year} a las ${hours}:${minutes} ${ampm}`;
    return formatDateTime;
  };

  const getAllTemplateContacts = async ({ update }) => {
    const response = await axios.get(route);

    const rowsWithFormattedDate = (response.data?.rows || []).map((row) => {
      return {
        ...row,
        formattedDate: getDateTime(row.created_at),
      };
    });

    response.data.rows = rowsWithFormattedDate;

    const shouldUpdate = update ?? false;
    if (shouldUpdate) {
      history.value = response.data.rows;
      count.value = response.data.count;
    }

    return response.data;
  };

  const deleteWebTemplateContact = async ({ id }) => {
    const response = await axios.delete(`${route}/${id}`);

    return response.data;
  };

  return {
    history,
    count,
    createWebTemplateHistory,
    getAllTemplateContacts,
    deleteWebTemplateContact,
  };
});
