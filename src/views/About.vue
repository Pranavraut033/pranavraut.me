<template>
  <scroll-observer-section id="about" path="about">
    <container class="text-center md:text-left">
      <div class="section-header">
        <h1><span>About</span></h1>
        <p class="">
          Learn more about me
        </p>
      </div>
      <layout class="py-5 text-gray-700" wrap>
        <div class="w-full md:w-auto">
          <img
            src="http://placekitten.com/400/400"
            class="h-auto w-full mx-auto rounded-sm"
            style="max-width: 320px;"
          />
        </div>
        <layout col class="flex-1 px-12 pt-8 md:pt-0">
          <h2 class="text-2xl md:text-3xl font-bold mb-4 text-primary-base">
            <span>Web Developer</span> &amp;
            <span class="whitespace-no-wrap">DevOps Engineer</span>
          </h2>
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad nihil
            deleniti odio nesciunt unde minima magni
          </p>
        </layout>
      </layout>
    </container>
  </scroll-observer-section>
</template>

<script>
export default {};
</script>

<style lang="scss">
#about {
  @apply min-h-screen;
  @apply pt-8;
  @apply flex;
  @apply items-center;

  * {
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1);
  }
}
</style>
