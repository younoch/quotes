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
          <QuoteList class="col-12 col-md-8" :quoteList="quotesLists" />
          <Tags class="col-12 col-md-4" :tagList="getTagList" />
        </div>
      </div>
    </transition>
  </template>
  <script setup lang="ts">
  import { ref } from "vue";
  import { storeToRefs } from "pinia";
  import { useQuoteStore } from "~/stores/quote";
  
  import Tags from "@/components/partials/quote/Tags.vue";
  import QuoteList from "@/components/partials/quote/QuoteList.vue";
  import Search from "@/components/partials/quote/Search.vue";
  import { IQuoeteList } from "~/components/partials/quote";
  const { get } = useApi();
  const route = useRoute();
  const { getTagList } = storeToRefs(useQuoteStore());
  
  const { data, pending, error, refresh } = await useAsyncData("quotes", () =>
    fetch(useRuntimeConfig().public.API_URL + "/get-quotes?page=1&limit=5").then(
      (res) => res.json()
    )
  );

  console.log(route.params);
  
  
  const quotesLists = ref<IQuoeteList[]>(data.value.data);
  
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
      .finally(() => {
      });
  }
  
  useSeoMeta({
    title: "Home | The Speakers",
    description: "Wisdom from the World’s Greatest Minds",
    applicationName: "The Speakers",
    ogImage: "/images/og.png",
  });
  </script>
  