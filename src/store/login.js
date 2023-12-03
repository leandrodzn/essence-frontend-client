import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { useUsersStore } from "./users";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

export const useLoginStore = defineStore("login", () => {
  const route = useRoute();
  const toast = useToast();
  const router = useRouter();
  const useUsers = useUsersStore();

  const isLogged = ref(false);

  const userLogged = ref({});

  const inLogin = computed(() => route.path === "/login");

  const inRegister = computed(() => route.path === "/register");

  const loginUser = (data) => {
    const user = useUsers.users.find((user) => user.email === data.email);

    if (user) {
      if (user.password === data.password) {
        toast.open({
          message: `Ha iniciado sesión como ${user.name} ${user.surname}`,
          type: "info",
          position: "top",
          dismissible: true,
        });

        setIsLogged(true);
        setUserLogged(user);

        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        toast.open({
          message: "Credenciales incorrectas, inténtelo de nuevo",
          type: "warning",
          position: "top-right",
          dismissible: true,
        });
      }
    } else {
      toast.open({
        message: "El usuario no existe, regístrese para ingresar",
        type: "warning",
        position: "top-right",
        dismissible: true,
        onClick: redirectRegister,
      });
    }
  };

  const logoutUser = () => {
    setIsLogged(false);
    setUserLogged({});

    toast.open({
      message: `Sesión finalizada`,
      type: "info",
      position: "top-right",
      dismissible: true,
    });
  };

  const setIsLogged = (value) => {
    isLogged.value = value;
  };

  const setUserLogged = (value) => {
    userLogged.value = value;
  };

  const redirectRegister = () => {
    router.push("/register");
  };

  return { isLogged, loginUser, inLogin, inRegister, userLogged, logoutUser };
});
