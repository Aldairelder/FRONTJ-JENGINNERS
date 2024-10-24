<script>
import Welcome from '../../components/sections/welcome.vue';

export default {
  name: 'Home',
  components: {
    Welcome
  }
};
</script>
<template>
    <div>
        <h1>hola</h1>
      <Welcome />
    </div>
</template>



<style scoped>
    h1{
        font-size: 400px;
    }
</style>
