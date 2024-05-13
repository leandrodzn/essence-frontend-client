import { reactive, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useRouter } from "vue-router";
import axios from "@axios";

const route = "/client/customers";

export const useUsersStore = defineStore("users", () => {
  const toast = useToast();
  const router = useRouter();

  let users = reactive([]);

  //Local Storage
  const initializeStore = () => {
    const storedData = localStorage.getItem("usersStore");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      users.length = 0;
      users.push(...parsedData.users);
      id = parsedData.id;
    }
  };

  // Save local storage data
  const storeDataInLocalStorage = () => {
    localStorage.setItem("usersStore", JSON.stringify({ users, id }));
  };

  onMounted(() => {
    initializeStore();
  });

  watch([users], () => {
    storeDataInLocalStorage();
  });

  const createCustomer = async ({ data }) => {
    const response = await axios.post(route, data);

    return response.data;
  };

  return { users, createCustomer };
});
