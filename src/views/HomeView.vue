<script>
import { useLoginStore } from "../store/login";
import CarouselPlantillas from "../components/CarouselPlantillas.vue";
import GridHome from "../components/GridHome.vue";

export default {
  components: {
    CarouselPlantillas,
    GridHome,
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
    <div class="subtitle">
      <h4>
        Olvida lo convencional y date la oportunidad de tener una invitación
        única para tu evento
      </h4>
    </div>
    <div class="slide">
      <CarouselPlantillas />
    </div>
    <div class="subtitle">
      <h4>¿Por qué escoger una invitación con formato web?</h4>
    </div>
    <div class="grid">
      <GridHome />
    </div>
  </div>
</template>
<style>
.slide {
  padding: 0 50px;
  margin-top: 60px;
}

.banner {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 600px;
  background: url("/banner1.png") center/cover; /* Reemplaza 'nombre-de-tu-imagen.jpg' con el nombre de tu imagen */
}

.grid {
  margin-top: 60px;
  margin-bottom: 90px;
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
  margin-top: 60px;
  text-align: center;
  font-weight: lighter;
}

.subtitle {
  width: 700px;
  margin: 0 auto;
}
@media (min-width: 1024px) {
}
</style>
