import {addUserAddress, getUserAddresses, getUserData } from '../../api/user';
  
  const state = {
    Addresses: [],
    UserData: {},
    status: 'idle'
  };
  
  const getters = {
    selectUserAddresses: (state) => state.Addresses,
    selectUserData: (state) => state.UserData
  };
  
  const actions = {
    async fetchUserDataAsync({ commit }) {
      commit('setStatus', 'loading');
      try {
        const { data } = await getUserData();
        commit('setUserData', data);
      } catch (err) {
        console.error(err);
      }
      commit('setStatus', 'idle');
    },
  
    async fetchUserAddressAsync({ commit }) {
      commit('setStatus', 'loading');
      try {
        const { data } = await getUserAddresses();
        commit('setAddresses', data);
      } catch (err) {
        console.error(err);
      }
      commit('setStatus', 'idle');
    },
  
    async addUserAddressAsync({ commit }, { addressObject }) {
      commit('setStatus', 'loading');
      try {
        const { data } = await addUserAddress(addressObject);
        commit('addAddress', data);
      } catch (err) {
        console.error(err);
      }
      commit('setStatus', 'idle');
    },
  
    async updateUserAddressAsync({ commit }, { updatedata, addressId }) {
      commit('setStatus', 'loading');
      try {
        const { data } = await addUserAddress(updatedata, addressId); // assuming same function updates
        commit('updateAddress', data);
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
    setUserData(state, data) {
      state.UserData = data;
    },
    setAddresses(state, addresses) {
      state.Addresses = addresses;
    },
    addAddress(state, address) {
      state.Addresses.push(address);
    },
    updateAddress(state, data) {
      const index = state.Addresses.findIndex((address) => address.id === data.id);
      if (index !== -1) {
        state.Addresses.splice(index, 1, data.updatedaddress);
      }
    }
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };
  