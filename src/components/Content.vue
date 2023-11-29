<template class="body">
  <div class="container text-center">
    <div v-if="!template">No encontrado</div>
    <div v-else class="row mb-0">
      <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
        <img
          src="https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg"
          class="img-fluid px-1 py-1"
          alt="..."
        />
        <img
          src="https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg"
          class="img-fluid px-1 py-1"
          style="max-width: 50%"
          alt="..."
        />
        <img
          src="https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg"
          class="img-fluid px-1 py-1"
          style="max-width: 50%"
          alt="..."
        />
        <a class="btn btn-primary custom" href="#" role="button">Ver ejemplo</a>
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
            <li v-for="(event, index) in template.events" :key="index">
              {{ event }}
            </li>
          </ul>

          <div class="center">
            <template v-if="!isFavorite">
              <span>Agregar plantilla a favoritos</span>
              <button
                class="favorite"
                v-if="!isFavorite"
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
                ></vue-feather>
              </button>
            </template>
          </div>
          <p>
            <small class="text-pink"
              >Para adquirir tu invitación a partir de esta plantilla, deberás
              ponerte en contacto con nosotros para realizar la compra y
              personalización.</small
            >
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
        <ContactTemplateForm />
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
      favorite: false,
      rating: 0,
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
    toggleFavorite() {
      this.favorite = !this.favorite;
    },
    getTemplate() {
      const template = this.useTemplate.getOneTemplate(this.templateId);
      this.template = template;
    },

    addTemplateToFavorite() {
      if (this.isLogged) {
        this.useFavorite.addFavorite(this.templateId);
      } else {
        this.toast.open({
          message: "Inicie sesión para agregar a favoritos",
          type: "info",
          position: "top-right",
          dismissible: true,
          onClick: this.redirectLogin,
        });
      }
    },

    removeTemplateFromFavorites() {
      this.useFavorite.removeFavorite(this.templateId);
    },

    redirectLogin() {
      this.router.push("/login");
    },
  },
  watch: {
    templateId: {
      handler: function (value) {
        this.getTemplate(value);
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
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
