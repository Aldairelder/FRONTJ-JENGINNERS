<template>
  <div class="faq-container">
    <h2>Frequently Asked Questions</h2>
    <div v-for="(faq, index) in faqs" :key="index">
      <FaqItem :question="faq.question" :answer="faq.answer" />
    </div>
  </div>
</template>

<script>
import FaqItem from '../sections/QuestSection.vue';

export default {
  components: {
    FaqItem
  },
  data() {
    return {
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, and bank transfers.'
        },
        {
          question: 'How long does shipping take?',
          answer: 'Shipping usually takes 3-5 business days depending on your location.'
        },
        {question: 'What is your return policy?', answer: 'We accept returns within 30 days of purchase.'}
      ]
    };
  }
};
</script>

<style scoped>
.faq-container {
  margin: 20px;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
}
</style>
