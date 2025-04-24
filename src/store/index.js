import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import user from './modules/user'
import product from './modules/product'
import cart from './modules/cart'
import order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    user,
    product,
    cart,
    order
  }
})
