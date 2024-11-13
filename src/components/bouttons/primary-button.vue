<template>
  <button
      type="button"
      class=" rounded-lg inline-block bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
  >
    <slot>

    </slot>
  </button>
</template>

<script>
export default {
  name: 'primary-button'

};
</script>

<style scoped>
 button{
  max-width: 150px;
   max-height: 50px;
   padding: 10px;
}
</style>
