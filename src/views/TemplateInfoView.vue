<template>
  <div class="content">
    <div class="">
      <content :template-id="template"></content>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import Content from "../components/Content.vue";

export default {
  components: {
    Content,
  },
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
  data() {
    return {
      template: -1,
    };
  },
  mounted() {
    this.template = isNaN(this.$route.params.id)
      ? -1
      : Number(this.$route.params.id);

    window.scrollTo(0, 0); // lleva a arriba
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .content {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
