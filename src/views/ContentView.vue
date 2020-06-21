<template>
  <main>
    <hero-banner></hero-banner>
    <about></about>
    <resume></resume>
    <portfolio></portfolio>
    <services></services>
  </main>
</template>

<script>
import HeroBanner from "./HeroBanner.vue";
import About from "./About.vue";
import Resume from "./Resume.vue";
import Portfolio from "./Portfolio.vue";
import Services from "./Services.vue";

export default {
  name: "home",
  components: {
    HeroBanner,
    About,
    Resume,
    Portfolio,
    Services,
  },
};
</script>
