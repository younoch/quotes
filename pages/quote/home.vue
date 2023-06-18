<template>
  <div class="container">
    <ReusableHeader v-if="!isSearch" subtitle="Previous" title="Completed Project" />

    <div class="row blog__wrapper">
      <div class="widget widget-search">
        <div class="widget-search-inner">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search here"
              aria-label="Search bar"
              @focusin="isSearch = true"
              @focusout="isSearch = false"
            />
            <button class="search-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <QuoteList
        class="col-12 col-md-8"
        :completedProjectList="completedProjectList"
      />
      <Tags class="col-12 col-md-4" :blogList="blogList.slice(0, 3)" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useLayoutStore } from "~/stores/layout";
import Pagination from "@/components/reusable/buttuns/Pagination.vue";
import axios from "axios";
import Tags from "@/components/quote/Tags.vue";
import QuoteList from "@/components/quote/QuoteList.vue";
import { useHead } from "@vueuse/head";

const props = defineProps({});

defineEmits(["test"]);

useHead({
  title: "Quates",
});

// definePageMeta({
//     layout: "blank",
// });

const isSearch = ref<boolean>(false)

const layoutStore = useLayoutStore();
layoutStore.assignLayoutData({
  title: "Blog With Sidebar",
  subtitle: "Blog With Sidebar",
});

const blogList = ref([]);
const completedProjectList = ref<object[]>([]);

async function fetchAll() {
  const blog = await axios.get("/api/blog.json");
  blogList.value = blog.data.blogList;

  const project = await axios.get("/api/project.json");
  completedProjectList.value = project.data.completedProject;
}
onMounted(() => {
  fetchAll();
});
</script>
