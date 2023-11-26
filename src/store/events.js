import { defineStore } from "pinia";

export const useEventsStore = defineStore("events", () => {
  const events = [
    {
      value: "boda_religiosa",
      name: "Bodas Religiosas",
    },
    {
      value: "boda_civil",
      name: "Bodas Civiles",
    },
    {
      value: "fiesta_gala",
      name: "Fiesta de Gala",
    },
    {
      value: "reunion_social",
      name: "Reunión Social",
    },
    {
      value: "evento_casual",
      name: "Evento Casual",
    },
    {
      value: "cumple",
      name: "Cumpleaños",
    },
    {
      value: "xv",
      name: "XV Años",
    },
    {
      value: "bautizo",
      name: "Bautizos",
    },
    {
      value: "baby_shower",
      name: "Baby Showers",
    },
    {
      value: "graduacion",
      name: "Graduaciones",
    },
  ];

  return { events };
});
