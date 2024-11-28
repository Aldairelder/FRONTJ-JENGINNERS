<script setup>
defineProps({
  icon: String,
  step: String,
  description: String
})
</script>

<template>
  <div class="step-card">
    <div class="step-title">
      <div class="icon">
        <span :class="icon"></span>
      </div>
      <div><h2>{{ step }}</h2></div>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>
.step-card {
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
}
.step-title{
  display: flex;
}
.step-card h2 {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 8px 0;
  color: #333;
}

.step-card p {
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.6;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e0f2ff; /* Color de fondo suave */
  color: #007bff; /*1 Color del ícono */
  font-size: 20px;
  margin-right: 10px;
}
</style>