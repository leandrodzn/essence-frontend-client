<template>
  <div class="card contact-form">
    <div class="card-body">
      <div
        style="display: flex; flex-direction: column; align-items: flex-start"
      >
        <h3 class="title">Contacto</h3>
        <div>Ingrese la siguiente información y nosotros nos comunicaremos</div>
      </div>

      <div></div>

      <div class="form mt-2">
        <form @submit.prevent="sendContactMessage">
          <div class="mb-3"></div>

          <div
            class="form-floating mb-3"
            :class="{ error: v$.issue.$errors.length }"
          >
            <input
              v-model="issue"
              class="form-control input-primary"
              type="text"
              placeholder="Asunto"
              aria-label="default input example"
              id="floatingInputSubject"
            />
            <label for="floatingInputSubject" class="label-primary"
              >Asunto</label
            >
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
              class="form-control input-primary"
              placeholder="Leave a comment here"
              id="floatingTextareaDescription"
              style="min-height: 150px"
            ></textarea>
            <label for="floatingTextareaDescription" class="label-primary"
              >Mensaje</label
            >
            <div v-if="v$.message.$error" class="form-text">
              Mensaje es requerido
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Enviar</button>

          <!-- <div class="form-text mt-4">
            Su información estará asociada al mensaje para facilitar a la
            empresa poder contactarle.
          </div> -->
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
.title {
  font-weight: bold;
  color: var(--primary);
}
.contact-form {
  background-color: #fff !important;
  border: none !important;

  .form {
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;

    .input-primary {
      background-color: rgba(150, 61, 130, 0.15) !important;
      // color: var(--primary) !important;
    }

    .label-primary {
      color: var(--primary) !important;
    }
  }
}
</style>
