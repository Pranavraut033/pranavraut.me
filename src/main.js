import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "boxicons";

import "./components";

Vue.config.productionTip = false;

router.afterEach((to) => {
  document.title = (to.name && `${to.name} | Pranav Raut`) || "pranavraut.me";
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
