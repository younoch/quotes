<template>
  <div>
    <div id="top"></div>
    <transition name="fade">
      <div v-if="show" class="preloader">
        <div class="preloader__inner">
          <div class="preloader__icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </transition>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <transition name="scrolltop">
      <a v-if="scrollPosition > 300" href="javascript:void(0);" @click="scrollingTop" class="scrollToTop"><i
          class="fa-solid fa-arrow-up-from-bracket"></i></a>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'DefaultApp',
  data() {
    return {
      show: true,
      scrollPosition: 0
    }
  },

  watch: {
    '$route'() {
      this.show = true;

      setTimeout(() => {
        this.show = false;
      }, 300)
    }
  },
  created() {
    this.show = false;
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      if (process.client) {
        this.scrollPosition = window.scrollY
        console.log(this.scrollPosition);
      }
    },
    scrollingTop() {
      window.scrollTo(0, 0)
    }
  },

}
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0
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
