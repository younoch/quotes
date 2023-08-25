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
        <!-- <Tags class="col-12 col-md-4" :tagList="getTagList" /> -->
        <div class="col-12 col-md-4">
          <aside class="ps-lg-1">
            <Category class="mb-2 mb-md-4" />
          </aside>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Pagination from "@/components/reusable/buttuns/Pagination.vue";
import Category from "@/components/partials/quote/Category.vue";
import QuoteList from "@/components/partials/quote/QuoteList.vue";
import Search from "@/components/partials/quote/Search.vue";
import { IQuoeteItem } from "~/components/partials/quote";
const { get } = useApi();
const route = useRoute();
const categories = [
  {
    value: "popular",
    id: 1,
  },
  {
    value: "inspirational",
    id: 2,
  },
  {
    value: "humor",
    id: 3,
  },
  {
    value: "success",
    id: 4,
  },
  {
    value: "philosophy",
    id: 5,
  },
  {
    value: "happiness",
    id: 6,
  },
  {
    value: "love",
    id: 7,
  },
  {
    value: "motivational",
    id: 8,
  },
];

const findCetagory = () => {
  const selectedCetagory = categories.find(
    (item) => item.value === route.params.id
  );
  return selectedCetagory?.id;
};

const { data, pending, error, refresh } = await useAsyncData(
  "quotes-by-category",
  () =>
    fetch(
      useRuntimeConfig().public.API_URL +
        "/get-quotes-by-category/" +
        findCetagory() +
        "?page=1&limit=30"
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

async function viewMore(): Promise<void> {
  get("/get-quotes-by-category/" + findCetagory(), {
    page: paginationData.value.page + 1,
    limit: 10,
  })
    .then((res) => {
      quotesLists.value = res.data.data.concat(quotesLists.value);
      paginationData.value = res.data.pagination;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
}
useHead({
  link: [
    { rel: "apple-touch-icon", href: "/images/favicon.png", sizes: "180x180" },
    { rel: "icon", type: "image/png", href: "/images/favicon.png" },
    { rel: "shortcut icon", type: "image/png", href: "/images/favicon.png" },
  ],
});
useSeoMeta({
  title: `${
    route.params.id.charAt(0).toUpperCase() + route.params.id.slice(1)
  } Quotes | The Speakers`,
  description:
    "Explore our website and find quotes that inspire, motivate, and empower you to live your best life.",
  applicationName: "The Speakers",
  ogImage: "/images/og.png",
  contentType: "text/html; charset=utf-8",
  keywords: "quote, author, the-speakers " + route.params.id + " quotes",
});
</script>
