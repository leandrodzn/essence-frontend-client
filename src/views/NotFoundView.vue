<template>
  <div class="container text-center">
    <div class="text-center mt-4">
      <h3 class="title">Página no encontrada</h3>

      <img
        alt="Not Found"
        class="mt-4"
        src="/error.png"
        width="144"
        height="122"
      />
      <h5 class="subtitle mt-4 cursor-pointer" @click="redirectHome">
        Ir a Inicio
      </h5>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    redirectHome() {
      this.router.push("/");
    },
  },
};
</script>
<style scoped>
.title {
  font-weight: bold;
  color: var(--primary);
}

.subtitle {
  font-size: 130%;
  &:hover {
    font-size: 135%;
  }
}
</style>
