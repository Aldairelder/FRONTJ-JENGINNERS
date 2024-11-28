<script setup>

import Ptitle from "../../titles/ptitle.vue";
import Vcard from "../../cards/vcard.vue";
</script>

<template>
<section>
  <div class="mav-title">
    <ptitle
    text="Estos son los Valores de Nuestra Empresa"
    ></ptitle>
  </div>
  <div class="mav-content">
    <div class="mission">

    </div>
    <div class="vision">
      <div class="vision-card">
        <vcard></vcard>
        <vcard></vcard>
        <vcard></vcard>
      </div>
    </div>
    <div class="mision">
      <div class="vision-card">
        <vcard></vcard>
        <vcard></vcard>
        <vcard></vcard>
      </div>
    </div>

  </div>
</section>
</template>

<style scoped>
section{
  background: #ffffff;
  box-sizing: border-box;
  height: 600px;
  color: #100f0f;
  padding-top: 30px;
  font-family: sans-serif;
}
.mav-title{
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}
.mav-content{
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 30px;
}
.vision-card{
  display:flex;
  flex-direction: column;
  gap: 20px;
}
</style>