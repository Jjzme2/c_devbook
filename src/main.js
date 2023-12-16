import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import utilPlugin from "@/assets/util/utilPlugin.js";

const appName = "DevBook";

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || appName; // Set the title from the route meta or use a default title
  next();
});

// router.beforeEach((to, from, next) => {
// 	if (to.matched.some((record) => record.meta.requiresAuth)) {
// 		if (localStorage.getItem("jwtToken") == null) {
// 			next({ name: "landing" });
// 		} else {
// 			next();
// 		}
// 	} else {
// 		next();
// 	}
// });

createApp(App)
  .use(store)
  .use(router)
  .use(utilPlugin)
  // .use(userPlugin)
  .mount("#app");
