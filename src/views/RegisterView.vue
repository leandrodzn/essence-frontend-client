<template>
  <div class="bg-register mb-2">
    <div class="capa-transparente"></div>

    <div class="contenido container">
      <RegisterForm class="mt-4 mb-4" />
    </div>
  </div>
</template>
<script>
import RegisterForm from "../forms/RegisterForm.vue";
export default {
  components: {
    RegisterForm,
  },
};
</script>
<style lang="scss" scoped>
.subtitle {
  font-weight: lighter;
}
.bg-register {
  background-image: url("../../public/register-bg-image.png");
  background-size: cover;
  background-position: center;
  position: relative; /* Añadido para permitir que la capa se posicione correctamente */
  display: flex;
  align-items: center;
  justify-content: center;

  .capa-transparente {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(243, 238, 233, 0.81);
  }

  .contenido {
    position: relative; /* Añadido para que el contenido esté encima de la capa transparente */
    z-index: 1; /* Añadido para asegurarse de que el contenido esté encima de la capa */
    display: flex;
    flex-direction: column;

    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .contenido {
    position: relative; /* Añadido para que el contenido esté encima de la capa transparente */
    z-index: 1; /* Añadido para asegurarse de que el contenido esté encima de la capa */
    display: flex;
    flex-direction: column;
    max-width: 50%;
    justify-content: center;
  }
}
</style>
