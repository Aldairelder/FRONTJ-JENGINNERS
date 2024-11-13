<script>
import Welcome from '../../components/sections/welcome.vue';
import primaryButton from '../../components/bouttons/primary-button.vue';
import about from '../../components/sections/homepage/about-us.vue';

export default {
  name: 'Home',
  components: {
    Welcome,
    primaryButton,
    about,


  }
};
</script>
<template>
    <div>
      <Welcome />
      <about/>
    </div>

</template>



<style scoped>
about{

}
</style>
