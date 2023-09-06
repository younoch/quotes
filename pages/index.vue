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
    <ReusableHeader v-if="!isSearch" subtitle="Quotes" :title="PageTiltle" />
    <Search @searchState="searchState" @submitSearchedString="search" />
    <div class="row blog__wrapper">
      <div class="col-12 col-md-8">
        <QuoteList :quoteList="quotesLists" />
        <Pagination
          v-if="paginationData.page < paginationData.pages"
          :paginationData="paginationData"
          @click="viewMore"
        />
      </div>
      <div class="col-12 col-md-4">
        <aside class="ps-lg-1">
          <Category class="mb-2 mb-md-4" />
          <Tags
            class="mt-2 mt-md-4"
            :tagList="getTagList"
            @select-tag="selectTag"
          />
        </aside>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useQuoteStore } from "~/store/quote";
import Pagination from "@/components/reusable/buttuns/Pagination.vue";
import Tags from "@/components/partials/quote/Tags.vue";
import Category from "@/components/partials/quote/Category.vue";
import QuoteList from "@/components/partials/quote/QuoteList.vue";
import Search from "@/components/partials/quote/Search.vue";
import { IQuoeteItem } from "~/components/partials/quote";

useHead({
  link: [
    {
      rel: "apple-touch-icon",
      href: "/images/the-speakers-favicon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/images/the-speakers-favicon.png",
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/images/the-speakers-favicon.png",
    },
  ],
});

useSeoMeta({
  title: "Famous Quote | The Speakers",
  ogTitle: "Famous Quote | The Speakers",
  description:
    "Discover our website and find quotes that inspire, motivate, and empower you to live your best life.",
  ogDescription:
    "Discover our website and find quotes that inspire, motivate, and empower you to live your best life.",
  applicationName: "The Speakers",
  contentType: "text/html; charset=utf-8",
  ogImage: "/images/og.png",
  keywords:
    "quote, author, Famous quotes, the-speakers, Discover Famous Quotes",
});

const PageTiltle = ref("Discover Famous Quotes | The Speakers");

const { data, pending, error, refresh } = await useAsyncData("quotes", () =>
  fetch(useRuntimeConfig().public.API_URL + "/get-quotes?page=1&limit=30").then(
    (res) => res.json()
  )
);

const { get } = useApi();
const { getTagList } = storeToRefs(useQuoteStore());

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
  get("/get-quotes", { page: paginationData.value.page + 1, limit: 10 })
    .then((res) => {
      quotesLists.value = quotesLists.value.concat(res.data.data);
      paginationData.value = res.data.pagination;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
}
const selectTag = async (tag: string) => {
  PageTiltle.value = `Discover ${tag} Quotes | The Speakers`;
  get("/get-quotes-by-tag", { tag: tag, page: 1, limit: 10 })
    .then((res) => {
      quotesLists.value = res.data.data;
      paginationData.value = res.data.pagination;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      window.scrollTo(0, 0);
    });
};
</script>
