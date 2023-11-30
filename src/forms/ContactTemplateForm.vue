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

          <button v-if="!busy" type="submit" class="btn btn-primary">
            Enviar
          </button>
          <button v-if="busy" class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm"
              aria-hidden="true"
            ></span>
            <span class="px-2" role="status">Enviando...</span>
          </button>

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
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useLoginStore } from "../store/login.js";
import { useRouter } from "vue-router";
import { useHistoryStore } from "../store/history.js";

export default {
  setup() {
    const toast = useToast();
    const useLogin = useLoginStore();
    const router = useRouter();
    const useHistory = useHistoryStore();

    return {
      v$: useVuelidate(),
      toast,
      useLogin,
      router,
      useHistory,
    };
  },
  props: {
    templateId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      issue: "",
      message: "",
      busy: false,
    };
  },
  validations() {
    return {
      issue: { required },
      message: { required },
    };
  },
  computed: {
    isLogged() {
      return this.useLogin.isLogged;
    },
  },
  methods: {
    async sendContactMessage() {
      if (!this.isLogged) {
        this.toast.open({
          message: "Inicie sesión para contactar por una plantilla",
          type: "info",
          position: "top-right",
          dismissible: true,
          onClick: this.redirectLogin,
        });
        return;
      }

      const isFormCorrect = await this.v$.$validate();

      if (isFormCorrect) {
        try {
          this.busy = true;

          if (isFormCorrect) {
            this.toast.open({
              message: "Mensaje enviado",
              type: "success",
              position: "top-right",
              dismissible: true,
            });

            this.useHistory.addHistory(this.templateId);
          }
        } catch (error) {
          this.toast.open({
            message: "Error al enviar mensaje",
            type: "error",
            position: "top-right",
            dismissible: true,
          });
        } finally {
          // this.busy = false;
          setTimeout(() => {
            this.busy = false;
          }, 500);
        }
      }
    },

    redirectLogin() {
      this.router.push("/login");
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
