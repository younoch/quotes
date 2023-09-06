<template>
  <div class="widget widget-tags">
    <div class="widget__header">
      <h5>Famous tags</h5>
    </div>
    <ul class="lab-ul widget-wrapper">
      <li v-for="(item, index) in tagList" @click="selectTag(item.name)">
        <b v-if="item.name" class="d-inline">{{ item.name }}</b>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useQuoteStore } from "~/store/quote";
import { ITags } from ".";

interface Props {
  tagList?: ITags[];
  pagination?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  pagination: false,
});

const { fetchTagList } = useQuoteStore();
const emits = defineEmits<{
  (event: "select-tag", tag: string): void;
}>();

const selectTag = (tag: string) => {
  emits('select-tag', tag)
}

onBeforeMount(() => {
  fetchTagList()
})
</script>
