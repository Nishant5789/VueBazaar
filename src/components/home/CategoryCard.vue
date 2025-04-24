<template>
    <div
      class="bg-white shadow hover:shadow-lg rounded-lg p-4 flex flex-col items-center text-center cursor-pointer transition"
    >
      <div class="text-4xl mb-2">{{ icon }}</div>
      <span class="font-medium text-gray-700">{{ label }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CategoryCard',
    props: {
      icon: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional scoped styles */
  </style>
  