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
        :title="`Discover ${route.params.id} Quotes | The Speakers`"
      />
      <Search @searchState="searchState" @submitSearchedString="search" />
      <div class="row blog__wrapper">
        <div class="col-12 col-md-8">
          <QuoteList v-if="quotesLists" :quoteList="quotesLists" />
          <Pagination
            @click="viewMore"
            v-if="paginationData && paginationData.page < paginationData.pages"
            :paginationData="paginationData"
          />
        </div>
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
    value: "love",
    id: 1,
  },
  {
    value: "life",
    id: 2,
  },
  {
    value: "birthday",
    id: 3,
  },
  {
    value: "motivational",
    id: 4,
  },
  {
    value: "funny",
    id: 5,
  },
  {
    value: "inspirational",
    id: 6,
  },
  {
    value: "family",
    id: 7,
  },
  {
    value: "movie",
    id: 8,
  },
];
const findCetagory = () => {
  const selectedCetagory = categories.find(
    (item) => item.value === route.params.id
  );
  return selectedCetagory?.id;
};
const quotesLists = ref<IQuoeteItem[]>({
  _id: "64e80fc4c55b0942b5f36110",
  quote: "It is sad not to love, but it is much sadder not to be able to love.",
  author: "Miguel de Unamuno",
  lang: "en",
  slug: "it-is-sad-not-to-love-but-it-is-much-sadder-not-to-be-able-to-love-",
  category_id: "7",
  tags: ["sad", "love"],
  created_at: "2023-08-25T02:19:48.400Z",
  updated_at: "2023-08-25T02:19:48.400Z",
  comments: [
    {
      profile: "64d10b79099bae7a6ced2c61",
      comment: "It's your realization!",
      _id: "64e80fc4c55b0942b5f36111",
    },
    {
      profile: "64b1161ec953aaa0938ce3c3",
      comment: "I tottaly agreed with you!",
      _id: "64e80fc4c55b0942b5f36112",
    },
  ],
});
const paginationData = ref();

await get("/get-quotes-by-category/" + findCetagory(), {
  page: 1,
  limit: 30,
})
  .then((res) => {
    quotesLists.value = res.data.data;
    paginationData.value = res.data.pagination;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {});

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
    limit: 30,
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
  title: `Discover ${
    route.params.id.charAt(0).toUpperCase() + route.params.id.slice(1)
  } Quotes | The Speakers`,
  description:
    "Discover our website and find quotes that inspire, motivate, and empower you to live your best life.",
  applicationName: "The Speakers",
  ogImage: "/images/og.png",
  contentType: "text/html; charset=utf-8",
  keywords: "quote, author, the-speakers " + route.params.id + " quotes",
});
</script>
