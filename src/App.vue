<template>
  <header :class="{ inLogin: inLogin }">
    <img
      alt="BeluEssence Creatives Logo"
      class="logo cursor-pointer"
      :class="{ inLogin: inLogin }"
      src="../../public/logo.svg"
      width="244"
      height="152"
      @click="redirectHome"
    />
    <nav v-if="!inLogin">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/templates">Plantillas</RouterLink>
      <RouterLink to="/contact">Contacto</RouterLink>
      <RouterLink to="/favorites">Favoritos</RouterLink>
      <RouterLink to="/history">Historial</RouterLink>
      <button @click="redirectLogin" type="button" class="btn btn-primary mx-2">
        Iniciar sesión
      </button>
    </nav>
  </header>

  <RouterView class="main-content" />

  <Footer />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import { useRouter } from "vue-router";
import { useLoginStore } from "@/store/login.js";

export default {
  components: {
    Footer,
  },
  setup() {
    const router = useRouter();

    const useLogin = useLoginStore();

    return {
      router,
      useLogin,
    };
  },
  computed: {
    inLogin() {
      return this.useLogin.inLogin;
    },
  },
  methods: {
    redirectHome() {
      this.router.push("/");
    },

    redirectLogin() {
      this.router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.main-content {
  min-height: calc(100vh - (100px));
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

@media (hover: hover) {
  a:hover {
    border-bottom: 1px solid var(--primary);
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: calc(var(--section-gap) / 4);

    &.inLogin {
      justify-content: center;
      padding-right: 0;
    }
  }

  .logo {
    margin: 0 2rem 0 0;

    &.inLogin {
      margin: 0 0 2rem 0;
    }
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
