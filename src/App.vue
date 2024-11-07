<script setup>
import navbar from './layouts/navbar.vue';
import Footer from './layouts/footer.vue'; // Importa el componente Footer
</script>

<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
    <Footer />
  </div>
</template>

<style scoped>

</style>
