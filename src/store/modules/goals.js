import APIService from "../apiService.js";

const goals = {
  namespaced: true,
  state: {
    link: "/goals",
    allItems: [],
    emptyObject: {},
  },
  getters: {
    getAll: (state) => state.allItems,
    getById: (state) => (id) => {
      if (state.allItems.find((item) => item.id === id) === undefined) {
        if (state.emptyObject == {}) {
          throw new Error(
            "No goal with this id, and `Empty Goal` has not been initialized."
          );
        }
        return state.emptyObject;
      }

      return state.allItems.find((item) => item.id === id);
    },
    getEmpty: (state) => state.emptyObject,
  },
  mutations: {
    setAll: (state, data) => {
      state.allItems = data;
    },
    setEmpty: (state, data) => {
      state.emptyObject = data;
    },
  },
  actions: {
    async fetchAll({ commit, state }) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });

      try {
        const response = await APIService.makeRequest.get(state.link);
        if (response.length === 0) {
          console.warn("No goals available");
        }
        commit("setAll", response);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        APIService.handleError(commit, error);
      }
    },
    async getEmpty({ commit, state }) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });

      try {
        const response = await APIService.makeRequest.get(
          state.link + "/empty"
        );
        console.log(response);
        commit("setEmpty", response);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        APIService.handleError(commit, error);
      }
    },
    async createNew({ commit, state }, data) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });

      try {
        const response = await APIService.makeRequest.post(state.link, data);
        console.log(response);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        APIService.handleError(commit, error);
      }
    },
  },
  modules: {},
};

export default goals;
