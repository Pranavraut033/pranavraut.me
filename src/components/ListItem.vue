<template>
  <li
    class="list-item"
    :title="title"
    :class="{ 'list-item--active': activeModel }"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="scrollToHref"
  >
    <router-link :to="href" class="list-item-link">
      <div class="list-item-action">
        <icon
          v-bind="$props"
          :name="icon"
          :active="hover || activeModel"
          medium
        >
        </icon>
      </div>
      <div class="list-item-title">
        {{ title }}
      </div>
    </router-link>
  </li>
</template>

<script>
import scrollToElement from "scroll-to-element";

export default {
  props: {
    title: String,
    icon: String,
    onActive: String,
    href: String,
    active: Boolean,
  },
  data() {
    return {
      hover: false,
      activeModel: this.model,
    };
  },
  computed: {
    navigation: {
      set(a) {
        this.$store.state.app.navigation = a;
      },
      get(a) {
        return this.$store.state.app.navigation;
      },
    },
  },
  watch: {
    $route(a) {
      this.activeModel = a.path == this.href;
    },
  },
  methods: {
    scrollToHref() {
      scrollToElement("#" + (this.href.replace("/", "") || "hero-banner"), {
        offset: 0,
        ease: "inOutExpo",
        duration: 1200,
      });
      this.navigation = false;
    },
  },
  mounted() {
    this.activeModel = this.$route.path == this.href;
  },
};
</script>
