<template>
  <div class="card" style="width: 25rem">
    <img
      src="https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body text-center">
      <h3 class="card-title cursor-pointer" @click="redirectTemplate">
        {{ template.title }}
      </h3>
      <vue-feather
        type="minus"
        size="30px"
        stroke="rgb(150, 61, 130)"
        fill="rgb(150, 61, 130)"
      ></vue-feather>
      <h3 class="card-text">${{ template.price }} MXN</h3>
      <vue-feather
        type="heart"
        size="36px"
        class="icon"
        stroke="rgb(150, 61, 130)"
        fill="rgb(150, 61, 130)"
        v-if="favorite"
      ></vue-feather>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  components: {},
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  props: {
    template: {
      type: Object,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    redirectTemplate() {
      this.router.push(`/template/${this.template.id}`);
    },
  },
};
</script>
<style class="scss" scoped>
.card-title {
  font-weight: bold;
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

.icon {
  float: inline-end;
  margin: 0%;
}
</style>
