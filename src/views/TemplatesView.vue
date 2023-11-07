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
        <Cards></Cards>
    </div>
</template>
  
<style>
@media (min-width: 1024px) {
  .templates {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
  