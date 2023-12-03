<script>
import History from "../components/History.vue";

export default {
  components: {
    History,
  },
};
</script>

<template>
  <div class="history">
    <div class="text-center">
      <h1 class="title">Historial</h1>
      <h4 class="subtitle">Todas las plantillas que has seleccionado</h4>
      <History class="mt-4"></History>
    </div>
  </div>
</template>

<style>
.title {
  font-weight: bold;
  color: var(--primary);
}

.subtitle {
  font-weight: lighter;
}

@media (min-width: 1024px) {
  .history {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
