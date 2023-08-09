<template>
  <head>
    <ClientOnly>
      <title>{{ sessionStorage.getItem("selectedQuoteAuthor") }}</title>
    </ClientOnly>
  </head>
  <transition name="fade">
    <div v-if="!data" class="preloader">
      <div class="preloader__inner">
        <div class="preloader__icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <div v-else class="blog padding-bottom">
      <div class="container">
        <div class="blog__wrapper">
          <div class="row">
            <div class="col-lg-8">
              <MainSide :singleQuote="data" />
            </div>
            <div class="col-lg-4">
              <template v-if="getTagList && getTagList.length">
                <LeftSide :tagList="getTagList" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import LeftSide from "@/components/partials/blog/LeftSide.vue";
import MainSide from "@/components/partials/quote/MainSide.vue";
import { useQuoteStore } from "~/stores/quote";
import { IQuoeteItem } from "~/components/partials/quote";

const route = useRoute();
const { get } = useApi();

const data = ref<IQuoeteItem | undefined>();
if (route) {
  await get("/get-single-quote/" + route.query.id)
    .then((res) => {
      data.value = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});

useSeoMeta({
  title: data.value?.author,
  twitterTitle: data.value?.author,
  ogTitle: data.value?.author,
  description: data.value?.quote,
  twitterDescription: data.value?.quote,
  ogDescription: data.value?.quote,
  applicationName: "The Speakers",
  ogImage: "/images/og.png",
  twitterImage: "/images/og.png",
      keywords: sessionStorage.getItem("selectedQuoteTags"),
    });
useHead({
  meta: [
    { name: "keywords", content: data.value?.tags?.toString() },
  ],
});
</script>
