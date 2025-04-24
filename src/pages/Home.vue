<template>
    <div class="space-y-16">
      <HeroSection />
      <FeaturedCategories /> 
      <!-- <FeaturedProducts /> -->
      <!-- <CallToAction />  -->
    </div>
  </template>
  
  <script>
  import HeroSection from '../components/home/HeroSection.vue'
  import FeaturedCategories from '../components/home/FeaturedCategories.vue'
  // import FeaturedProducts from '../components/home/FeaturedProducts.vue'
//   import CallToAction from '../components/home/CallToAction.vue'
  
  export default {
    name: 'HomePage',
    components: {
      HeroSection,
      FeaturedCategories,
      // FeaturedProducts,
    //   CallToAction
    }
  }
  </script>
  
  <style scoped>
  /* Optional scoped styles */
  </style>
  