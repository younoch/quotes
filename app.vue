<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <transition name="scrolltop">
      <div
        v-if="scrollPosition > 300"
        @click="scrollingTop"
        class="scrollToTop"
        >
        <nuxt-icon name="generals/chevron-triple-up"/>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
const scrollPosition = ref<number>(0);

const route = useRoute();

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  scrollPosition.value = window.scrollY;
}

function scrollingTop() {
  window.scrollTo(0, 0);
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.scrolltop-enter-active,
.scrolltop-leave-active {
  transition: all 0.25s ease-out;
}

.scrolltop-enter-from {
  opacity: 0;
  // transform: translateY(10vh);
  bottom: 0vh;
}

.scrolltop-leave-to {
  opacity: 0;
  bottom: 0vh;
}
</style>
