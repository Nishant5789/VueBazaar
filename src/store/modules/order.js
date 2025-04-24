import { createOrder, getAllOrderByUser, removeOrder, updateOrder } from '../../api/order';

const state = {
  orders: [],
  status: 'idle',
  currentOrderId: null,
};

const getters = {
  selectOrders: (state) => state.orders,
  selectCurrOrderId: (state) => state.currentOrderId,
};

const actions = {
  async createOrderAsync({ commit }, orderObject) {
    commit('setStatus', 'loading');
    try {
      const { data } = await createOrder(orderObject);
      commit('addOrder', data);
      commit('setCurrentOrderId', data.id);
    } catch (error) {
      console.error(error);
    }
    commit('setStatus', 'idle');
  },

  async fetchAllOrdersAsync({ commit }) {
    commit('setStatus', 'loading');
    try {
      const { data } = await getAllOrderByUser();
      commit('setOrders', data);
      commit('setCurrentOrderId', null);
    } catch (error) {
      console.error(error);
    }
    commit('setStatus', 'idle');
  },

  async updateOrdersAsync({ commit }, { updateOrderField, orderId }) {
    commit('setStatus', 'loading');
    try {
      const { data } = await updateOrder(updateOrderField, orderId);
      commit('updateOrder', data);
    } catch (error) {
      console.error(error);
    }
    commit('setStatus', 'idle');
  },

  async removeOrdersAsync({ commit }, orderId) {
    commit('setStatus', 'loading');
    try {
      await removeOrder(orderId);
      commit('removeOrder', orderId);
    } catch (error) {
      console.error(error);
    }
    commit('setStatus', 'idle');
  },
};

const mutations = {
  setStatus(state, status) {
    state.status = status;
  },
  setOrders(state, orders) {
    state.orders = orders;
  },
  addOrder(state, newOrder) {
    state.orders.push(newOrder);
  },
  updateOrder(state, updatedOrder) {
    const index = state.orders.findIndex((order) => order.id === updatedOrder.id);
    if (index !== -1) {
      state.orders.splice(index, 1, updatedOrder);
    }
  },
  removeOrder(state, orderId) {
    state.orders = state.orders.filter((order) => order.id !== orderId);
  },
  setCurrentOrderId(state, id) {
    state.currentOrderId = id;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
