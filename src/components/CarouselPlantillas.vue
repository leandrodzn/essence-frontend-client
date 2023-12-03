<template>
  <div id="carouselExampleDark" class="carousel carousel-dark slide">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="/slide1.png" class="d-block w-100" alt="slide-img" />
        <div class="carousel-caption d-none d-md-block">
          <button
            type="button"
            style="width: 200px; margin-top: 20px"
            class="btn btn-primary mx-2"
            @click="redirectTemplates"
          >
            Ver plantillas
          </button>
          <br /><br />
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="/slide1.png" class="d-block w-100" alt="slide-img" />
        <div class="carousel-caption d-none d-md-block">
          <button
            type="button"
            style="width: 200px; margin-top: 20px"
            class="btn btn-primary mx-2"
            @click="redirectTemplates"
          >
            Ver plantillas
          </button>
          <br /><br />
        </div>
      </div>
      <div class="carousel-item">
        <img src="/slide1.png" class="d-block w-100" alt="slide-img" />
        <div class="carousel-caption d-none d-md-block">
          <button
            type="button"
            style="width: 200px; margin-top: 20px"
            class="btn btn-primary mx-2"
            @click="redirectTemplates"
          >
            Ver plantillas
          </button>
          <br /><br />
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    return { router };
  },
  methods: {
    redirectTemplates() {
      this.router.push("/templates");
    },
  },
};
</script>
