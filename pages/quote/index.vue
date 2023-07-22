<template>
  <div class="container">
    <ReusableHeader
      v-if="!isSearch"
      subtitle="Previous"
      title="Completed Project"
    />

    <Search @searchState="searchState" @submitSearchedString="search" />
    <div class="row blog__wrapper">
      <QuoteList class="col-12 col-md-8" :quoteList="getQuoteList" />
      <Tags class="col-12 col-md-4" :tagList="getTagList" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useQuoteStore } from "~/stores/quote";
import { useHead } from "@vueuse/head";

import Tags from "@/components/partials/quote/Tags.vue";
import QuoteList from "@/components/partials/quote/QuoteList.vue";
import Search from "@/components/partials/quote/Search.vue";

const { fetchQuoteData, fetchTagList, fetchSearch } = useQuoteStore();
const { getQuoteList , getTagList  } = storeToRefs(useQuoteStore());
const isSearch = ref<boolean>(false);

useHead({
  title: "Quates",
});


function searchState(value: boolean): void {
  isSearch.value = value;
}

function search(searchedString: string): void {
  fetchSearch(searchedString);
}

onMounted(() => {
  fetchQuoteData();
  fetchTagList();
});
</script>