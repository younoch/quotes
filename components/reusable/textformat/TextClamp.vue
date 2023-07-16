<template>
  <div class="container">
    
    <p
        class="text mb-0"
        :class="{ 'line-clamp': showLess }"
        :style="{ '-webkit-line-clamp': showLess ? lines : 'unset' }"
      > 
      <i>&ldquo;{{ paragraph }}.&rdquo; </i>
      
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
function checkClamp () {
  const text = document.querySelector<HTMLElement>(".text");
  if (text) {
    const actualHeight = text.clientHeight;

    const style = window.getComputedStyle(text, null);
    const lineHeight = parseInt(style.getPropertyValue("line-height"));
    const expectedHight = lineHeight * props.lines;

    isClamped.value = actualHeight > expectedHight;
    showLess.value = actualHeight > expectedHight;
  }
}

onMounted(() => {
  checkClamp()
})

watch(props, () => {
  checkClamp()
}, { deep: true})
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
