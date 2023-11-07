<script>
import Cards from "../components/Cards.vue";

export default {
  components: {
    Cards,
  },
};
</script>

<template>
  <div class="templates">
    <div class="text-center">
      <h1 class="title">Escoge tu plantilla</h1>
      <h4 class="subtitle">Empecemos la magia</h4>
    </div>
    <Cards :favorite="false"></Cards>
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
