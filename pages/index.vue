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
  </transition>
  <div v-if="data" class="container">
    <ReusableHeader v-if="!isSearch" subtitle="Quotes" title="Popular Quotes" />
    <Search @searchState="searchState" @submitSearchedString="search" />
    <div class="row blog__wrapper">
      <div class="col-12 col-md-8">
        <QuoteList :quoteList="quotesLists" />
        <Pagination
          v-if="paginationData.page < paginationData.pages"
          :paginationData="paginationData"
        />
      </div>
      <Tags class="col-12 col-md-4" :tagList="getTagList" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useQuoteStore } from "~/stores/quote";
import Pagination from "@/components/reusable/buttuns/Pagination.vue";
import Tags from "@/components/partials/quote/Tags.vue";
import QuoteList from "@/components/partials/quote/QuoteList.vue";
import Search from "@/components/partials/quote/Search.vue";
import { IQuoeteItem } from "~/components/partials/quote";
const { get } = useApi();

const { fetchSearch } = useQuoteStore();
const { getTagList } = storeToRefs(useQuoteStore());

const { data, pending, error, refresh } = await useAsyncData("quotes", () =>
  fetch(useRuntimeConfig().public.API_URL + "/get-quotes?page=1&limit=10").then(
    (res) => res.json()
  )
);

const quotesLists = ref<IQuoeteItem[]>(data.value.data);
const paginationData = ref(data.value.pagination);

const isSearch = ref<boolean>(false);

function searchState(value: boolean): void {
  isSearch.value = value;
}

async function search(searchedString: string): Promise<void> {
  get("/search-quotes", { q: searchedString })
    .then((res) => {
      quotesLists.value = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
}

useSeoMeta({
  title: "Popular Quote | The Speakers",
  description: "Wisdom from the World’s Greatest Minds",
  applicationName: "The Speakers",
  ogImage: "/images/og.png",
});
</script>
