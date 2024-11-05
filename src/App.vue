<script setup>
import navbar from './layouts/navbar.vue';
import Footer from './layouts/footer.vue'; // Importa el componente Footer
</script>

<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
    <Footer /> <!-- Llama al footer aquí -->
  </div>
</template>

<style scoped>
/* Puedes agregar estilos personalizados aquí si lo necesitas */
</style>
