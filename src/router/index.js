import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/main/HomeView.vue";
import AboutView from "../views/main/AboutView.vue";
import GoalsView from "../views/pages/GoalView.vue";
import ReminderView from "../views/pages/ReminderView.vue";
import SuggestionView from "../views/pages/SuggestionView.vue";

import GoalForm from "@/components/app/mainElements/forms/GoalForm.vue";

const appName = "DevBook";

const routeColor = "#333333";

const routes = [
  // UNAUTHORISED ROUTES
  {
    path: "/about",
    name: "about Us",
    component: AboutView,
    meta: {
      title: `${appName} -- About Us`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },

  // AUTHORISED ROUTES
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: `${appName} -- Home`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },

  {
    path: "/goals",
    name: "goals",
    component: GoalsView,
    meta: {
      title: `${appName} -- Goals`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },

  {
    path: "/goals/:goalId",
    name: "formsGoal",
    component: GoalForm,
    meta: {
      title: `${appName} -- Goal`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },

  {
    path: "/reminders",
    name: "reminders",
    component: ReminderView,
    meta: {
      title: `${appName} -- Reminders`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },

  {
    path: "/suggestions",
    name: "suggestions",
    component: SuggestionView,
    meta: {
      title: `${appName} -- Suggestions`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
