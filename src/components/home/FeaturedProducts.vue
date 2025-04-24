<template>
    <section class="px-4 max-w-7xl mx-auto">
      <h2 class="text-2xl font-semibold text-center my-8">Featured Products</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Looping through a static array of products (you can modify it as needed) -->
        <!-- <ProductCard v-for="i in 8" :key="i" /> -->
      </div>
    </section>
  </template>
  
  <script>
  import ProductCard from "../../components/product/ProductCard.vue";
  
  export default {
    name: "FeaturedProducts",
    components: {
      ProductCard
    }
  };
  </script>
  
  <style scoped>
  /* Optional scoped styles */
  </style>
  