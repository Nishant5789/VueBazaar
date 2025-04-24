import {checkUser, createUser, loginUser, signOut } from '../../api/auth';
  
  const state = {
    loggedInUserToken: null,
    status: 'idle',
    error: null
  };
  
  const getters = {
    selectLoggedInUser: (state) => state.loggedInUserToken,
    selectError: (state) => state.error
  };
  
  const actions = {
    async createUserAsync({ commit }, userData) {
      commit('setStatus', 'loading');
      try {
        const response = await createUser(userData);
        localStorage.setItem('jwt', response.data);
        commit('setUserToken', response.data);
      } catch (error) {
        console.error(error);
        commit('setError', error);
      } finally {
        commit('setStatus', 'idle');
      }
    },
  
    async loginUserAsync({ commit }, loginInfo) {
      commit('setStatus', 'loading');
      try {
        const response = await loginUser(loginInfo);
        commit('setUserToken', response.data);
      } catch (error) {
        console.error(error);
        commit('setError', error);
      } finally {
        commit('setStatus', 'idle');
      }
    },
  
    async checkUserAsync({ commit }, loginData) {
      commit('setStatus', 'loading');
      try {
        const response = await checkUser(loginData);
        commit('setUserToken', response.data);
      } catch (error) {
        console.error(error);
        commit('setError', error);
      } finally {
        commit('setStatus', 'idle');
      }
    },
  
    async signOutAsync({ commit }) {
      commit('setStatus', 'loading');
      try {
        await signOut();
        commit('setUserToken', null);
      } catch (error) {
        console.error(error);
        commit('setError', error);
      } finally {
        commit('setStatus', 'idle');
      }
    }
  };
  
  const mutations = {
    setStatus(state, status) {
      state.status = status;
    },
    setUserToken(state, token) {
      state.loggedInUserToken = token;
      state.error = null;
    },
    setError(state, error) {
      state.error = error;
    }
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };
  