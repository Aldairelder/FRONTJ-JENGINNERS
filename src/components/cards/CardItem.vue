<template>
  <div class="bg-white p-4 rounded-lg flex flex-col items-center">
    <svg class="w-12 h-12 mb-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <slot name="icon"></slot>
    </svg>
    <h3 class="text-xl font-semibold">{{ title }}</h3>
    <p>{{ mainText }}</p>
    <p class="text-sm">{{ subText }}</p>
    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    title: {
      type: String,
      required: true
    },
    mainText: {
      type: String,
      required: true
    },
    subText: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>

</style>
