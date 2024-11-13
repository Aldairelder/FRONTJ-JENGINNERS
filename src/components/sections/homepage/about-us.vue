<script setup>
import pimage from  "../../imgsection/image.vue";
import ptext from "../../text/ptext.vue";
import ptitle from "../../titles/ptitle.vue";
import PrimaryButton from "../../bouttons/primary-button.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row items-start md:items-center justify-start md:space-x-20 p-12">
    <div class="flex flex-col space-y-8 max-w-lg md:mr-40">
      <ptitle class="text-5xl font-bold leading-tight text-gray-900"/>

      <ptext class="text-gray-600 text-xl" />
      <primary-button>CONOCENOS</primary-button>
    </div>
    <pimage :src="'../../../public/chifondo.fw-1.png'" :alt="'hero imagen'" class="custom-image w-full" />

  </div>

</template>

<style scoped>
.custom-image {
  width: 100% !important;  /* Asegura que el estilo se aplique */

  height: auto !important;
  max-width: 600px !important;
}


/* Tamaño de la imagen en pantallas medianas y grandes */
@media (min-width: 768px) {
  .custom-image {
    width: 150px; /* Ajusta el tamaño según el diseño en pantallas grandes */
  }
}
</style>
