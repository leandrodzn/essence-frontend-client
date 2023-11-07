<template class="body">
    <div class="contenedor">
        <select class="custom-select" >
            <option selected>Buscar por tipo</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>


    <div v-if="plantillas.length === 0" class="">No hay plantillas.</div>
    <div v-else class="contenedor">
        <div class="row">
            <div v-for="(plantilla, index) in plantillas" :key="index" class="col">
                <div class="card" style="width: 20rem;">
                    <img src="https://asset1.zankyou.com/images/wervice-card-big/20b/1eda/1050/800/w/837417/-/1594225062.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h3 class="card-title">{{ plantilla.titulo }}</h3>
                        <vue-feather type="minus" size="30px" stroke="rgb(150, 61, 130)"
                            fill="rgb(150, 61, 130)"></vue-feather>
                        <h3 class="card-text">${{ plantilla.precio }} MXN </h3>
                        <vue-feather type="heart" size="36px" class="icon" stroke="rgb(150, 61, 130)" fill="rgb(150, 61, 130)" v-if="favorite"></vue-feather>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        favorite: Boolean,
    },
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
                    link: "Ver plantilla",
                    ejemplo: "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
                },
                {
                    titulo: "Plantilla 2",
                    precio: "1600",
                    link: "Ver plantilla",
                    ejemplo: "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
                },
                {
                    titulo: "Plantilla 3",
                    precio: "1600",
                    link: "Ver plantilla",
                    ejemplo: "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
                },
                {
                    titulo: "Plantilla 4",
                    precio: "1600",
                    link: "Ver plantilla",
                    ejemplo: "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
                },
                {
                    titulo: "Plantilla 5",
                    precio: "1600",
                    link: "Ver plantilla",
                    ejemplo: "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
                },
                {
                    titulo: "Plantilla 1",
                    precio: "1600",
                    link: "Ver plantilla",
                    ejemplo: "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
                },
                {
                    titulo: "Plantilla 2",
                    precio: "1600",
                    link: "Ver plantilla",
                    ejemplo: "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
                },
                {
                    titulo: "Plantilla 3",
                    precio: "1600",
                    link: "Ver plantilla",
                    ejemplo: "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
                },
                {
                    titulo: "Plantilla 4",
                    precio: "1600",
                    link: "Ver plantilla",
                    ejemplo: "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
                },
                {
                    titulo: "Plantilla 5",
                    precio: "1600",
                    link: "Ver plantilla",
                    ejemplo: "https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png",
                },

            ]
            this.plantillas = p;
        }
    },
};
</script>
<style lang="scss" scoped>
.title,
.card-title {
    font-weight: bold;
    color: var(--primary);
}

.subtitle {
    font-weight: lighter;
}

.btn {
    margin-right: 1em;
}

.card {
    margin-bottom: 1.5em;
    background-color: rgb(237, 230, 222);

}

.card-text {
    font-size: x-large;
    font-weight: normal;
}

.contenedor {
    display: flex;
    margin-top: 2em;
    margin-left: 2em;
    margin-right: 2em;
}

.icon {
    float: inline-end;
    margin: 0%;
}

.custom-select {
    padding: 0.5rem 3rem 0.5rem 2rem;
    font-size: 1rem;
    background-color: rgb(150, 61, 130);
    color: white;
    border: 2px solid rgb(150, 61, 130);
    border-radius: 2rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative; /* Necesario para posicionar la flecha */
    background-image: url("data:image/svg+xml;utf8,<svg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 24 24'><path d='M7 10l5 5 5-5z'/></svg>");
    background-repeat: no-repeat;
    background-position:right;
    background-size: 30px;
    transition: border-color 0.2s; /* Agrega una transición para suavizar el cambio de color del borde */
}

.custom-select:focus, .custom-select:hover {
    border-color:white; /* Establece el color de borde para el estado de enfoque */
}

.custom-select::after {
    content: "\25BC"; /* Código de flecha hacia abajo */
    position: absolute;
    top: 50%;
    right: 1rem; /* Ajusta la posición de la flecha */
    transform: translateY(-50%);
    font-size: 24px; /* Tamaño de la flecha personalizada */
    color: white; /* Color blanco */
    pointer-events: none; /* Evita interacciones con la flecha */
}

.custom-select option:hover, .custom-select option:focus{
    background-color: rgb(150, 61, 130); /* Cambia el color de fondo cuando se pasa el mouse sobre las opciones */
    color: white; /* Cambia el color del texto a blanco cuando se pasa el mouse sobre las opciones */
}




</style>
  