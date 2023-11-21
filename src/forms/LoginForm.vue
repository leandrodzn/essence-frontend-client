<template>
  <div class="form text-center mt-2">
    <h2 class="title">Iniciar sesión</h2>
    <div class="mb-3">Ingrese sus credenciales</div>
    <form class="mb-4" @submit.prevent="login">
      <div
        class="form-floating mb-3"
        :class="{ error: v$.email.$errors.length }"
      >
        <input
          v-model="email"
          class="form-control"
          type="email"
          placeholder="Correo electrónico"
          id="floatingInputSubject"
        />
        <label for="floatingInputSubject">Correo electrónico</label>
        <div v-if="v$.email.$error" class="validation-text">
          Correo electrónico es requerido
        </div>
      </div>

      <div
        class="form-floating mb-3"
        :class="{ error: v$.password.$errors.length }"
      >
        <input
          v-model="password"
          class="form-control"
          type="password"
          placeholder="Contraseña"
          id="floatingInputSubject"
        />
        <label for="floatingInputSubject">Contraseña</label>
        <div v-if="v$.password.$error" class="validation-text mb-2">
          Contraseña es requerida
        </div>

        <RouterLink to="/history" class="forgot-password">
          ¿Olvidaste tu contraseña?
        </RouterLink>
      </div>

      <button type="submit" class="btn btn-primary">Iniciar sesión</button>
    </form>

    <div class="mb-0">¿No tienes una cuenta?</div>
    <RouterLink to="/register" class="register-link">Regístrate</RouterLink>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations() {
    return {
      email: { email, required },
      password: { required },
    };
  },
  methods: {
    async login() {
      const isFormCorrect = await this.v$.$validate();

      if (isFormCorrect) {
        console.log("Valido");
      } else {
        console.log("Invalido");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-weight: bold;
  color: var(--primary);
}
.form {
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  // width: 100%;

  .validation-text {
    // font-weight: 400;
    margin: 5px;
    font-size: 80%;
    color: var(--primary);
  }

  .forgot-password {
    font-weight: 400;
    font-size: 95%;
    color: var(--primary);

    &:hover {
      font-weight: 500;
    }
  }
}

.register-link {
  font-weight: 500;
  font-size: 120%;

  &:hover {
    font-weight: 700;
  }
}
</style>
