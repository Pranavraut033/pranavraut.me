import Vue from "vue";
import Router from "vue-router";
import ContentView from "./views/ContentView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "Home",
      path: "/",

      component: ContentView,
      children: [
        {
          name: "About",
          path: "about",
        },
        {
          name: "Resume",
          path: "resume",
        },
        {
          name: "Services",
          path: "services",
        },
        {
          name: "Portfolio",
          path: "portfolio",
        },
        {
          name: "Contact",
          path: "contact",
        },
      ],
    },
  ],
});
