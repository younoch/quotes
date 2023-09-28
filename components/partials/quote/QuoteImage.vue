<template>
  <div
    class="p-2 rounded-2 py-lg-3 d-flex justify-items-center container-design"
    :style="{ 'aspectRatio': screenAvailWidth > 1199 ? 1.91 : 0 }"
  >
    <div v-if="author || quote" id="ct">
      <div class="corner" id="left_top"></div>
      <div class="corner" id="left_bottom"></div>
      <div class="corner" id="right_top"></div>
      <div class="corner" id="right_bottom"></div>

      <blockquote class="h-100 d-flex flex-column justify-content-between">
        <template v-if="screenAvailWidth > 1199">
          <div class="d-flex flex-column justify-content-center flex-grow-1">
            <h1 class="mb-0 fs-2">
              <i>&ldquo; {{ quote }} &rdquo;</i>
            </h1>
          </div>
          <cite
            class="text-center mb-0 text-capitalize"
            >— {{ author }}</cite
          >
        </template>
        <template v-else>
          <h1 class="mb-0 fs-5">
            <i>&ldquo; {{ quote }} &rdquo;</i>
          </h1>
          <cite class="text-center mb-0 text-capitalize">— {{ author }}</cite>
        </template>
        <p class="site-name mb-0">www.the-speakers.com</p>
      </blockquote>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  author: string;
  quote: string;
}

const props = withDefaults(defineProps<Props>(), {
  author: "",
  quote: "",
});

const screenAvailWidth = ref(0);
onMounted(() => {
  screenAvailWidth.value = screen.availWidth;
});

</script>

<style scoped lang="scss">
.container-design {
  background: #02121f;
}
#ct {
  border: 1px solid #28dbd1;
  text-align: center;
  position: relative;
  color: #fff;
  padding: 15px;

  .site-name {
    background: #02121f;
    display: inline;
    color: #28dbd1;
    font-size: 20px;
    position: relative;
  }
}

.corner {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid #fff;
  transform: rotate(-45deg);
  position: absolute;
  background: #02121f;
}

#left_top {
  top: -16px;
  left: -16px;
  border-color: transparent transparent #28dbd1 transparent;
}
#right_top {
  top: -16px;
  right: -16px;
  border-color: transparent transparent transparent #28dbd1;
}
#left_bottom {
  bottom: -16px;
  left: -16px;
  border-color: transparent #28dbd1 transparent transparent;
}
#right_bottom {
  bottom: -16px;
  right: -16px;
  border-color: #28dbd1 transparent transparent transparent;
}

</style>
