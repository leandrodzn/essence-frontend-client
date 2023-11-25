import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

// bodas religiosas, bodas civiles,  cumpleaños, xv años, bautizos, fiesta de gala, evento casual, reunión social, baby showers y graduaciones

export const useFavoritesStore = defineStore("favorites", () => {
  const favorites = reactive([
    {
      id: 1,
      name: "Elegante Gala",
      price: "1200",
      link: "",
      image:
        "https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg",
      description:
        "Una plantilla elegante y sofisticada perfecta para eventos de gala y ocasiones especiales. Con detalles finamente diseñados que resaltan la exclusividad del evento.",
      events: ["Bodas Civiles", "Fiesta de Gala", "Reunión Social"],
    },
    {
      id: 2,
      name: "Fiesta en el Jardín",
      price: "800",
      link: "",
      image:
        "https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg",
      description:
        "Una plantilla vibrante y colorida ideal para celebraciones al aire libre. Su diseño fresco y alegre encaja perfectamente con eventos en jardines y entornos naturales.",
      events: ["Cumpleaños", "Baby Showers", "Evento Casual"],
    },
  ]);

  return { favorites };
});
