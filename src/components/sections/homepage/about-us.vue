<script setup>
import pimage from "../../imgsection/image.vue";
import ptext from "../../text/ptext.vue";
import ptitle from "../../titles/ptitle.vue";
import PrimaryButton from "../../bouttons/primary-button.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto p-6 md:p-12 space-y-8 md:space-y-0 md:space-x-20">
    <div class="flex flex-col space-y-6 max-w-full md:max-w-lg">
      <ptitle class="text-4xl md:text-5xl font-bold leading-tight text-gray-900"/>
      <ptext class="text-gray-600 text-lg md:text-xl" />
      <primary-button>CONÓCENOS</primary-button>
    </div>
    <pimage :src="'../../../public/chifondo.fw-1.png'" :alt="'hero imagen'" class="custom-image" />
  </div>
</template>

<style scoped>
.custom-image {
  width: 100%;
  max-width: 500px; /* Tamaño mayor en pantallas pequeñas */
  height: auto;
}

@media (min-width: 768px) {
  .custom-image {
    max-width: 600px; /* Tamaño mayor en pantallas medianas */
  }
}

@media (min-width: 1024px) {
  .custom-image {
    max-width: 700px; /* Tamaño mayor en pantallas grandes */
  }
}
</style>