<script setup>
defineProps({
  src: String,
  alt: String
})
</script>

<template>
  <div>
    <img
        :src="src"
        :alt="alt"

    />
  </div>
</template>

<style scoped>
  img{
    border-radius: 15px;
  }
</style>