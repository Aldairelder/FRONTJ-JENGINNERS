<template>
  <div>
    <!-- Hero Section y otros componentes -->
    <HeroSection />
    <section class="py-10 bg-gray-100">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard
            v-for="producto in productos"
            :key="producto.id"
            :producto="producto"
            @agregar-al-carrito="agregarAlCarrito"
        />
      </div>
    </section>

    <!-- Mostrar carrito -->
    <div v-if="carrito.length > 0" class="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full cursor-pointer" @click="verCarrito">
      <span>{{ carrito.length }} Producto{{ carrito.length > 1 ? 's' : '' }} en el carrito</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductCard from '../../components/cards/productcard.vue';
import HeroSection from '../../components/sections/hero.vue';
import { useRouter } from 'vue-router';

export default {
  name: "Products",
  components: {
    ProductCard,
    HeroSection,
  },
  data() {
    return {
      productos: [], // Productos cargados desde la API
      carrito: JSON.parse(localStorage.getItem('carrito')) || [], // Cargar carrito desde localStorage
    };
  },
  mounted() {
    this.obtenerProductos(); // Obtener los productos al montar el componente
  },
  methods: {
    // Obtener los productos desde la API
    obtenerProductos() {
      axios.get('http://localhost:8080/api/productos')
          .then(response => {
            this.productos = response.data;
          })
          .catch(error => {
            console.error("Hubo un error:", error);
          });
    },

    // Método para agregar productos al carrito
    agregarAlCarrito(producto) {
      // Verificar si el producto ya está en el carrito
      const productoEnCarrito = this.carrito.find(item => item.id === producto.id);

      if (productoEnCarrito) {
        // Si el producto ya está en el carrito, solo aumentamos la cantidad
        productoEnCarrito.cantidad += 1;
      } else {
        // Si el producto no está en el carrito, lo agregamos con una cantidad inicial de 1
        this.carrito.push({...producto, cantidad: 1});
      }

      // Guardar el carrito actualizado en localStorage
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    },

    // Redirigir a la vista del carrito
    verCarrito() {
      this.$router.push({name: 'cart'}); // Redirige a la ruta del carrito
    },
  },
};
</script>

<style scoped>
/* Agrega estilos aquí si es necesario */
</style>
