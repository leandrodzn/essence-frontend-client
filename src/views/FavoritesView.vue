<script>
import Cards from "../components/Cards.vue";

export default {
  components: {
    Cards,
  },
};
</script>

<template>
  <div class="favorites">
    <div class="text-center">
      <h1 class="title">Mis plantillas favoritas</h1>
      <h4 class="subtitle">Revive el momento</h4>
    </div>
    <Cards :favorite="true"></Cards>
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
  .favorites {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
