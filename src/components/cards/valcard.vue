<script setup>
import { defineProps } from 'vue';

// Propiedades dinámicas
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="value-card">
    <div class="icon-circle">
      <!-- Slot para el ícono SVG -->
      <slot name="icon"></slot>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.value-card {
  text-align: center;
  max-width: 300px;
}

.icon-circle {
  background-color: #202020; /* Fondo oscuro para los íconos */
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px; /* Centrar y espaciar */
}



h3 {
  font-size: 1.2rem;
  margin: 10px 0;
  color: #000000;
}

p {
  font-size: 0.9rem;
  color: #555;
}
</style>
