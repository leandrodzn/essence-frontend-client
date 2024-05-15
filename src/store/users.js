import { reactive, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import axios from "@axios";

const route = "/client/customers";

export const useUsersStore = defineStore("users", () => {
  const createCustomer = async ({ data }) => {
    const response = await axios.post(route, data);

    return response.data;
  };

  return { createCustomer };
});
