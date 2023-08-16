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
    <div v-else class="container">
      <ReusableHeader
        v-if="!isSearch"
        subtitle="Quotes"
        :title="`${route.params.id} Quotes`"
      />
      <Search @searchState="searchState" @submitSearchedString="search" />
      <div class="row blog__wrapper">
        <div class="col-12 col-md-8">
          <QuoteList :quoteList="quotesLists" />
          <Pagination
            @click="viewMore"
            v-if="paginationData.page < paginationData.pages"
            :paginationData="paginationData"
          />
        </div>
        <Tags class="col-12 col-md-4" :tagList="getTagList" />
      </div>
    </div>
  </transition>
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
const route = useRoute();
const { getTagList } = storeToRefs(useQuoteStore());
const categories = [
  {
    value: "popular",
    id: 1
  },
  {
    value: "inspirational",
    id: 2
  },
  {
    value: "humor",
    id: 3
  },
  {
    value: "success",
    id: 4
  },
  {
    value: "philosophy",
    id: 5
  },
  {
    value: "happiness",
    id: 6
  },
  {
    value: "love",
    id: 7
  },
  {
    value: "motivational",
    id: 8
  },
];

const findCetagory = () => {
  const selectedCetagory = categories.find( (item) => item.value === route.params.id)
  return selectedCetagory?.id
}

const { data, pending, error, refresh } = await useAsyncData(
  "quotes-by-category",
  () =>
    fetch(
      useRuntimeConfig().public.API_URL + "/get-quotes-by-category/"+ findCetagory() + "?page=1&limit=5"
    ).then((res) => res.json())
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
  title: `${
    route.params.id.charAt(0).toUpperCase() + route.params.id.slice(1)
  } Quotes | The Speakers`,
  description:
    "Are you looking for some inspiration, motivation, or wisdom? Explore our website and find quotes by famous authors that will empower you to achieve your goals, face your obstacles, and enjoy your journey.",
  applicationName: "The Speakers",
  ogImage: "/images/og.png",
  keywords: "quote, author," + route.params.id + "quotes",
});
</script>
