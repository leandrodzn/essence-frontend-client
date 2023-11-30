<script>
import { useLoginStore } from "../store/login";
export default {
  setup() {
    const useLogin = useLoginStore();

    return {
      useLogin,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
