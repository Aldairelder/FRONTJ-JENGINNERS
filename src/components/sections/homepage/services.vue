<script setup>
</script>

<template>
  <section class="bg-white text-[#100f0f] pt-8">
    <!-- Título -->
    <div class="text-center px-8">
      <h1 class="text-3xl font-bold font-sans text-[#1E293B] mb-2">Explora nuestros servicios</h1>
      <h3 class="text-lg font-semibold text-[#1E293B]">¡Contáctennos! &gt;</h3>
    </div>

    <!-- Tarjetas de Servicios -->
    <div class="flex flex-wrap justify-center gap-6 mt-8 px-8">
      <!-- Tarjetas individuales -->
      <div
          class="services-card bg-cover bg-center rounded-lg w-[300px] h-[400px] flex flex-col justify-end p-4 text-white relative overflow-hidden"
          style="background-image: url('/chifondo.fw-1.png')"
      >
        <!-- Capa oscura que aparece en hover -->
        <div class="overlay absolute inset-0 flex flex-col justify-center items-center text-center transition-opacity duration-300">
          <p class="text-lg font-bold">Descubre más sobre este servicio</p>
          <a href="#" class="text-sm underline">Ver más &gt;</a>
        </div>
        <h2 class="text-lg font-bold">Servicios Ing.</h2>
        <a href="#" class="text-sm">Conózcanos &gt;</a>
      </div>
      <div
          class="services-card bg-cover bg-center rounded-lg w-[300px] h-[400px] flex flex-col justify-end p-4 text-white"
          style="background-image: url('/chifondo.fw-7.fw.png')"
      >
        <h2 class="text-lg font-bold">Servicios Ing.</h2>
        <a href="#" class="text-sm">Conózcanos &gt;</a>
      </div>
      <div
          class="services-card bg-cover bg-center rounded-lg w-[300px] h-[400px] flex flex-col justify-end p-4 text-white"
          style="background-image: url('/chifondo.fw-6.fw.png')"
      >
        <h2 class="text-lg font-bold">Servicios Ing.</h2>
        <a href="#" class="text-sm">Conózcanos &gt;</a>
      </div>
      <div
          class="services-card bg-cover bg-center rounded-lg w-[300px] h-[400px] flex flex-col justify-end p-4 text-white"
          style="background-image: url('/chifondo.fw-2.fw.png')"
      >
        <h2 class="text-lg font-bold">Servicios Ing.</h2>
        <a href="#" class="text-sm">Conózcanos &gt;</a>
      </div>
    </div>

    <!-- Segunda tarjeta -->
    <div
        class="bg-cover bg-center rounded-lg mt-8 mx-auto flex flex-col justify-center items-center text-center text-white px-6
               w-[300px] h-[400px] md:w-full md:max-w-7xl md:h-[300px]"
        style="background-image: url('/chifondo.fw-5.fw (1).png')"
    >
      <h2 class="text-lg md:text-3xl font-bold mb-4">Explore más sobre nosotros</h2>
      <p class="text-sm md:text-lg max-w-xs md:max-w-xl">
        The time is now for it to be okay to be great. People in this world shun people for being great.
        For being a bright color. For standing out.
      </p>
      <button class="mt-4 bg-white text-[#100f0f] rounded-md px-4 py-2 md:px-6 md:py-2">Conózcanos..</button>
    </div>
  </section>
</template>
<style>
/* Estilos para la capa oscura */
.services-card {
  position: relative; /* Define la referencia para la posición absoluta de .overlay */
  overflow: hidden;   /* Asegura que los elementos hijos no se salgan de los bordes */
}

.services-card .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Fondo oscuro */
  opacity: 0; /* Ocultar por defecto */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  pointer-events: none; /* Evitar interacción cuando no está visible */
  transition: opacity 0.3s ease; /* Suavizar la transición */
}

.services-card:hover .overlay {
  opacity: 1; /* Mostrar capa oscura al hacer hover */
  pointer-events: auto; /* Permitir interacción con el contenido */
}
</style>

