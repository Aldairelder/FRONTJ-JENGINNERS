<template>
  <div class="h-screen bg-gray-100 pt-20">
    <h1 class="mb-10 text-center text-2xl font-bold text-gray-900">Cart Items</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        <!-- Cart Items -->
        <div
            v-for="(item, index) in cartItems"
            :key="index"
            class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
        >
          <img :src="`http://localhost:8080/images/${item.imagen}`" alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{{ item.nombre }}</h2>
              <p class="mt-1 text-xs text-gray-700">Cantidad: {{ item.quantity }}</p>
              <p class="mt-1 text-sm text-slate-400">{{ item.descripcion }}</p>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span
                    @click="decreaseQuantity(index)"
                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  -
                </span>
                <input
                    class="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    v-model.number="item.quantity"
                    min="1"
                    @input="updateCartItem(index)"
                />
                <span
                    @click="increaseQuantity(index)"
                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  +
                </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">S/. {{ item.precioVenta ? item.precioVenta.toFixed(2) : '0.00' }}</p>
                <svg
                    @click="removeItem(index)"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Subtotal Section -->
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">S/. {{ subtotal.toFixed(2) }}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">S/. {{ shippingCost.toFixed(2) }}</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">S/. {{ total.toFixed(2) }}</p>
            <p class="text-sm text-gray-700">IGV (18%)</p>
            <p class="text-sm text-gray-700">S/. {{ igvAmount.toFixed(2) }}</p>
          </div>
        </div>
        <button
            class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            @click="checkOut"
        >
          Check out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cartItems: this.initializeCartItems(), // Inicializamos el carrito con cantidades por defecto
      shippingCost: 50, // Costo de envío fijo
    };
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((sum, item) => sum + (item.precioVenta * item.quantity), 0);
    },
    total() {
      return this.subtotal + this.shippingCost + this.igvAmount;
    },
    igvAmount() {
      return this.subtotal * 0.18; // Calcula el IGV como el 18% del subtotal
    },
  },
  methods: {
    // Inicializar el carrito con cantidades por defecto
    initializeCartItems() {
      const items = JSON.parse(localStorage.getItem("carrito")) || [];
      return items.map((item) => ({
        ...item,
        quantity: item.quantity || 1, // Asignar 1 si no tiene cantidad definida
      }));
    },
    // Incrementar cantidad
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
      this.updateCartItem(index);
    },
    // Decrementar cantidad
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
        this.updateCartItem(index);
      }
    },
    // Actualizar carrito en localStorage y recalcular valores
    updateCartItem(index) {
      localStorage.setItem("carrito", JSON.stringify(this.cartItems));
    },
    // Eliminar un producto del carrito
    removeItem(index) {
      this.cartItems.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(this.cartItems));
    },
    // Checkout (lógica personalizada)
    checkOut() {
      console.log("Proceeding to checkout...");
    },
  },
};
</script>

<style scoped>
/* Estilo para eliminar el spinner de los inputs */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
