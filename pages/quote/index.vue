<template>
  <div class="container">
    <ReusableHeader
      v-if="!isSearch"
      subtitle="Previous"
      title="Completed Project"
    />

    <Search @searchState="searchState" @submitSearchedString="search"/>
    <div class="row blog__wrapper">
      <QuoteList
        class="col-12 col-md-8"
        :quoteList="quoteList"
      />
      <Tags class="col-12 col-md-4" :tagList="tagList" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useLayoutStore } from "~/stores/layout";
import { useHead } from "@vueuse/head";

import type { IQuoeteList, ITags } from "@/components/partials/quote";
import Tags from "@/components/partials/quote/Tags.vue";
import QuoteList from "@/components/partials/quote/QuoteList.vue";
import Search from "@/components/partials/quote/Search.vue";

const props = defineProps({});

defineEmits(["test"]);

useHead({
  title: "Quates",
});

const { get } = useApi();

const quoteList  = ref<IQuoeteList[]>([]);
const tagList  = ref<ITags[]>([]);

onMounted(() => {
  get("/get-quotes", { page :1, limit :5})
    .then((res) => {
      quoteList.value = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
    });

  get("/get-tags")
    .then((res) => {
      tagList.value = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
    });
});

const isSearch = ref<boolean>(false);

function searchState( value: boolean) : void {
  isSearch.value = value
}

function search(searchedString : string) : void {
  get("/search-quotes", { q : searchedString})
    .then((res) => {
      quoteList.value = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("sdfsd");
    });
}

const layoutStore = useLayoutStore();
layoutStore.assignLayoutData({
  title: "Blog With Sidebar",
  subtitle: "Blog With Sidebar",
});

</script>
