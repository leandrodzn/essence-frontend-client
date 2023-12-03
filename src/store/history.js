import { computed, reactive, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useTemplatesStore } from "./templates";
import { useLoginStore } from "./login.js";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useRouter } from "vue-router";

export const useHistoryStore = defineStore("history", () => {
  const useTemplate = useTemplatesStore();
  const useLogin = useLoginStore();
  const toast = useToast();
  const router = useRouter();

  let history = reactive([]);

  const historyList = computed(() => {
    const user = useLogin.userLogged;
    return history.filter((template) => template.userId === user.id);
  });

  const getDateTime = () => {
    let currentDate = new Date();

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

  const redirectHistory = () => {
    router.push("/history");
  };

  const addHistory = (id) => {
    const user = useLogin.userLogged;

    const template = useTemplate.templates.find(
      (template) => template.id === id
    );

    if (template) {
      const item = {
        ...template,
        userId: user.id,
        dateTime: getDateTime(),
      };

      history.push(item);

      toast.open({
        message: "Contacto agregado al historial",
        type: "success",
        position: "top-right",
        dismissible: true,
        onClick: redirectHistory,
      });
    } else {
      toast.open({
        message: "Plantilla inexistente",
        type: "error",
        position: "top-right",
        dismissible: true,
      });
    }
  };

  // Local Storage
  // Get local storage data
  const initializeStore = () => {
    const storedData = localStorage.getItem("historyStore");
    if (storedData) {
      history.length = 0;
      history.push(...JSON.parse(storedData));
    }
  };

  // Save local storage data
  const storeDataInLocalStorage = () => {
    localStorage.setItem("historyStore", JSON.stringify(history));
  };

  onMounted(() => {
    initializeStore();
  });

  watch([history], () => {
    storeDataInLocalStorage();
  });

  return { historyList, addHistory };
});
