<template class="body">
  <div v-if="templates.length === 0" class="">No hay plantillas.</div>
  <div v-else class="container text-center">
    <div v-for="(template, index) in templates" :key="index">
      <div class="card mb-3">
        <div class="row">
          <div
            class="col-md-5 cursor-pointer"
            @click="redirectTemplate(template.id)"
          >
            <img
              src="https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg"
              class="img-fluid rounded-start px-3 py-3"
              alt="..."
            />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h3
                class="card-title cursor-pointer"
                @click="redirectTemplate(template.id)"
              >
                {{ template.name }}
              </h3>
              <vue-feather
                type="minus"
                size="30px"
                stroke="rgb(150, 61, 130)"
                fill="rgb(150, 61, 130)"
              ></vue-feather>
              <p
                class="card-text cursor-pointer"
                @click="redirectTemplate(template.id)"
              >
                ${{ template.price }} MXN
              </p>
              <p class="card-text">Te pusiste en contacto el día:</p>
              <p class="card-text">
                <small class="card-title">{{ template.dateTime }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useHistoryStore } from "../store/history.js";
import { useRouter } from "vue-router";

export default {
  setup() {
    const useHistory = useHistoryStore();
    const router = useRouter();

    return {
      useHistory,
      router,
    };
  },
  computed: {
    templates() {
      return this.useHistory.historyList;
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    redirectTemplate(id) {
      this.router.push(`/template/${id}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.card-body {
  text-align: left;
}

.card-title {
  color: var(--primary);
}

.card {
  margin-bottom: 1.5em;
  background-color: rgb(237, 230, 222);
}

.card-text {
  font-size: x-large;
  font-weight: normal;
}
</style>
