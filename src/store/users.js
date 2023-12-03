import { reactive, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useRouter } from "vue-router";

export const useUsersStore = defineStore("users", () => {
  const toast = useToast();
  const router = useRouter();

  let users = reactive([]);

  let id = 1;

  const addUser = (data) => {
    const user = users.find((user) => user.email === data.email);

    if (user) {
      toast.open({
        message: "Ingrese un correo electrónico diferente",
        type: "warning",
        position: "top-right",
        dismissible: true,
      });
    } else {
      let userId = id;
      id++;

      users.push({
        ...data,
        id: userId,
      });

      toast.open({
        message: "Registro exitoso",
        type: "success",
        position: "top-right",
        dismissible: true,
      });

      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }
  };

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

  return { users, addUser };
});
