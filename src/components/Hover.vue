<template>
  <component
    :is="component || 'div'"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <slot v-bind:hover="hover"></slot>
  </component>
</template>

<script>
export default {
  props: { component: String },
  data() {
    return {
      hover: false,
    };
  },
};
</script>
