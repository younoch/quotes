<template>
  <div class="container-design py-3 px-3 rounded-2 py-lg-5 d-flex justify-content-center align-content-center">
    <div v-if="author || quote" id="ct">
      <div class="corner" id="left_top"></div>
      <div class="corner" id="left_bottom"></div>
      <div class="corner" id="right_top"></div>
      <div class="corner" id="right_bottom"></div>
      <p class="site-name">the-speakers.com</p>
      <blockquote class="d-flex flex-column justify-content-center h-100">
        <h1 class="mb-0">
          <i>&ldquo; {{quote}} &rdquo;</i>
        </h1>
        <cite class="text-center mb-0 text-capitalize">— {{ author }}</cite>
      </blockquote>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toPng } from 'html-to-image'
interface Props {
  author: string
  quote: string
}

const props = withDefaults(defineProps<Props>(), {
  author: '',
  quote: "",
  
});
</script>

<style scoped lang="scss">
.container-design {
  background: #02121F;
  padding: 10px 0;
  aspect-ratio: 1.91;
}
#ct {

  border: 1px solid #28DBD1;
  text-align: center;
  position: relative;
  color: #fff;
  padding: 15px;

  .site-name {
  background: #02121F;
  display: inline;
  color: #28DBD1;
  padding: 0 10px;
  font-size: 20px;
  position: relative;
  top: -28px;
}
}

.corner {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid #fff;
  transform: rotate(-45deg);
  position: absolute;
  background: #02121F;
}

#left_top {
  top: -16px;
  left: -16px;
  border-color: transparent transparent #28DBD1 transparent;
}
#right_top {
  top: -16px;
  right: -16px;
  border-color: transparent transparent transparent #28DBD1;
}
#left_bottom {
  bottom: -16px;
  left: -16px;
  border-color: transparent #28DBD1 transparent transparent;
}
#right_bottom {
  bottom: -16px;
  right: -16px;
  border-color: #28DBD1 transparent transparent transparent;
}
h1 {
  font-size: 18px;
  font-weight: 400;
}
</style>
