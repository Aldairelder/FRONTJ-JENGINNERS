<template>
   <div class="container mx-auto p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Carrito</h1>
        <router-link to="/" class="text-blue-500">Home / Carrito</router-link>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr class="bg-gray-100">
              <th class="px-4 py-2 text-left text-gray-600">Producto</th>
              <th class="px-4 py-2 text-left text-gray-600">Precio</th>
              <th class="px-4 py-2 text-left text-gray-600">Cantidad</th>
              <th class="px-4 py-2 text-left text-gray-600">Total</th>
              <th class="px-4 py-2 text-left text-gray-600">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="index" class="border-t">
              <td class="px-4 py-2">{{ item.product }}</td>
              <td class="px-4 py-2">{{ item.price }}</td>
              <td class="px-4 py-2">{{ item.quantity }}</td>
              <td class="px-4 py-2">{{ item.total }}</td>
              <td class="px-4 py-2">
                <button @click="removeItem(index)" class="bg-red-500 text-white px-3 py-1 rounded">
                  Quitar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-4 flex justify-between">
        <div></div>
        <div class="w-full max-w-xs bg-white border border-gray-200 p-4 rounded shadow-md">
          <h2 class="text-xl font-bold mb-2">SUBTOTAL</h2>
          <p class="text-lg mb-4">{{ subtotal }}</p>
          <button class="bg-gray-800 text-white px-4 py-2 rounded w-full">
            Ver Orden
          </button>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        cartItems: [
          { product: "Televisor", price: 3250.0, quantity: 5, total: 16250.0 },
          { product: "Televisor", price: 650.0, quantity: 1, total: 650.0 },
          { product: "Televisor", price: 650.0, quantity: 1, total: 650.0 }
        ]
      };
    },
    computed: {
      subtotal() {
        return this.cartItems.reduce((acc, item) => acc + item.total, 0);
      }
    },
    methods: {
      removeItem(index) {
        this.cartItems.splice(index, 1);
      }
    }
  };
  </script>

  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  