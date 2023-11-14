<template class="body">
    <div v-if="plantillas.length === 0" class="">No hay plantillas.</div>
    <div v-else class="container text-center">
        <div v-for="(plantilla, index) in plantillas" :key="index" class="container text-center">
            <div class="card mb-3" style="max-width: 70rem;">
                <div class="row g-0">
                    <div class="col-md-5 px-3 py-3">
                        <img src="https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg"
                            class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h3 class="card-title">{{ plantilla.titulo }}</h3>
                            <vue-feather type="minus" size="30px" stroke="rgb(150, 61, 130)"
                                fill="rgb(150, 61, 130)"></vue-feather>
                            <p class="card-text">${{ plantilla.precio }} MXN</p>
                            <p class="card-text">Te pusiste en contacto el día:</p>
                            <p class="card-text"><small class="card-title">{{ plantilla.fecha }}</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        plantillas: [],
    }),
    mounted() {
        this.getPlantillas();
    },
    methods: {
        getPlantillas() {

            let p = [
                {
                    titulo: "Plantilla 1",
                    precio: "1600",
                    fecha: "23 de septiembre de 2023",
                },
                {
                    titulo: "Plantilla 2",
                    precio: "1600",
                    fecha: "23 de septiembre de 2023",
                },
                {
                    titulo: "Plantilla 3",
                    precio: "1600",
                    fecha: "23 de septiembre de 2023",
                },
                {
                    titulo: "Plantilla 4",
                    precio: "1600",
                    fecha: "23 de septiembre de 2023",
                },
                {
                    titulo: "Plantilla 5",
                    precio: "1600",
                    fecha: "23 de septiembre de 2023",
                },
            ]
            this.plantillas = p;
        }
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
  