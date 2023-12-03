<template>
  <div class="banner">
    <div class="container-banner">
      <h1 class="title">Invitaciones Digitales,</h1>
      <h1 class="title">Experiencias Memorables</h1>
      <p>
        Creamos invitaciones digitales con formato de paginás web a partir de
        plantillas que tú puedes personalizar
      </p>
      <button
        @click="redirectLogin"
        type="button"
        style="width: 200px; margin-top: 20px"
        class="btn btn-primary mx-2"
        v-if="!isLogged"
      >
        Iniciar sesión
      </button>
    </div>
  </div>
</template>
