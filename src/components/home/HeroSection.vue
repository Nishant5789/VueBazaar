<template>
  <section
    class="bg-blue-50 py-16 px-4 text-center lg:text-left lg:flex lg:items-center lg:justify-between lg:px-20"
  >
    <div class="max-w-xl mx-auto lg:mx-0">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold">
        Welcome to ShopVerse
      </h1>
      <p class="text-lg sm:text-xl text-gray-600 mt-4">
        Discover the latest trends and exclusive deals!
      </p>
      <button
        class="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full text-sm sm:text-base"
      >
        Shop Now →
      </button>
    </div>
    <div class="hidden lg:block">
      <img src="/hero-image.png" alt="Hero Image" class="w-[400px] h-auto" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
/* Optional scoped styles */
</style>
