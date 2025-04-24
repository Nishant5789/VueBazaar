import { fetchBrands, fetchCategory, fetchProductById, fetchProducts } from '../../api/product';

const getDefaultQuery = () => ({
  category: '',
  brand: '',
  _sort: '',
  _order: '',
  _page: 1,
  _limit: 10,
  isupdated: false,
});

const state = {
  products: [],
  brands: [],
  category: [],
  singleProductDetail: {},
  queryUrlObject: getDefaultQuery(),
  totalFetchProducts: 0,
  status: 'idle',
};

const getters = {
  selectProducts: (state) => state.products,
  selectSingleProduct: (state) => state.singleProductDetail,
  selectBrand: (state) => state.brands,
  selectCategory: (state) => state.category,
  selectQueryUrl: (state) => state.queryUrlObject,
  selectTotalFetchProducts: (state) => state.totalFetchProducts,
};

const actions = {
  async fetchProducts({ commit, state }) {
    commit('setStatus', 'loading');
    try {
      const { data, headers } = await fetchProducts(state.queryUrlObject);
      commit('setProducts', { productData: data, total: headers['x-total-count'] });
    } catch (error) {
      console.error(error);
    }
    commit('setStatus', 'idle');
  },

  async fetchProductById({ commit }, productId) {
    commit('setStatus', 'loading');
    try {
      const { data } = await fetchProductById(productId);
      commit('setSingleProduct', data);
    } catch (error) {
      console.error(error);
    }
    commit('setStatus', 'idle');
  },

  async fetchCategory({ commit }) {
    commit('setStatus', 'loading');
    try {
      const { data } = await fetchCategory();
      commit('setCategory', data);
    } catch (error) {
      console.error(error);
    }
    commit('setStatus', 'idle');
  },

  async fetchBrand({ commit }) {
    commit('setStatus', 'loading');
    try {
      const { data } = await fetchBrands();
      commit('setBrands', data);
    } catch (error) {
      console.error(error);
    }
    commit('setStatus', 'idle');
  },
};

const mutations = {
  setProducts(state, { productData, total }) {
    state.products = productData;
    state.totalFetchProducts = total;
  },
  setSingleProduct(state, product) {
    state.singleProductDetail = product;
  },
  setBrands(state, brands) {
    state.brands = brands;
  },
  setCategory(state, categories) {
    state.category = categories;
  },
  setStatus(state, status) {
    state.status = status;
  },
  updateQueryUrl(state, payload) {
    const key = Object.keys(payload)[0];
    const value = Object.values(payload)[0];
    state.queryUrlObject = { ...state.queryUrlObject, [key]: value, isupdated: true };
  },
  resetQueryUrl(state) {
    state.queryUrlObject = getDefaultQuery();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
