<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ContentView from "@/views/ContentView.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;700&display=swap");
html,
body {
  @apply h-full;
  @apply w-full;
  @apply font-sans;
}

.animate {
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
</style>
