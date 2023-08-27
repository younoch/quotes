<template>
  <div class="widget widget-tags">
    <div class="widget__header">
      <h5>Popular tags</h5>
    </div>
    <ul class="lab-ul widget-wrapper">
      <li v-for="(item, index) in tagList" @click="selectTag(item.name)">
        <span >{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ITags } from ".";

interface Props {
  tagList?: ITags[];
  pagination?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  pagination: false,
});

const emits = defineEmits<{
  (event: "select-tag", tag: string): void;
}>();

const selectTag = (tag: string) => {
  emits('select-tag', tag)
}
</script>
