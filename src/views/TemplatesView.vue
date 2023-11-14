<script>
import TemplatesCards from "../components/TemplatesCards.vue";

export default {
  components: {
    TemplatesCards,
  },
};
</script>

<template>
  <div class="templates">
    <div class="text-center">
      <h1 class="title">Escoge tu plantilla</h1>
      <h4 class="subtitle">Empecemos la magia</h4>
    </div>
    <TemplatesCards />
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
  .templates {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
