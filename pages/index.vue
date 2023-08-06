<template>
  <transition name="fade">
    <div v-if="pending" class="preloader">
      <div class="preloader__inner">
        <div class="preloader__icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div v-else-if="error">Oops, something went wrong!</div>
    <div class="container" v-else>
      <ReusableHeader
        v-if="!isSearch"
        subtitle="Quotes"
        title="Wisdom from the World’s Greatest Minds"
      />
      <Search @searchState="searchState" @submitSearchedString="search" />
      <div class="row blog__wrapper">
        <QuoteList class="col-12 col-md-8" :quoteList="quotesLists.data" />
        <Tags class="col-12 col-md-4" :tagList="getTagList" />
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useQuoteStore } from "~/stores/quote";

import Tags from "@/components/partials/quote/Tags.vue";
import QuoteList from "@/components/partials/quote/QuoteList.vue";
import Search from "@/components/partials/quote/Search.vue";

const { fetchQuoteData, fetchSearch } = useQuoteStore();
const { getTagList } = storeToRefs(useQuoteStore());

const {
  data: quotesLists,
  pending,
  error,
  refresh,
} = await useAsyncData("quotes", () =>
  fetch("https://app.the-speakers.com/api/v1/get-quotes?page=1&limit=5").then(
    (res) => res.json()
  )
);

const isSearch = ref<boolean>(false);

function searchState(value: boolean): void {
  isSearch.value = value;
}

function search(searchedString: string): void {
  fetchSearch(searchedString);
}

onMounted(() => {
  fetchQuoteData();
});

useSeoMeta({
  title: "Home | The Speakers",
  description: "Wisdom from the World’s Greatest Minds",
  applicationName: "The Seakers",
  ogImage: "/images/og.png",
});
</script>
