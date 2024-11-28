<template>
  <nav class="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-4 sm:px-6">
    <div class="container mx-auto flex max-w-6xl items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-3 h-6 text-blue-500 sm:h-9">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
        <span class="self-center whitespace-nowrap text-xl font-semibold">Termcode</span>
      </a>

      <!-- Botón de menú hamburguesa -->
      <button @click="toggleMenu" class="inline-flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- Menú -->
      <div :class="menuOpen ? 'block' : 'hidden'" class="absolute top-full left-0 w-full bg-white md:relative md:block md:w-auto">
        <ul class="flex flex-col md:flex-row md:space-x-8 text-sm font-medium">
          <li><a href="/" class="block py-2 px-4 text-gray-700 hover:text-blue-700">Home</a></li>
          <li><a href="/productos" class="block py-2 px-4 text-gray-700 hover:text-blue-700">Productos</a></li>
          <li><a href="/carrito" class="block py-2 px-4 text-gray-700 hover:text-blue-700">Carrito</a></li>
          <li><a href="/conocenos" class="block py-2 px-4 text-gray-700 hover:text-blue-700">Conócenos</a></li>
          <li><a href="/contacto" class="block py-2 px-4 text-gray-700 hover:text-blue-700">Contacto</a></li>
        </ul>
      </div>

      <!-- Botones Login y Register -->
      <div class="hidden md:flex items-center space-x-4">
        <button class="rounded-lg border border-blue-500 px-3 py-1 text-sm text-blue-500 hover:bg-blue-100">Login</button>
        <button class="rounded-lg bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600">Register</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false, // Menú cerrado por defecto
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Mantener la línea de abajo del nav general */
nav {
  border-bottom: 1px solid #e5e7eb; /* Color de la línea general */
}

/* Eliminar la línea directamente debajo del menú */
ul {
  border-bottom: none !important; /* Sin línea extra en el ul */
  box-shadow: none !important;    /* Por si hay sombras */
  margin: 0;
  padding: 0;
}

ul li a {
  border-bottom: none !important; /* Asegúrate de que los enlaces no tengan bordes inferiores */
  box-shadow: none;
}

/* Ajustes adicionales para pseudo-elementos */
ul::before,
ul::after {
  content: none; /* Asegúrate de que no haya pseudo-elementos */
}
</style>
