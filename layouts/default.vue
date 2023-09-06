<template>
  <div class="position-relative">
    <Header class="sticky-top" />
    <slot />
    <LazyFooter />
  </div>
</template>

<script setup lang="ts">
import { useQuoteStore } from "~/store/quote";
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const { setProfile } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());
const token = useCookie("token");

onMounted(async () => {
  if (token.value) {
    authenticated.value = true;
   await setProfile();
  }
});
</script>

<style lang="scss">
.swiper-pagination-bullet {
  -webkit-transform: skew(-10deg);
  -moz-transform: skew(-10deg);
  -ms-transform: skew(-10deg);
  -o-transform: skew(-10deg);
  transform: skew(-10deg);
  width: 15px;
  height: 15px;
  border-radius: 2px;
  background-color: #28dbd1;
}
</style>
