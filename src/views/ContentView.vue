<script>
import content from "../components/Content.vue";

export default {
  components: {
    content,
  },
};
</script>

<template>
  <div class="content">
    <div class="">
      <content></content>
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
  .content {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
  