<template>
  <div class="container mb-4">
    <select class="custom-select">
      <option selected>Buscar por tipo</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>

  <div v-if="favorites.length === 0" class="">No hay plantillas.</div>
  <div v-else class="container text-center">
    <div class="row">
      <div v-for="(template, index) in favorites" :key="index" class="col">
        <CardTemplate :template="template" favorite />
      </div>
    </div>
  </div>
</template>
<script>
import CardTemplate from "./CardTemplate.vue";
import { useFavoritesStore } from "@/store/favorites.js";

export default {
  components: {
    CardTemplate,
  },
  setup() {
    const useFavorite = useFavoritesStore();
    return {
      useFavorite,
    };
  },
  props: {
    favorite: Boolean,
  },
  data: () => ({}),
  computed: {
    favorites() {
      return this.useFavorite.favorites;
    },
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.custom-select {
  padding: 0.5rem 3rem 0.5rem 2rem;
  font-size: 1rem;
  background-color: rgb(150, 61, 130);
  color: white;
  border: 2px solid rgb(150, 61, 130);
  border-radius: 2rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative; /* Necesario para posicionar la flecha */
  background-image: url("data:image/svg+xml;utf8,<svg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right;
  background-size: 30px;
  transition: border-color 0.2s; /* Agrega una transición para suavizar el cambio de color del borde */
}

.custom-select:focus,
.custom-select:hover {
  border-color: white; /* Establece el color de borde para el estado de enfoque */
}

.custom-select::after {
  content: "\25BC"; /* Código de flecha hacia abajo */
  position: absolute;
  top: 50%;
  right: 1rem; /* Ajusta la posición de la flecha */
  transform: translateY(-50%);
  font-size: 24px; /* Tamaño de la flecha personalizada */
  color: white; /* Color blanco */
  pointer-events: none; /* Evita interacciones con la flecha */
}

.custom-select option:hover,
.custom-select option:focus {
  background-color: rgb(
    150,
    61,
    130
  ); /* Cambia el color de fondo cuando se pasa el mouse sobre las opciones */
  color: white; /* Cambia el color del texto a blanco cuando se pasa el mouse sobre las opciones */
}
</style>
