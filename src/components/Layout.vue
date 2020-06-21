<template>
  <div
    class="flex"
    :class="{
      'flex-col': col,
      'h-full': full,
      'items-center': centerV,
      'justify-center': centerH,
      'items-center': centerH && col,
      'justify-center': centerV && col,
      'items-end': endH,
      'justify-end': endV && col,
      'flex-wrap': wrap,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    col: Boolean,
    full: Boolean,
    centerV: Boolean,
    centerH: Boolean,
    endH: Boolean,
    endV: Boolean,
    wrap: Boolean,
  },
};
</script>
