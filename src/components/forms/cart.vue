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
          <img :src="item.image" alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{{ item.name }}</h2>
              <p class="mt-1 text-xs text-gray-700">{{ item.size }}</p>
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
                />
                <span
                    @click="increaseQuantity(index)"
                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  +
                </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">{{ item.price }} ₭</p>
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
          <p class="text-gray-700">{{ subtotal }} ₭</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">{{ shippingCost }} ₭</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">{{ total }} ₭</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
          Check out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useCartStore } from "../../stores/cartstore.js"

export default {
  name: "Cart",
  setup() {
    const cartStore = useCartStore();

    // Computed properties para acceder al carrito y cálculos derivados
    const cartItems = computed(() => cartStore.cart);
    const subtotal = computed(() =>
        cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
    const shippingCost = 499; // Define este valor fijo
    const total = computed(() => subtotal.value + shippingCost);

    // Métodos para modificar el carrito
    const increaseQuantity = (index) => {
      cartStore.increaseQuantity(index);
    };
    const decreaseQuantity = (index) => {
      if (cartItems.value[index].quantity > 1) {
        cartStore.decreaseQuantity(index);
      }
    };
    const removeItem = (index) => {
      cartStore.removeItem(index);
    };

    return {
      cartItems,
      subtotal,
      total,
      shippingCost,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
    };
  },
};
</script>

<style scoped>
/* Style to remove the spinner buttons in number input */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
