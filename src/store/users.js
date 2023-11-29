import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useRouter } from "vue-router";

let id = 2;

export const useUsersStore = defineStore("users", () => {
  const toast = useToast();
  const router = useRouter();

  const users = reactive([
    {
      id: 1,
      name: "Leandro",
      surname: "Dzib",
      phone: "9861135058",
      email: "leandro@mail.com",
      password: "leandro1.",
    },
  ]);

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
      users.push({
        ...data,
        id,
      });

      toast.open({
        message: "Registro exitoso",
        type: "success",
        position: "top-right",
        dismissible: true,
      });

      id++;

      setTimeout(() => {
        router.push("/login");
      }, 1000);
    }
  };

  return { users, addUser };
});
