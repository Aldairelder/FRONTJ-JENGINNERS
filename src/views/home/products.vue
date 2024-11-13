<template>
  <div class="pt-16"> <!-- Ajusta este valor según la altura de tu navbar -->
    <HeroSection />
    <section class="py-10 bg-gray-100">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard v-for="producto in productos" :key="producto.id" :producto="producto" />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import ProductCard from '../../components/cards/productcard.vue'; // Asegúrate de que la ruta sea correcta
import HeroSection from '../../components/sections/hero.vue'; // Asegúrate de que la ruta sea correcta

export default {
  name: "Products",
  components: {
    ProductCard,
    HeroSection,
  },
  data() {
    return {
      productos: [],
    };
  },
  mounted() {
    this.obtenerProductos();
  },
  methods: {
    obtenerProductos() {
      console.log("Haciendo la solicitud a la API...");
      axios.get('http://localhost:8080/api/productos')
          .then(response => {
            this.productos = response.data;
            console.log("Datos obtenidos:", response.data);
          })
          .catch(error => {
            console.error("Hubo un error:", error);
          });
    },
  },
};
</script>

<style scoped>
/* Agrega estilos aquí si es necesario */
</style>
