<template>
  <div class="mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Products</h1>
    
    <!-- <ProductFilter @filter="handleFilter" /> -->

    <!-- <ProductList :products="products" /> -->

    <!-- <ProductPagination 
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-changed="fetchProducts"
    /> -->
  </div>
</template>

<script>
import { getAllProducts } from './api/product'
// import ProductList from './components/product/ProductList.vue'
// import ProductFilter from './components/product/ProductFilter.vue'
// import ProductPagination from './components/product/ProductPagination.vue'

export default {
  name: 'ProductPage',
  components: {
    // ProductList,
    // ProductFilter,
    // ProductPagination
  },
  data() {
    return {
      products: [],
      currentPage: 1,
      totalPages: 1,
      filters: {}
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts(page = 1) {
      this.currentPage = page
      try {
        const response = await getAllProducts({ page, ...this.filters })
        this.products = response.data.products
        this.totalPages = response.data.totalPages
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
    },
    // handleFilter(filterValues) {
    //   this.filters = filterValues
    //   this.fetchProducts(1)
    // }
  }
}
</script>
