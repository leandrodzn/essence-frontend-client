import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useTemplatesStore = defineStore("templates", () => {
  const templates = reactive([
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
    {
      id: 3,
      name: "Noche de Estrellas",
      price: "1500",
      link: "",
      image:
        "https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg",
      description:
        "Una plantilla que evoca la magia de una noche estrellada. Perfecta para eventos nocturnos y celebraciones que buscan un toque de encanto celestial.",
      events: ["Bodas Religiosas", "XV Años", "Graduaciones"],
    },
    {
      id: 4,
      name: "Celebremos Juntos",
      price: "1000",
      link: "",
      image:
        "https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg",
      description:
        "Una plantilla versátil que se adapta a diversas celebraciones. Su diseño clásico y elegante la hace adecuada para eventos como bodas y cumpleaños.",
      events: ["Bodas Civiles", "Cumpleaños", "Reunión Social"],
    },
    {
      id: 5,
      name: "Evento Exclusivo",
      price: "2000",
      link: "",
      image:
        "https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg",
      description:
        "Una plantilla diseñada para eventos exclusivos y de alto nivel. Sus detalles refinados y su estilo lujoso la convierten en la elección perfecta para ocasiones especiales.",
      events: ["Fiesta de Gala", "Bodas Religiosas", "Graduaciones"],
    },
    {
      id: 6,
      name: "Fiesta de Máscaras",
      price: "1300",
      link: "",
      image:
        "https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg",
      description:
        "Una plantilla única inspirada en fiestas de máscaras. Ideal para eventos temáticos y celebraciones en las que se busca un toque misterioso y divertido.",
      events: ["Cumpleaños", "Evento Casual", "Reunión Social"],
    },
    {
      id: 7,
      name: "Lujo en la Ciudad",
      price: "1800",
      link: "",
      image:
        "https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg",
      description:
        "Una plantilla que refleja el lujo y la elegancia de la vida urbana. Perfecta para eventos sofisticados y celebraciones en entornos urbanos.",
      events: ["Fiesta de Gala", "Bodas Civiles", "Graduaciones"],
    },
    {
      id: 8,
      name: "Brindis Bajo las Estrellas",
      price: "1600",
      link: "",
      image:
        "https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg",
      description:
        "Una plantilla romántica diseñada para eventos nocturnos. Con detalles que evocan la magia de un brindis bajo las estrellas, es la elección perfecta para bodas y aniversarios.",
      events: ["Bodas Religiosas", "Fiesta de Gala", "Reunión Social"],
    },
    {
      id: 9,
      name: "Cena de Gala",
      price: "1400",
      link: "",
      image:
        "https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg",
      description:
        "Una plantilla elegante diseñada para cenas de gala y eventos formales. Sus detalles refinados y su estilo clásico la convierten en la elección perfecta para ocasiones especiales.",
      events: ["Fiesta de Gala", "Bodas Civiles", "Reunión Social"],
    },
    {
      id: 10,
      name: "Gran Celebración",
      price: "2200",
      link: "",
      image:
        "https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg",
      description:
        "Una plantilla diseñada para grandes celebraciones y eventos especiales. Con un diseño llamativo y detalles festivos, es la elección perfecta para eventos que buscan dejar una impresión duradera.",
      events: ["Cumpleaños", "Graduaciones", "Reunión Social"],
    },
  ]);

  return { templates };
});
