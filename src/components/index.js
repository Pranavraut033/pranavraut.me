import Vue from "vue";
import VueTypedJs from "vue-typed-js";
import VueWaypoint from "vue-waypoint";

import Icon from "./Icon";
import Container from "./Container";
import Layout from "./Layout";
import Hover from "./Hover";
import ScrollObserverSection from "./ScrollObserverSection";

import "@/assets/styles/index.scss";
import "@mdi/font/css/materialdesignicons.css";

// Waypoint plugin
Vue.use(VueWaypoint);
Vue.use(VueTypedJs);

// Layout
Vue.component("container", Container);
Vue.component("layout", Layout);

// Widgets
Vue.component("icon", Icon);

// Utilities
Vue.component("hover", Hover);
Vue.component("scroll-observer-section", ScrollObserverSection);
