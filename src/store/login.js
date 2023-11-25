import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const useLoginStore = defineStore("login", () => {
  const route = useRoute();

  const isLogged = ref(true);

  const inLogin = computed(() => route.path === "/login");

  const inRegister = computed(() => route.path === "/register");

  const setIsLogged = (value) => {
    isLogged.value = value;
  };

  return { isLogged, setIsLogged, inLogin, inRegister };
});
