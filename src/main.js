import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import "vue-toast-notification/dist/theme-sugar.css";

import VueFeather from "vue-feather";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ToastPlugin);

app.component(VueFeather.name, VueFeather);

// Inicializa los tooltips globalmente
app.mixin({
  mounted() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(
      tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  },
});

app.mount("#app");
