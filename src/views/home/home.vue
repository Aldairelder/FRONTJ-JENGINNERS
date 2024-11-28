<script>
import Welcome from '../../components/sections/welcome.vue';
import PrimaryButton from '../../components/bouttons/primary-button.vue';
import About from '../../components/sections/homepage/about-us.vue';
import MisionVision from '../../components/sections/homepage/mision-vision.vue';
import ValuesSections from "../../components/sections/homepage/values-sections.vue";
import Services from "../../components/sections/homepage/services.vue";
import Location from "../../components/sections/homepage/location.vue";


export default {
  name: 'Home',
  components: {
    Location,
    Services,

    ValuesSections,
    MisionVision,
    Welcome,
    PrimaryButton,
    About,
  }
};
</script>

<template>
  <div>
    <Welcome />
    <services/>
    <location />
  </div>
</template>

<style scoped>
/* Agrega estilos específicos aquí si es necesario */
</style>
