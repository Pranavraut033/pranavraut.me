<template>
  <div id="appbar">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#appbar {
  position: fixed;
  @apply p-4;
}
</style>
