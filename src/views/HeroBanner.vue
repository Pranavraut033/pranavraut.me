<template>
  <scroll-observer-section id="hero-banner">
    <container class="text-center md:text-left">
      <h1 class="hero-title text-5xl md:text-6xl">
        Pranav Raut
      </h1>
      <p class="hero-sub-title text-1xl md:text-2xl">
        <vue-typed-js
          class="text-center"
          :strings="[
            'Web Designer!',
            'Web Developer!',
            'DevOps Engineer!',
            'App Developer!',
            'Freelancer!',
          ]"
          :loop="true"
          :backDelay="1000"
          :type-speed="75"
          :back-speed="30"
        >
          <span> I'm <span class="typing text-primary-base"></span> </span>
        </vue-typed-js>
      </p>
      <div class="social-button-group justify-center md:justify-start">
        <hover
          v-once
          component="a"
          class="social-button"
          v-slot:default="{ hover }"
          v-for="(sb, i) in socialbuttons"
          :key="i"
          :title="sb.name"
          :href="sb.link"
          :style="{
            animationDelay: `${i * 100 + 1000}ms`,
          }"
        >
          <icon
            class="text-gray-700"
            :class="{ 'text-primary-base': hover }"
            :name="sb.icon"
            size="20"
          ></icon>
        </hover>
      </div>
    </container>
    <div class="hero-arrow text-gray-800">
      <icon name="mdi-chevron-down" large></icon>
    </div>
  </scroll-observer-section>
</template>

<script>
export default {
  data() {
    return {
      socialbuttons: [
        {
          icon: "mdi-github",
          name: "Github",
          link: "https://github.com/pranavraut033",
        },
        {
          icon: "mdi-linkedin",
          name: "LinkedIn",
        },
        {
          icon: "mdi-instagram",
          name: "Instagram",
        },
        {
          icon: "mdi-twitter",
          name: "Twitter",
        },
        {
          icon: "mdi-email",
          name: "Email",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
#hero-banner {
  @apply flex;
  @apply items-center;
  @apply h-screen;

  .social-button-group {
    @apply flex;
    @apply mt-5;

    .social-button {
      &:nth-child(even) {
        @apply mx-5;
      }
    }
  }

  .hero-title {
    @apply font-semibold;
    @apply text-gray-700;
    @apply tracking-wide;
  }

  .hero-sub-title {
    @apply inline-block;
    @apply w-auto;
    @apply mx-auto;
    @apply text-gray-500;
    animation-delay: 550ms !important;
  }

  .hero-title,
  .hero-sub-title {
    // animation: slide-up 450ms cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
    // transform: translateY(30px) translateX(-30px);
    // opacity: 0;
  }

  .social-button {
    // animation: slide-up-buttons 250ms cubic-bezier(0.55, 0.085, 0.68, 0.53)
    //   forwards;
    // transform: translateX(-15px) translateY(50px);
    // opacity: 0;
  }
  .hero-arrow {
    position: absolute;
    bottom: 5vh;
    right: 5vw;
    animation: bounce 2s infinite;
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-0.8rem);
    }
    60% {
      transform: translateY(-0.4rem);
    }
  }

  @keyframes slide-up-buttons {
    0% {
      transform: translateX(-15px) translateY(50px);
      opacity: 0;
    }

    100% {
      transform: translateX(0px) translateY(0px);
      opacity: 1;
    }
  }
}
</style>
