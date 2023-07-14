<template>
  <div class="container">
    
    <p
        class="text mb-0"
        :class="{ 'line-clamp': showLess }"
        :style="{ '-webkit-line-clamp': showLess ? lines : 'unset' }"
      > 
      <sup><i class="fa fa-quote-left tex"></i></sup>
      <span class="mx-1 mx-md-2">{{ paragraph }}</span>
      <sub><i class="fa fa-quote-right"></i></sub>
      
    </p>
    <div class="d-flex justify-content-between">
      <span class="cursor-pointer" v-if="isClamped" @click="showLess = !showLess">
        {{ showLess ? "Show more" : "Show less" }}
      </span>
      <span v-else></span>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// props
// const props = defineProps({
//   paragraph: String,
//   lines: {
//     type: String,
//     default: "3",
//   },
// });
interface Props {
  paragraph: string;
  lines?: number;
}

const props = withDefaults(defineProps<Props>(), {
  lines: 3,
});

// data
const showLess = ref(false);
const isClamped = ref(false);

// methods

onMounted(() => {
  const text = document.querySelector<HTMLElement>(".text");
  if (text) {
    const actualHeight = text.clientHeight;

    const style = window.getComputedStyle(text, null);
    const lineHeight = parseInt(style.getPropertyValue("line-height"));
    const expectedHight = lineHeight * props.lines;

    isClamped.value = actualHeight > expectedHight;
    showLess.value = actualHeight > expectedHight;

    // console.log(actualHeight);
    // console.log(expectedHight);
  }
});
</script>

<style scoped>
.text {
  overflow: hidden;
}

.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
