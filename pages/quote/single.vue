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
    <div v-else class="blog padding-bottom">
      <div class="container">
        <div class="blog__wrapper">
          <div class="row">
            <div class="col-lg-8">
              <MainSide :singleQuote="singleQuote.data" />
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
import { useLayoutStore } from "~/stores/layout";
import LeftSide from "@/components/partials/blog/LeftSide.vue";
import MainSide from "@/components/partials/quote/MainSide.vue";
import { useQuoteStore } from "~/stores/quote";

const route = useRoute();
const layoutStore = useLayoutStore();
const { getTagList } = storeToRefs(useQuoteStore());

const {
  data: singleQuote,
  pending,
  error,
  refresh,
} = await useAsyncData("quote", () =>
  fetch(
    useRuntimeConfig().public.API_URL +
      "/get-single-quote/64b42ef370090d9d6ef1228b"
  ).then((res) => res.json())
);

layoutStore.assignLayoutData({
  title: "Blog Details",
  subtitle: "Blog Single",
});

useSeoMeta({
  title: singleQuote.value?.data.author,
  twitterTitle: singleQuote.value?.data.author,
  ogTitle: singleQuote.value?.data.author,
  description: singleQuote.value?.data.quote,
  twitterDescription: singleQuote.value?.data.quote,
  ogDescription: singleQuote.value?.data.quote,
  applicationName: "The Speakers",
  ogImage: "/images/og.png",
  twitterImage: "/images/og.png",
});
useHead({
  meta: [
    { name: "keywords", content: singleQuote.value?.data.tags?.toString() },
  ],
});
</script>
