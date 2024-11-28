<script setup>
import BSection from "../../components/sections/about/bSection.vue";
import StarSection from "../../components/sections/about/starSection.vue";
import MvSection from "../../components/sections/about/mvSection.vue";
import MSection from "../../components/sections/about/mSection.vue";
import ValSection from "../../components/sections/about/valSection.vue";
import TeamSection from "../../components/sections/about/teamSection.vue";
</script>

<template>
  <b-section />
  <div class="divider"></div>
  <star-section />
  <div class="divider"></div>
  <mv-section/>
  <m-section></m-section>
  <val-section/>
  <team-section/>
</template>

<style scoped>
.divider {
  margin: 30px auto;
  width: 80%;
  height: 1px;
  background-color: #ddd;
}
</style>
