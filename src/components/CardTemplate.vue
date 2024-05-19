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
        @click="removeTemplateFromFavorites"
      ></vue-feather>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { useFavoritesStore } from "../store/favorites.js";
import { useTemplatesStore } from "../store/templates.js";
import { useToast } from "vue-toast-notification";
import { useLoginStore } from "../store/login.js";

export default {
  components: {},
  setup() {
    const router = useRouter();
    const useTemplate = useTemplatesStore();
    const useFavorite = useFavoritesStore();
    const useLogin = useLoginStore();
    const toast = useToast();

    return {
      useTemplate,
      useFavorite,
      useLogin,
      toast,
      router,
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
  computed: {
    isLogged() {
      return this.useLogin.isLogged;
    },
  },
  methods: {
    redirectTemplate() {
      this.router.push(`/template/${this.template.id}`);
    },

    async removeTemplateFromFavorites() {
      if (!this.isLogged) {
        this.toast.open({
          message: "Inicie sesión para manejar favoritos",
          type: "info",
          position: "top-right",
          dismissible: true,
          onClick: this.redirectLogin,
        });
        return;
      }

      try {
        const favorite = await this.useTemplate.deleteWebTemplateFavorite({
          id: this.template.id,
        });

        this.toast.open({
          message: "Plantilla removida de favoritos",
          type: "success",
          position: "top-right",
          dismissible: true,
        });

        this.$emit("refresh");
      } catch (error) {
        this.toast.open({
          message: "Error al remover plantilla de favoritos",
          type: "error",
          position: "top-right",
          dismissible: true,
        });
      }
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
