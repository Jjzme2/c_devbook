import { createStore } from "vuex";
// Below, you will import the modules you created in the store folder.

import appState from "./modules/appState";
import quotes from "./modules/quotes";
import goals from "./modules/goals";
import reminders from "./modules/reminders";
import suggestions from "./modules/suggestions";
import statuses from "./modules/statuses";
import motivations from "./modules/motivations";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    appState,
    quotes,
    goals,
    reminders,
    suggestions,
    statuses,
    motivations,
  },
});

export default store;
