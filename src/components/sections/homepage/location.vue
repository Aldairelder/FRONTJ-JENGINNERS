<script setup>
</script>

<template>
  <section class="bg-gradient-to-b from-blue-50 to-gray-100 py-12 px-4 text-[#100f0f] font-sans mt-10">
    <div class="text-center">
      <p class="text-base font-semibold text-[#0154CE] tracking-wide pt-0">Encuéntranos</p>
      <h1 class="text-2xl font-bold">Nuestra Ubicación</h1>
    </div>
    <div class="flex flex-col md:flex-row md:justify-center gap-8 mt-10 items-center">
      <!-- Card de ubicación -->
      <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center md:text-left border-t-4 border-blue-500">
        <div class="flex items-center gap-2 justify-center md:justify-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 10l6-6m0 0l6 6m-6-6v12m6-6l6-6m-6 6v6m-6-6H3m6 0h12" />
          </svg>
          <p class="text-xl font-bold">Perú</p>
        </div>
        <p class="mt-4 text-gray-700">CAL. Los Tulipanes MZA. D LOTE 05 A.H SALAMANCA-TUMBES</p>
      </div>
      <!-- Mapa -->
      <div class="bg-white rounded-xl shadow-lg w-full max-w-2xl overflow-hidden">
        <iframe
            class="w-full h-64 md:h-80 border-0"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d497.767861923393!2d-80.4490465954949!3d-3.554527942406922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1732679945887!5m2!1ses-419!2spe"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>
