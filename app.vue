<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <transition name="scrolltop">
      <a
        v-if="scrollPosition > 300"
        href="javascript:void(0);"
        @click="scrollingTop"
        class="scrollToTop"
        ><i class="fa-solid fa-arrow-up-from-bracket"></i
      ></a>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

// useHead({
//   meta: [
//     { name: 'title', content: "The Speakers" },
//     { name: 'description', content: "Wisdom from the World’s Greatest Minds" },
//     { name: 'application-name', content: "The Speakers" },
//     { name: "og:image", content: "/images/og.png"},
//     { name: "keywords", content: "the, speakers, quote, quotes" },
//   ],
// })

// const show = ref<boolean>(true)
const scrollPosition = ref<number>(0);

const route = useRoute();

// watch(route, () => {
//   show.value = true

//   setTimeout(() => {
//     show.value = false
//   }, 300)
// })

onMounted(() => {
  // show.value = false
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
