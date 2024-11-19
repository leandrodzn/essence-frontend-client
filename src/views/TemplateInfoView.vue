<template>
  <div class="content">
    <div class="">
      <Content v-if="template" content :template-id="template" />
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import Content from "../components/Content.vue";

export default {
  components: {
    Content,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    return {
      route,
      router,
    };
  },
  data() {
    return {
      template: null,
    };
  },
  mounted() {
    let idValue = this.$route.params.id;

    if (!idValue || !Number.isInteger(Number(idValue))) {
      this.$router.push({ name: "Templates" });
      return;
    }

    this.template = Number(idValue);

    window.scrollTo(0, 0); // Scroll to top of the page
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
