<script>
import { useLoginStore } from "../store/login";
import Carousel from "../components/Carousel.vue";

export default {
  components: {
    Carousel,
  },
  setup() {
    const useLogin = useLoginStore();
    return {
      useLogin,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <div class="home">
    <div class="banner">
      <div class="container-banner">
        <h1 class="title">Invitaciones Digitales,</h1>
        <h1 class="title">Experiencias Memorables</h1>
        <p>
          Creamos invitaciones digitales con formato de paginás web a partir de
          plantillas que tú puedes personalizar
        </p>
        <button
          @click="redirectLogin"
          type="button"
          style="width: 200px; margin-top: 20px"
          class="btn btn-primary mx-2"
          v-if="!isLogged"
        >
          Iniciar sesión
        </button>
      </div>
    </div>
    <h4>
      Olvida lo convencional y date la oportunidad de tener una invitación única
      para tu evento
    </h4>
    <Carousel />
  </div>
</template>
<style>
.banner {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 600px;
  background: url("/banner1.png") center/cover; /* Reemplaza 'nombre-de-tu-imagen.jpg' con el nombre de tu imagen */
}

.container-banner {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-left: 40px;
}

.title {
  color: rgb(150, 61, 130);
}

.container-banner p {
  margin-top: 20px;
  font-size: 20px;
  color: #282828;
}

.home h4 {
  margin-top: 40px;
  text-align: center;
  font-weight: lighter;
}

@media (min-width: 1024px) {
}
</style>
