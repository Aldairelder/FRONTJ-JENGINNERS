<template>
  <nav class="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
    <div class="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
      <a href="#" class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-3 h-6 text-blue-500 sm:h-9">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
        <span class="self-center whitespace-nowrap text-xl font-semibold">Termcode</span>
      </a>
      <div class="mt-2 sm:mt-0 sm:flex md:order-2">
        <btn-secondary>Login</btn-secondary>
        <primary-button>Register</primary-button>
      </div>

      <!-- Botón de menú para móviles -->
      <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 text-gray-500 rounded-md hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden">
        <span class="sr-only">Open main menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Menú en desktop -->
      <div class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
        <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
          <li>
            <a href="/" class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700" aria-current="page">Home</a>
          </li>
          <li>
            <a href="/productos" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Productos</a>
          </li>
          <li>
            <a href="/carrito" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Carrito</a>
          </li>
          <li>
            <a href="#" class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Contact</a>
          </li>
        </ul>
      </div>

      <!-- Menú desplegable en móvil -->
      <div v-show="isMenuOpen" class="w-full md:hidden">
        <ul class="flex flex-col items-center p-4 bg-gray-50 border border-gray-100">
          <li class="w-full">
            <a href="/" class="block rounded py-2 text-gray-700 hover:bg-gray-100 w-full text-center">Home</a>
          </li>
          <li class="w-full">
            <a href="/productos" class="block rounded py-2 text-gray-700 hover:bg-gray-100 w-full text-center">Productos</a>
          </li>
          <li class="w-full">
            <a href="/carrito" class="block rounded py-2 text-gray-700 hover:bg-gray-100 w-full text-center">Carrito</a>
          </li>
          <li class="w-full">
            <a href="#" class="block rounded py-2 text-gray-700 hover:bg-gray-100 w-full text-center">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import btnSecondary from "../components/bouttons/btnSecondary.vue";
import primaryButton from "../components/bouttons/primary-button.vue";

export default {
  name: 'Navbar',
  components: {
    btnSecondary,
    primaryButton
  },
  data() {
    return {
      isMenuOpen: false, //
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>

</style>
