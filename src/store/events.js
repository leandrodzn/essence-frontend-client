import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { useToast } from "vue-toast-notification";

import axios from "@axios";

const route = "/client/events";

export const useEventsStore = defineStore("events", () => {
  const events = ref([]);
  const count = ref(0);

  const toast = useToast();

  const getAllEvents = async ({ params, update }) => {
    const response = await axios.get(route, params);

    const shouldUpdate = update ?? false;
    if (shouldUpdate) {
      events.value = response.data.rows;
      count.value = response.data.count;
    }

    return response.data;
  };

  // onMounted(async () => {
  //   try {
  //     await getAllEvents({ update: true });
  //   } catch (error) {
  //     toast.open({
  //       message: "Error al obtener eventos",
  //       type: "error",
  //       position: "top-right",
  //       dismissible: true,
  //     });
  //   }
  // });

  return { events, getAllEvents };
});
