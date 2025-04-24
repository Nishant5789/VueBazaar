<template>
  <section class="px-4 max-w-7xl mx-auto">
    <h2 class="text-2xl font-semibold text-center mb-6">Shop by Category</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <CategoryCard icon="🥿" label="Shoes" />
      <CategoryCard icon="👕" label="Clothes" />
      <CategoryCard icon="⌚" label="Watches" />
      <CategoryCard icon="👜" label="Bags" />
    </div>
  </section>
</template>
  
  <script setup>
import CategoryCard from "./CategoryCard.vue";
</script>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
/* Optional scoped styles */
</style>
  