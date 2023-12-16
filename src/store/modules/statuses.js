import APIService from "../apiService.js";

const statuses = {
  namespaced: true,
  state: {
    link: "/statuses",
    allItems: [],
  },
  getters: {
    getAll: (state) => state.allItems,
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

export default statuses;
