<template>
  <span
    class="mdi animate"
    :class="[
      active ? onActive : name,
      {
        'mdi-24px': medium,
        'mdi-36px': large,
        'mdi-48px': xLarge,
      },
    ]"
    :style="size && { fontSize: `${size}pt` }"
  >
  </span>
</template>

<script>
export default {
  props: {
    color: String,
    name: String,
    onActive: String,
    active: Boolean,
    medium: Boolean,
    large: Boolean,
    xLarge: Boolean,
    size: String,
  },
};
</script>
