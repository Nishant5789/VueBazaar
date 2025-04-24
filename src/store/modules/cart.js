import {addItem, getCartItmes, removeAllItem, removeItem, updateItem} from '../../api/cart';
  
  const state = {
    items: [],
    status: 'idle',
    msg: ''
  };
  
  const getters = {
    selectCartItems: (state) => state.items,
    selectCartMsg: (state) => state.msg
  };
  
  const actions = {
    async fetchCartItemsAsync({ commit }) {
      commit('setStatus', 'loading');
      try {
        const { data } = await getCartItmes();
        commit('setItems', data);
        commit('setMsg', '');
      } catch (err) {
        console.error(err);
      }
      commit('setStatus', 'idle');
    },
  
    async addCartItemsAsync({ commit }, cartItem) {
      commit('setStatus', 'loading');
      try {
        const { data } = await addItem(cartItem);
        if (data.msg) {
          commit('setMsg', data.msg);
        } else {
          commit('addItem', data);
          commit('setMsg', 'Product successfully added');
        }
      } catch (err) {
        console.error(err);
      }
      commit('setStatus', 'idle');
    },
  
    async updateCartItemsAsync({ commit }, { quantity, cartItemId }) {
      commit('setStatus', 'loading');
      try {
        const { data } = await updateItem({ quantity }, cartItemId);
        commit('updateItemQuantity', data);
      } catch (err) {
        console.error(err);
      }
      commit('setStatus', 'idle');
    },
  
    async removeCartItemsAsync({ commit }, cartItemId) {
      commit('setStatus', 'loading');
      try {
        await removeItem(cartItemId);
        commit('removeItem', cartItemId);
      } catch (err) {
        console.error(err);
      }
      commit('setStatus', 'idle');
    },
  
    async removeAllItemFromCartAsync({ commit }) {
      commit('setStatus', 'loading');
      try {
        await removeAllItem();
        commit('clearCart');
      } catch (err) {
        console.error(err);
      }
      commit('setStatus', 'idle');
    }
  };
  
  const mutations = {
    setStatus(state, status) {
      state.status = status;
    },
    setItems(state, items) {
      state.items = items;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    addItem(state, item) {
      state.items.push(item);
    },
    updateItemQuantity(state, updatedItem) {
      const index = state.items.findIndex((item) => item.id === updatedItem.id);
      if (index !== -1) {
        state.items[index].quantity = updatedItem.quantity;
      }
    },
    removeItem(state, cartItemId) {
      state.items = state.items.filter((item) => item.id !== cartItemId);
    },
    clearCart(state) {
      state.items = [];
    }
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };
  