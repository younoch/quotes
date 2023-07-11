<template>
  <div class="container">
    <ReusableHeader
      v-if="!isSearch"
      subtitle="Previous"
      title="Completed Project"
    />

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
            <client-only>
              <button class="search-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </client-only>
          </div>
        </div>
      </div>
      <QuoteList
        class="col-12 col-md-8"
        :quoteList="quoteList"
      />
      <Tags class="col-12 col-md-4" :tagList="tagList" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import { useLayoutStore } from "~/stores/layout";
import { useHead } from "@vueuse/head";

import type { IQuoeteList } from "@/components/quote";
import Tags from "@/components/quote/Tags.vue";
import QuoteList from "@/components/quote/QuoteList.vue";

const props = defineProps({});

defineEmits(["test"]);

useHead({
  title: "Quates",
});

const { get } = useApi();

const quoteList  = ref<IQuoeteList[]>([]);
const tagList  = ref<IQuoeteList[]>([]);

onMounted(() => {
  get("/get-quotes?page=1&limit=5")
    .then((res) => {
      quoteList.value = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("sdfsd");
    });

  get("/get-tags")
    .then((res) => {
      tagList.value = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("sdfsd");
    });
});

const isSearch = ref<boolean>(false);

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
