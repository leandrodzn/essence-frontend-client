<template>
  <header>
    <img
      alt="BeluEssence Creatives Logo"
      class="logo"
      src="@/assets/logo.svg"
      width="244"
      height="152"
    />

    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/templates">Plantillas</RouterLink>
      <RouterLink to="/">Contacto</RouterLink>
      <RouterLink to="/favorites">Favoritos</RouterLink>
      <RouterLink to="/about">Historial</RouterLink>
      <button to="/about" type="button" class="btn btn-primary">
        Iniciar sesión
      </button>
    </nav>
  </header>

  <RouterView />

  <Footer />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  /* border-left: 1px solid var(--color-border); */
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: right;
    margin-right: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
