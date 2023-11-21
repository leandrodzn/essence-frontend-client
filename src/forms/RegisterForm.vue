<template>
  <div class="form text-center mt-2">
    <h2 class="title">Registro</h2>
    <div class="mb-3">Ingrese los datos requeridos</div>
    <form class="mb-4" @submit.prevent="login">
      <div
        class="form-floating mb-3"
        :class="{ error: v$.name.$errors.length }"
      >
        <input
          v-model="name"
          class="form-control"
          type="text"
          placeholder="Nombre"
          id="floatingInputSubject"
        />
        <label for="floatingInputSubject">Nombre</label>
        <div v-if="v$.name.$error" class="validation-text">
          Nombre es requerido
        </div>
      </div>

      <div
        class="form-floating mb-3"
        :class="{ error: v$.surname.$errors.length }"
      >
        <input
          v-model="surname"
          class="form-control"
          type="text"
          placeholder="Apellido"
          id="floatingInputSubject"
        />
        <label for="floatingInputSubject">Apellido</label>
        <div v-if="v$.surname.$error" class="validation-text">
          Apellido es requerido
        </div>
      </div>

      <div
        class="form-floating mb-3"
        :class="{ error: v$.phone.$errors.length }"
      >
        <input
          v-model="phone"
          class="form-control"
          type="text"
          placeholder="Teléfono"
          id="floatingInputSubject"
        />
        <label for="floatingInputSubject">Teléfono</label>
        <div v-if="v$.phone.$error" class="validation-text">
          Teléfono es requerido
        </div>
      </div>

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

        <div class="form-text mt-2">
          La contraseña debe contener mínimo 8 caracteres incluyendo mayúsculas,
          minúsculas, dígitos y caracteres especiales.
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Crear cuenta</button>
    </form>

    <div class="mb-0">¿Ya tienes una cuenta?</div>
    <RouterLink to="/login" class="login-link">Iniciar sesión</RouterLink>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { email, minLength, required } from "@vuelidate/validators";
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
      name: "",
      surname: "",
      phone: "",
    };
  },
  validations() {
    return {
      email: { email, required },
      password: {
        required,
        minLength: minLength(8),
        validatorPassword: this.validatorPassword,
      },
      name: { required },
      surname: { required },
      phone: {
        required,
        minLength: minLength(10),
        validatorPhoneNumber: this.validatorPhoneNumber,
      },
    };
  },
  methods: {
    validatorPhoneNumber(value) {
      const regex = /^(\+\d{1,4})?\s(\d{10})$/;
      return regex.test(value);
    },

    validatorPassword(value) {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;
      return regex.test(value);
    },

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
}

.login-link {
  font-weight: 500;
  font-size: 120%;

  &:hover {
    font-weight: 700;
  }
}
</style>
