<template>
  <section class="bg-blue-800 text-black p-4 rounded-lg mx-4 md:mx-8 lg:mx-16">
    <h2 class="text-zinc-50 font-bold mb-4">We're Here to Help</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <CardItem title="Call Us" mainText="1-800-123-4567" subText="Mon-Fri: 9am-5pm">
        <template #icon>
          <!-- Reemplaza con el contenido SVG del ícono de llamada -->
          <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1 1 0 01.95-.27c1.03.25 2.14.4 3.3.4a1 1 0 011 1v3.5a1 1 0 01-1 1A17.013 17.013 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.16.15 2.27.4 3.3a1 1 0 01-.27.95l-2.2 2.2z"/>

        </template>
      </CardItem>

      <CardItem title="Email Us" mainText="support@example.com" subText="We'll respond within 24 hours">
        <template #icon>
          <!-- Reemplaza con el contenido SVG del ícono de correo -->
          <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>

        </template>
      </CardItem>

      <CardItem title="Live Chat" mainText="Available 24/7">
        <template #icon>
          <!-- Reemplaza con el contenido SVG del ícono de chat -->
          <path d="M21 6h-4.18A3 3 0 0015 4H9a3 3 0 00-3 3v9a3 3 0 003 3h6l3 3V7a1 1 0 00-1-1zm-4 7h-6a1 1 0 110-2h6a1 1 0 010 2zm0-4h-6a1 1 0 110-2h6a1 1 0 010 2z"/>

        </template>
        <template #button>
          <button class="bg-white text-gray-900 px-4 py-2 rounded">Start Chat</button>
        </template>
      </CardItem>
    </div>
  </section>
</template>

<script>
import CardItem from '../cards/CardItem.vue'

export default {
  name: 'HelpSection',
  components: {
    CardItem
  }
};
</script>

<style scoped>
/* Agrega estilos adicionales si es necesario */
</style>
