<script setup>
</script>

<template>
  <section class="msection">
    <div class="images">
      <div>
        <img src="/chifondo.fw-7.fw.png" alt="Imagen 1" />
      </div>
    </div>
    <div class="content">
      <h2>Nuestra Misión</h2>
      <p>
        Embarcarse en un proyecto de construcción puede ser abrumador. Con
        nuestros servicios profesionales de consulta, te guiamos en cada etapa,
        asegurándonos de que tomes decisiones informadas. Ya seas un aficionado
        al bricolaje o un contratista experimentado, nuestros expertos están
        disponibles para ofrecerte asesoramiento adaptado.
      </p>
    </div>

  </section>
</template>

<style scoped>
.msection {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px ;
  box-sizing: border-box;
  padding: 60px;
  font-family: sans-serif;

  border-radius: 10px;
}

.content {
  max-width: 40%; /* Ajustar ancho para alineación */
}

img {
  width:700px; /* Ajustar tamaño de las imágenes */
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 42px;
  font-weight: bold;
  color: #1f2937; /* Texto oscuro */
}

p {
  margin-top: 15px;
  font-size: 18px;
  line-height: 1.6;
  color: #4b5563; /* Texto gris */
}

span {
  color: #4f46e5; /* Azul vibrante */
  font-weight: normal;
}
</style>
