<script>
import ContactForm from "@/forms/ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
};
</script>

<template>
  <div class="container">
    <div class="text-center">
      <h1 class="title">Ponte en contacto con nosotros</h1>
      <h4 class="subtitle">Creamos para ti</h4>
      <ContactForm class="mt-4 mb-4" />
    </div>
  </div>
</template>

<style scoped>
.title {
  font-weight: bold;
  color: var(--primary);
}

.subtitle {
  font-weight: lighter;
}
</style>
