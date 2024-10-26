// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importar las vistas
import Home from '../views/home/home.vue';
import Products from '../views/home/products.vue'; // Asegúrate de que la ruta del componente sea correcta
import cart from '../views/home/shoopcart.vue';

// Definir las rutas
const routes = [
  {
    path: '/home', // Ruta para la página de inicio
    name: 'Home',
    component: Home
  },
  {
    path: '/productos', // Cambiado el path a "/productos"
    name: 'Products',
    component: Products
  },
  {
    path: '/carrito', // Ruta para la página de inicio
    name: 'cart',
    component: cart
  }
];

// Crear el router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
