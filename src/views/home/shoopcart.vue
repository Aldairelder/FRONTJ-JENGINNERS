<script>
import TableCart from '../../components/forms/cart.vue';

export default {
  name: 'ProductView',
  components: {
    TableCart,
  },
  data() {
    return {
      carrito: JSON.parse(localStorage.getItem('carrito')) || [], // Recupera el carrito desde localStorage
    };
  },
  watch: {
    // Vigila cambios en el carrito y actualiza localStorage
    carrito(newCarrito) {
      localStorage.setItem('carrito', JSON.stringify(newCarrito));
    },
  },
  methods: {
    // Método para actualizar el carrito
    actualizarCarrito(nuevoCarrito) {
      this.carrito = nuevoCarrito; // Actualiza el carrito con los nuevos valores
    },
  },
};
</script>

<template>
  <div>
    <!-- Pasa el carrito como prop a TableCart y escucha los cambios -->
    <TableCart :carrito="carrito" @actualizar-carrito="actualizarCarrito"/>
  </div>
</template>

<style scoped>
</style>
