<script>
import ProductCard from '../../components/cards/productcard.vue';
import HeroSection from '../../components/sections/hero.vue';
export default {
  name: 'ProductView',
  components: {
    ProductCard,
    HeroSection
  }
};
</script>



<template>
  <div class="pt-16"> <!-- Ajusta este valor según la altura de tu navbar -->
    <HeroSection />
    <section class="py-10 bg-gray-100">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard />
      </div>
    </section>
  </div>
</template>

  
  
  
  <style scoped>
  
  </style>
  