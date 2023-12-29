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
  <div v-if="data">
    <Banner />
    <div class="container">
      <div class="mt-5">
        <div class="section-header section-header--left">
          <div class="section-header__content">
            <div class="section-header__titlebar">
              <p class="section-header__subtitle">Editor's Choice</p>
              <h2 class="section__header__title">Articles</h2>
            </div>
            <nuxt-link to="/blog" class="default-btn default-btn--small"><span>View all</span></nuxt-link>
          </div>
        </div>
        <div class="row">
          <div v-for="(item, index) in 6" :key="item + index" class="col-12 col-md-6 col-lg-4 py-2">
            <BlogCard />
          </div>
        </div>
      </div>

      <div class="mt-5">
        <div class="section-header section-header--left">
          <div class="section-header__content">
            <div class="section-header__titlebar">
              <p class="section-header__subtitle">
                 Editor's Choice
                        </p>
              <h2 class="section__header__title">Quotes</h2>
            </div>
            <nuxt-link to="/quotes" class="default-btn default-btn--small"><span>View all</span> </nuxt-link>
          </div>
        </div>
        <QuoteList :quoteList="quotesLists" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Banner from "@/components/partials/home/Banner.vue";
import QuoteList from "@/components/partials/quote/QuoteList.vue";
import BlogCard from "@/components/common/BlogCard.vue";

import type { IQuoeteItem } from "~/components/partials/quote";

const structuredDataObject = ref({
  "@type": "Quotes",
  "@context": "https://www.the-speakers.com/",
  name: "Tips, Tricks, and Resources | The Speakers",
  description:
    "The Speakers is a platform that showcases diverse and insightful perspectives from writers who share their expertise and wisdom.",
  url: "https://www.the-speakers.com/",
  image: "/images/og.png",
  keywords:
    "quote, author, Famous quotes, the-speakers, Tips, Tricks, Resources",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(structuredDataObject.value),
    },
  ],
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
  title: "Tips, Tricks, and Resources | The Speakers",
  ogTitle: "Tips, Tricks, and Resources | The Speakers",
  description:
    "The Speakers is a platform that showcases diverse and insightful perspectives from writers who share their expertise and wisdom.",
  ogDescription:
    "The Speakers is a platform that showcases diverse and insightful perspectives from writers who share their expertise and wisdom.",
  applicationName: "The Speakers",
  contentType: "text/html; charset=utf-8",
  ogImage: "/images/og.png",
  keywords:
    "quote, author, Famous quotes, the-speakers, Tips, Tricks, and Resources",
});


const { data, pending, error, refresh } = await useAsyncData(
  "quotes-" + useRoute().name,
  () =>
    fetch(
      useRuntimeConfig().public.API_URL + "/get-quotes?page=1&limit=5"
    ).then((res) => res.json())
);

const { get } = useApi();

const quotesLists = ref<IQuoeteItem[]>(data.value.data);
const paginationData = ref(data.value.pagination);


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
  get("/get-quotes", { page: paginationData.value.page + 1, limit: 20 })
    .then((res) => {
      quotesLists.value = quotesLists.value.concat(res.data.data);
      paginationData.value = res.data.pagination;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
}
</script>
