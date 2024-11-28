<script setup>

</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow max-w-md mx-auto">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <input type="text" placeholder="Nombres" required class="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
      <input type="email" placeholder="Correo" required class="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500  bg-white">
      <textarea placeholder="Mensaje" rows="4" required class="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500  bg-white"></textarea>
      <button type="submit" class="bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition ">Enviar Mensaje</button>
    </form>
  </div>
</template>


<style scoped>

</style>