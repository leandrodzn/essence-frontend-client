<template class="body">
  <div class="container text-center">
    <div v-if="busy" class="m-50">
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
    <div v-else-if="!template">No encontrado</div>
    <div v-else class="row mb-0">
      <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
        <img
          :src="template?.ThumbnailImage?.link || ''"
          class="img-fluid px-1 py-1 main-template-image"
          :alt="template.name"
          loading="lazy"
        />
        <img
          v-if="template?.Images?.length > 0"
          :src="template?.Images[0]?.link || ''"
          class="img-fluid px-1 py-1 additional-template-image"
          style="max-width: 50%"
          :alt="template.name"
          loading="lazy"
        />
        <img
          v-if="template?.Images?.length > 0"
          :src="template?.Images[1]?.link || ''"
          class="img-fluid px-1 py-1 additional-template-image"
          style="max-width: 50%"
          :alt="template.name"
          loading="lazy"
        />
        <a
          class="btn btn-primary custom"
          :href="template.link"
          role="button"
          target="_blank"
        >
          Ver ejemplo
        </a>
      </div>
      <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12 content">
        <h1 class="title text-pink">{{ template.name }}</h1>
        <div class="text">
          <vue-feather
            type="minus"
            size="30px"
            stroke="rgb(150, 61, 130)"
            fill="rgb(150, 61, 130)"
          ></vue-feather
          ><br />
          <h4>${{ template.price }} MXN</h4>
          <p>{{ template.description }}</p>
          <p class="text-pink">Tipo de eventos recomendados:</p>
          <ul>
            <li
              v-for="(webTemplateEvent, index) in template.WebTemplateEvents"
              :key="index"
              
            >
              <span data-bs-toggle="tooltip" :data-bs-title="webTemplateEvent?.Event?.description">
                {{ webTemplateEvent?.Event?.name }}
              </span>
            </li>
          </ul>

          <div class="center">
            <template v-if="!favorite">
              <span>Agregar plantilla a favoritos</span>
              <button
                class="favorite"
                v-if="!favorite"
                @click="addTemplateToFavorite"
              >
                <vue-feather
                  type="heart"
                  size="36px"
                  stroke="rgb(150, 61, 130)"
                ></vue-feather>
              </button>
            </template>
            <template v-else>
              <span>Quitar plantilla de favoritos</span>
              <button class="favorite" @click="removeTemplateFromFavorites">
                <vue-feather
                  type="heart"
                  size="36px"
                  stroke="rgb(150, 61, 130)"
                  fill="rgb(150, 61, 130)"
                />
              </button>
            </template>
          </div>
          <p>
            <small class="text-pink">
              Para adquirir tu invitación a partir de esta plantilla, deberás
              ponerte en contacto con nosotros para realizar la compra y
              personalización.
            </small>
          </p>
        </div>
      </div>
    </div>
    <div v-if="!busy" class="row">
      <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
        <ContactTemplateForm :templateId="templateId" />
      </div>
    </div>
  </div>
</template>
<script>
import { useTemplatesStore } from "../store/templates.js";
import { useFavoritesStore } from "../store/favorites.js";
import { useLoginStore } from "../store/login.js";
import ContactTemplateForm from "@/forms/ContactTemplateForm.vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useRouter } from "vue-router";

export default {
  components: {
    ContactTemplateForm,
  },
  setup() {
    const useTemplate = useTemplatesStore();
    const useFavorite = useFavoritesStore();
    const useLogin = useLoginStore();
    const toast = useToast();
    const router = useRouter();

    return {
      useTemplate,
      useFavorite,
      useLogin,
      toast,
      router,
    };
  },
  props: {
    templateId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      template: {},
      favorite: null,
      busy: false,
    };
  },

  computed: {
    isFavorite() {
      const template = this.useFavorite.favoritesList.find(
        (fav) => fav.id === this.templateId
      );
      return template ? true : false;
    },

    isLogged() {
      return this.useLogin.isLogged;
    },
  },

  methods: {
    async getTemplate() {
      try {
        this.busy = true;

        const template = await this.useTemplate.getWebTemplateById({
          id: this.templateId,
        });

        this.template = { ...template };
      } catch (error) {
        if (error?.name === "NotFound") {
          // Redirect to templates page
          this.toast.open({
            message: "Plantilla web no encontrada",
            type: "error",
            position: "top-right",
            dismissible: true,
          });
          this.$router.push({ name: "Templates" });
        } else {
          this.toast.open({
            message: "Error al obtener plantilla web",
            type: "error",
            position: "top-right",
            dismissible: true,
          });
        }
      } finally {
        this.busy = false;
      }
    },

    async getTemplateFavorite() {
      try {
        const favorite = await this.useTemplate.getWebTemplateFavoriteById({
          id: this.templateId,
        });

        this.favorite = favorite || null;
      } catch (error) {
        this.toast.open({
          message: "Error al obtener información de plantilla favorita",
          type: "error",
          position: "top-right",
          dismissible: true,
        });
      }
    },

    async addTemplateToFavorite() {
      if (!this.isLogged) {
        this.toast.open({
          message: "Inicie sesión para agregar a favoritos",
          type: "info",
          position: "top-right",
          dismissible: true,
          onClick: this.redirectLogin,
        });
        return;
      }

      try {
        const favorite = await this.useTemplate.createWebTemplateFavorite({
          id: this.templateId,
        });

        this.favorite = favorite || null;

        this.toast.open({
          message: "Plantilla agregada a favoritos",
          type: "success",
          position: "top-right",
          dismissible: true,
          onClick: this.redirectFavorites,
        });
      } catch (error) {
        this.toast.open({
          message: "Error al agregar plantilla a favoritos",
          type: "error",
          position: "top-right",
          dismissible: true,
        });
      }
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
          id: this.templateId,
        });

        this.favorite = null;

        this.toast.open({
          message: "Plantilla removida de favoritos",
          type: "success",
          position: "top-right",
          dismissible: true,
          onClick: this.redirectFavorites,
        });
      } catch (error) {
        this.toast.open({
          message: "Error al remover plantilla de favoritos",
          type: "error",
          position: "top-right",
          dismissible: true,
        });
      }
    },

    redirectLogin() {
      this.router.push("/login");
    },

    redirectFavorites() {
      this.router.push("/favorites");
    },
  },
  watch: {
    templateId: {
      handler: function (value) {
        if (value != -1) {
          this.getTemplate();

          if (this.isLogged) this.getTemplateFavorite();
        }
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.main-template-image {
  object-fit: cover;
  width: 720px;
  height: 340px;
}

.additional-template-image {
  object-fit: cover;
  width: 360px;
  height: 250px;
}

.content {
  text-align: left;
}

.card {
  margin-bottom: 1.5em;
  background-color: rgb(237, 230, 222);
}

.text {
  font-size: 1.3em;
  font-weight: normal;
}

.text-pink {
  color: var(--primary);
}

.custom {
  margin: 1rem 0 1rem 0;
  font-size: 1rem;
  border-radius: 2rem;
  float: inline-start;
}

.favorite {
  background: #00000000;
  border-color: #00000000;
  padding: 8px 0 0 0.5em;
}

.center {
  display: flex;
  align-items: center; /* Centra verticalmente los elementos hijos */
}
</style>
