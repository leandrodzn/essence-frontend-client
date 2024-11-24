<template>
  <div class="dropdown">
    <button
      :class="`btn btn-${variant} d-flex align-items-center justify-content-center`"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <vue-feather
        type="more-vertical"
        :size="size"
        stroke="rgb(150, 61, 130)"
        fill="rgb(150, 61, 130)"
      ></vue-feather>
    </button>
    <ul class="dropdown-menu" style="">
      <li v-for="(option, index) of options" :key="index">
        <a class="dropdown-item cursor-pointer d-flex align-items-center justify-content-between gap-2" @click="option.action">
          <vue-feather
            v-if="option.icon"
            :type="option.icon"
            stroke="rgb(150, 61, 130)"
          />
          {{ option.label }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'secondary'
    },
    size: {
      type: String,
      default: '20px'
    },
    options: {
      type: Array,
      default: []
    }
  },
};
</script>
<style lang="css" scoped>
</style>
