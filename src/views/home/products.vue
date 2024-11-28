<script>
import { useCartStore } from '../../stores/cartstore'; // Importar el store
import ProductCard from '../../components/cards/productcard.vue';
import HeroSection from '../../components/sections/hero.vue';

export default {
  name: 'ProductView',
  components: {
    ProductCard,
    HeroSection,
  },
  data() {
    return {
      // Lista de productos
      products: [
        {
          id: 1,
          name: 'Adobe Photoshop CC 2022',
          location: 'Lisbon, Portugal',
          price: 850,
          image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          id: 2,
          name: 'Nike Air Max 2020',
          location: 'New York, USA',
          price: 299,
          image: 'https://images.unsplash.com/photo-1616627458531-d46c46fc3331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        },
      ],
    };
  },
  setup() {
    const cartStore = useCartStore(); // Usar el store de carrito
    const addToCart = (product) => {
      cartStore.addToCart(product); // Llamar al método del store
    };

    return {
      addToCart,
    };
  },
};
</script>

<template>
  <div class="pt-16">
    <HeroSection />
    <section class="py-10 bg-gray-100">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <!-- Iterar sobre los productos y pasarlos al componente ProductCard -->
        <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
        />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
