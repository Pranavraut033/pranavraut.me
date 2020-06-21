<template>
  <div>
    <div
      class="overlay"
      @click="navigation = false"
      :class="{ 'overlay--active': navigation }"
    ></div>
    <button class="navigation-button" @click="navigation = !navigation">
      <icon name="mdi-menu" medium></icon>
    </button>
    <div class="navbar" :class="{ 'navbar--closed': !navigation }">
      <ul class="list">
        <list-item
          :style="{
            transitionDelay: `${i * 30}ms`,
            animationDelay: `${i * 50 + 50}ms`,
          }"
          class="slide-from-left_margin"
          v-for="(link, i) in links"
          :key="i"
          v-bind="link"
          v-once
        ></list-item>
      </ul>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem";
import "@/assets/styles/navbar.scss";

export default {
  components: { ListItem },
  data() {
    return {
      links: [
        {
          title: "Home",
          icon: "mdi-home-outline",
          onActive: "mdi-home",
          href: "/",
        },
        {
          title: "About",
          icon: "mdi-account-outline",
          onActive: "mdi-account",
          href: "/about",
        },
        {
          title: "Resume",
          icon: "mdi-file-document-outline",
          onActive: "mdi-file-document",
          href: "/resume",
        },
        {
          title: "Portfolio",
          icon: "mdi-cards-outline",
          onActive: "mdi-cards",
          href: "/portfolio",
        },
        {
          title: "Services",
          icon: "mdi-room-service-outline",
          onActive: "mdi-room-service",
          href: "/services",
        },
        {
          title: "Contact",
          icon: "mdi-email-outline",
          onActive: "mdi-email",
          href: "/contact",
        },
      ],
    };
  },
  computed: {
    navigation: {
      set(a) {
        this.$store.state.app.navigation = a;
      },
      get() {
        return this.$store.state.app.navigation;
      },
    },
  },
};
</script>
