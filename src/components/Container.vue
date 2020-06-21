<template>
  <div
    class="container mx-auto px-5 md:px-24 lg:px-32"
    :class="{ 'h-full': fillHeight }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: { fillHeight: Boolean },
};
</script>
