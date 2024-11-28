// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importar las vistas
import Home from '../views/home/home.vue';
import Products from '../views/home/products.vue'; // Asegúrate de que la ruta del componente sea correcta
import cart from '../views/home/shoopcart.vue'
import login from '../views/home/login.vue'
import contact from '../views/home/contac.vue'
import about from '../views/home/about.vue'

// Definir las rutas
const routes = [
  {
    path: '/' ,// Ruta para la página de inicio
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
  },
  {
    path: '/Login', // Ruta para la página de inicio
    name: 'login',
    component: login
  },
  {
    path: '/contacto',
    name: 'contact',
    component: contact
  },
  {
    path: '/conocenos',
    name: 'about',
    component: about
  }
];

// Crear el router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
