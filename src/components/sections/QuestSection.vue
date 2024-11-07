<template>
  <div class="text-black max-w-4xl mx-auto p-4">
    <h2 class="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
    <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
      <div @click="toggleAnswer(index)" class="flex justify-between items-center cursor-pointer text-lg font-semibold">
        <span>{{ faq.question }}</span>
        <svg v-if="faq.isOpen" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
          <path d="M4.293 9.293a1 1 0 0 1 1.414 0L8 6.586l2.293 2.707a1 1 0 0 1 1.414-1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1-1.414-1.414L8 4.586l-2.293-2.707a1 1 0 0 1-1.414 1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 0 1.414z"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
          <path d="M8 12a1 1 0 0 1-.707-.293L3 7.707a1 1 0 1 1 1.414-1.414l3 3 3-3a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 8 12z"/>
        </svg>
      </div>
      <div v-if="faq.isOpen" class="mt-2 text-gray-600 text-sm">
        <p>{{ faq.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and bank transfers.', isOpen: false },
        { question: 'How long does shipping take?', answer: 'Shipping usually takes 3-5 business days depending on your location.', isOpen: false },
        { question: 'What is your return policy?', answer: 'We accept returns within 30 days of purchase.', isOpen: false }
      ]
    };
  },
  methods: {
    toggleAnswer(index) {
      // Alternar el valor de isOpen para abrir/cerrar la respuesta
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    }
  }
};
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>
