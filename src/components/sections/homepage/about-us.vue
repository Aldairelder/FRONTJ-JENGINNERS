<script setup>

import pimage from  "../../imgsection/image.vue";
import ptext from "../../text/ptext.vue";
import ptitle from "../../titles/ptitle.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row items-start md:items-center justify-start md:space-x-20 p-12">
    <div class="flex flex-col space-y-8 max-w-lg md:mr-40">
      <ptitle class="text-5xl font-bold leading-tight text-gray-900"/>
      <ptext class="text-gray-600 text-xl" />
    </div>
    <pimage class="md:ml-10 lg:ml-20"/>
  </div>



</template>

<style scoped>

</style>