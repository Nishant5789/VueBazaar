import axios from 'axios'

const API_URL = process.env.VUE_APP_SERVER_URL || 'http://localhost:8080'

export default {
  // Fetch products with optional filters
  fetchProducts(params = {}) {
    return axios.get(`${API_URL}/products`, {
      params: {
        page: params.page || 1,
        limit: params.limit || 10,
        category: params.category,
        brand: params.brand,
        minPrice: params.minPrice,
        maxPrice: params.maxPrice,
        sortBy: params.sortBy || 'createdAt',
        sortOrder: params.sortOrder || 'desc',
        search: params.search
      }
    })
  },

  // Fetch single product by ID
  fetchProductById(productId) {
    return axios.get(`${API_URL}/products/${productId}`)
  },

  // Fetch all categories
  fetchCategories() {
    return axios.get(`${API_URL}/category`)
  },

  // Fetch all brands
  fetchBrands() {
    return axios.get(`${API_URL}/brands`)
  }
}