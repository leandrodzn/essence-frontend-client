<script>
import FavoriteCards from "../components/FavoriteCards.vue";

export default {
  components: {
    FavoriteCards,
  },
};
</script>

<template>
  <div class="favorites">
    <div class="text-center">
      <h1 class="title">Mis plantillas favoritas</h1>
      <h4 class="subtitle">Revive el momento</h4>
    </div>
    <FavoriteCards />
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
