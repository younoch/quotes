<template>
  <div class="container-design py-3 px-3 rounded-2 py-lg-5 d-flex justify-content-center align-content-center">
    <div id="ct">
      <div class="corner" id="left_top"></div>
      <div class="corner" id="left_bottom"></div>
      <div class="corner" id="right_top"></div>
      <div class="corner" id="right_bottom"></div>
      <h6>{{ author }}</h6>
      <blockquote>
        <h1 class="mb-0">
          <i>&ldquo; {{quote}} &rdquo;</i>
        </h1>
      </blockquote>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toPng } from 'html-to-image'
interface Props {
  author: string
  quote: string;
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
}
#ct {

  border: 1px solid #28DBD1;
  text-align: center;
  position: relative;
  color: #fff;
  padding: 15px;

  h6 {
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
  padding-top: 13px;
  font-size: 18px;
  font-weight: 400;
}
</style>
