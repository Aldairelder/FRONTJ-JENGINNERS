<script>
import Welcome from '../../components/sections/welcome.vue';
import primaryButton from '../../components/bouttons/primary-button.vue';
import helpSections from "../../components/sections/helpSections.vue";
import QuestSection from "../../components/sections/QuestSection.vue";

export default {
  name: 'Home',
  components: {
    QuestSection,
    Welcome,
    primaryButton,
    helpSections

  }
};
</script>
<template>
    <div>
      <Welcome />
      <div style="background: white">
        <br>
        <helpSections />
        <QuestSection />
      </div>
    </div>
</template>



<style scoped>

</style>
