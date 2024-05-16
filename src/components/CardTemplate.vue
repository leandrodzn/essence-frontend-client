<template>
  <div class="card cursor-pointer" style="width: 100%">
    <img
      @click="redirectTemplate"
      :src="template.image"
      class="card-img-top template-image"
      :alt="template.name"
    />
    <div class="card-body text-center">
      <h4 class="card-title cursor-pointer" @click="redirectTemplate">
        {{ template.name }}
      </h4>
      <vue-feather
        type="minus"
        size="30px"
        stroke="rgb(150, 61, 130)"
        fill="rgb(150, 61, 130)"
      ></vue-feather>
      <h3 class="card-text" @click="redirectTemplate">
        ${{ template.price }} MXN
      </h3>
      <vue-feather
        type="heart"
        size="36px"
        class="icon cursor-pointer"
        stroke="rgb(150, 61, 130)"
        fill="rgb(150, 61, 130)"
        v-if="favorite"
        @click="unfavorite"
      ></vue-feather>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { useFavoritesStore } from "../store/favorites.js";

export default {
  components: {},
  setup() {
    const router = useRouter();
    const useFavorite = useFavoritesStore();

    return {
      router,
      useFavorite,
    };
  },
  props: {
    template: {
      type: Object,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    redirectTemplate() {
      this.router.push(`/template/${this.template.id}`);
    },

    unfavorite() {
      this.useFavorite.removeFavorite(this.template.id);
    },
  },
};
</script>
<style class="scss" scoped>
.template-image {
  width: 100%; /* Ajusta la imagen al ancho completo del contenedor */
  height: 200px; /* Establece una altura fija para la imagen */
  object-fit: cover; /* Mantiene la relación de aspecto y recorta la imagen si es necesario */
  /* border-radius: 0px; Agrega bordes redondeados si es necesario */
}

.card-title {
  font-weight: bold;
  color: var(--primary);
}

.card {
  margin-bottom: 1.5em;
  background-color: rgb(237, 230, 222);
}

.card-text {
  font-size: x-large;
  font-weight: normal;
}

.icon {
  float: inline-end;
  margin: 0%;
}
</style>
