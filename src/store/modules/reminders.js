import APIService from "../apiService.js";

const reminders = {
  namespaced: true,
  state: {
    link: "/reminders",
    allItems: [],
  },
  getters: {
    getAll: (state) => state.allItems,
    getById: (state) => (id) => {
      if (!state.allItems.length) return null;
      return state.allItems.find((item) => item.id === id);
    },
  },
  mutations: {
    setAll: (state, data) => {
      state.allItems = data;
    },
  },
  actions: {
    async fetchAll({ commit, state }) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });

      try {
        const response = await APIService.makeRequest.get(state.link);
        commit("setAll", response);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        APIService.handleError(commit, error);
      }
    },
  },
  modules: {},
};

export default reminders;
