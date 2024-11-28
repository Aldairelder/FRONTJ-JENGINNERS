<template>
  <footer class="bg-white text-black py-8">
    <div class="container mx-auto text-center px-4">
      <!-- Links Section -->
      <div class="flex flex-wrap justify-center space-x-6 mb-4">
        <a href="#" class="hover:text-gray-600 text-sm sm:text-base">About</a>
        <a href="#" class="hover:text-gray-600 text-sm sm:text-base">Blog</a>
        <a href="#" class="hover:text-gray-600 text-sm sm:text-base">Jobs</a>
        <a href="#" class="hover:text-gray-600 text-sm sm:text-base">Press</a>
        <a href="#" class="hover:text-gray-600 text-sm sm:text-base">Accessibility</a>
        <a href="#" class="hover:text-gray-600 text-sm sm:text-base">Partners</a>
      </div>
      <!-- Social Media Icons -->
      <div class="flex justify-center space-x-4 sm:space-x-6 mb-4">
        <a href="#" class="hover:text-gray-600 text-xl sm:text-2xl">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#" class="hover:text-gray-600 text-xl sm:text-2xl">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="hover:text-gray-600 text-xl sm:text-2xl">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="hover:text-gray-600 text-xl sm:text-2xl">
          <i class="fab fa-github"></i>
        </a>
        <a href="#" class="hover:text-gray-600 text-xl sm:text-2xl">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
      <!-- Footer Note -->
      <p class="text-gray-600 text-xs sm:text-sm md:text-base">
        © 2024 Your Company, Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.container {
  margin: 100px auto 0;
}
</style>
