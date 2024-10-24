<script setup>
import navbar from './layouts/navbar.vue';
</script>

<template>
  <div id="app">
    <navbar></navbar>
    <router-view /> <!-- Agrega esto para que el enrutador pueda renderizar las rutas -->
  </div>
</template>

<style scoped>

</style>
