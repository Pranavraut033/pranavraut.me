<template>
  <section
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: { threshold: [0.25, 0.75] },
    }"
    :id="path"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: { path: String },
  methods: {
    onWaypoint({ direction, going, _entry }) {
      let path = "/" + (this.path || "");
      if (going == "in" && this.$route.path != path) this.$router.replace(path);
    },
  },
};
</script>
