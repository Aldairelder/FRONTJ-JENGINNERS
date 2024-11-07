<template>
  <button
      type="button"
      class="rounded-lg mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'btnSecondary',
};
</script>


<style scoped>

</style>