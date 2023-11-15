import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const useLoginStore = defineStore("login", () => {
  const route = useRoute();

  const isLogged = ref(false);

  const inLogin = computed(() => route.path === "/login");

  const setIsLogged = (value) => {
    isLogged.value = value;
  };

  const setInLogin = (value) => {
    inLogin.value = value;
  };

  return { isLogged, setIsLogged, inLogin, setInLogin };
});
