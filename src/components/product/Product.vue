<template>
  <div v-if="product" class="product-card">
    <img :src="product.image" alt="product" />
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <span>\${{ product.price }}</span>
    </div>
  </div>
  <div v-else class="loading">Loading...</div>
</template>

<script>
import api from '../../api/product';

export default {
  name: 'Product',
  data() {
    return {
      product: null,
    };
  },
  created() {
    const productId = this.$route.params.id;
    api.fetchProductById(productId).then(res => {
      this.product = res.data;
    });
  },
};
</script>

<style scoped>
</style>