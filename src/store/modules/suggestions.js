import APIService from "../apiService.js";

const suggestions = {
  namespaced: true,
  state: {
    link: "/suggestions",
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
        if (APIService.verifyType(response, "Array")) {
          commit("setAll", response);
        } else if (APIService.verifyType(response, "object")) {
          // response is an object. Handle appropriately, if this is desirable.
          console.warn(
            "Suggestion Response is an object. This has been converted to an array with a single item."
          );
          commit("setAll", [response]);
        } else {
          // response is neither an object nor an array. Handle appropriately, if this is desirable.
          console.error(
            "Suggestion Response is neither an object nor an array. Handle appropriately, if this is desirable."
          );
          commit("appState/setLoading", false, { root: true });
        }
      } catch (error) {
        APIService.handleError(commit, error);
      }
    },
  },
  modules: {},
};

export default suggestions;
