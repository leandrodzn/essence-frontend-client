<template>
  <div class="card text-center contact-form">
    <div class="card-body">
      <div>
        <div>Ingrese la siguiente información y nosotros nos comunicaremos</div>
      </div>

      <div class="form mt-2">
        <form @submit.prevent="sendContactMessage">
          <div class="mb-3"></div>

          <div
            class="form-floating mb-3"
            :class="{ error: v$.issue.$errors.length }"
          >
            <input
              v-model="issue"
              class="form-control"
              type="text"
              placeholder="Asunto"
              aria-label="default input example"
              id="floatingInputSubject"
            />
            <label for="floatingInputSubject">Asunto</label>
            <div v-if="v$.issue.$error" class="form-text">
              Asunto es requerido
            </div>
          </div>

          <div
            class="form-floating mb-3"
            :class="{ error: v$.message.$errors.length }"
          >
            <textarea
              v-model="message"
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextareaDescription"
              style="min-height: 150px"
            ></textarea>
            <label for="floatingTextareaDescription">Mensaje</label>
            <div v-if="v$.message.$error" class="form-text">
              Mensaje es requerido
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Enviar</button>

          <div class="form-text mt-4">
            Su información estará asociada al mensaje para facilitar a la
            empresa poder contactarle.
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      issue: "",
      message: "",
    };
  },
  validations() {
    return {
      issue: { required },
      message: { required },
    };
  },
  methods: {
    async sendContactMessage() {
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
.contact-form {
  background-color: rgba(237, 230, 222, 0.67);

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
