<script setup>
import pimage from "../../imgsection/image.vue";
import Ptitle from "../../titles/ptitle.vue";
</script>

<template>
  <section class="main-section">
    <div class="val-title">
      <ptitle
          text="AstroWind's Blueprint: Fun Meets Functionality"
      />
    </div>
    <div class="val-bd">
      <!-- Imagen -->
      <div class="val-db-img">
        <pimage :src="'../../../public/chifondo.fw-0..fw.png'" :alt="'hero imagen'" class="custom-image" />
      </div>
      <!-- Valores con descripción -->
      <div class="val-bd-values">
        <div class="bd-values-val">
          <div class="iconodecheck">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>

          </div>

          <p>Este es el primer valor y voy a describirlo</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main-section {
  display: flex;
  flex-direction: column;
  padding: 15px 50px;
  box-sizing: border-box;
  background: #e5e7eb;
  gap: 20px;
  align-items: center;
}


.val-title {
  text-align: center;
  color: #100f0f;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
.val-bd {
  display: flex;
  justify-content: space-between; /* Espacio entre las columnas */
  align-items: center;
  gap: 100px; /* Espacio entre las columnas */

}

/* Imagen */
.val-db-img {
  flex: 1; /* Ocupa una columna */
  display: flex;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
}

/* Valores con descripción */
.val-bd-values {
  flex: 1; /* Ocupa otra columna */
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espacio entre valores */
}

.bd-values-val {
  display: flex;
  align-items: center;
  gap: 10px; /* Espacio entre ícono y texto */
  color: black;
}

.iconodecheck {
  font-size: 18px;
  color: #10b981; /* Verde para el ícono */
}
</style>
