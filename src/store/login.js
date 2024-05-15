import { ref, computed, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import axios from "@axios";

const routeBackend = "/client/auth/login";

export const useLoginStore = defineStore("login", () => {
  const route = useRoute();
  const toast = useToast();
  const router = useRouter();

  const isLogged = ref(false);

  const userLogged = ref({});

  const inLogin = computed(() => route.path === "/login");

  const inRegister = computed(() => route.path === "/register");

  const logout = () => {
    setIsLogged(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    router.push("/login");

    toast.open({
      message: `Sesión finalizada`,
      type: "info",
      position: "top-right",
      dismissible: true,
    });
  };

  const login = async ({ data }) => {
    const response = await axios.post(routeBackend, data);

    const accessToken = response.data.jwt;
    localStorage.setItem("accessToken", accessToken);
    const user = response.data.user;

    setIsLogged(true);
    setUserLogged(user);

    return response.data;
  };

  const setIsLogged = (value) => {
    isLogged.value = value;
  };

  const setUserLogged = (value) => {
    userLogged.value = value;
    localStorage.setItem("userData", JSON.stringify(value));
  };

  // Local Storage
  // Get local storage data
  const initializeStore = () => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedData = JSON.parse(storedUser);
      isLogged.value = true;
      userLogged.value = parsedData;
    }
  };

  onMounted(() => {
    initializeStore();
  });

  return {
    isLogged,
    inLogin,
    inRegister,
    userLogged,
    logout,
    login,
  };
});
