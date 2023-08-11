<template>
    <div v-if="!isLoader" class="blog padding-bottom">
      <div class="container">
        <div class="blog__wrapper">
          <div class="row">
            <div class="col-lg-8">
              <MainSide :singleQuote="localQuote" />
            </div>
              <template v-if="getTagList && getTagList.length">
                <Tags class="col-12 col-md-4" :tagList="getTagList" />
              </template>
          </div>
        </div>
      </div>
    </div>
    <div v-else  class="preloader">
      <div class="preloader__inner">
        <div class="preloader__icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import MainSide from "@/components/partials/quote/MainSide.vue";
import Tags from "@/components/partials/quote/Tags.vue";
import { useQuoteStore } from "~/stores/quote";
import { IQuoeteItem } from "~/components/partials/quote";

const isLoader = ref<boolean>(true)

const route = useRoute();
const { get } = useApi();
const { getTagList, getselectedQuote } = storeToRefs(useQuoteStore());

const data = ref<IQuoeteItem>();
  const localQuote = ref<IQuoeteItem>()
if (route) {
  await get("/get-single-quote/" + route.query.id)
    .then((res) => {
      data.value = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
}

    if(getselectedQuote.value) {
      localQuote.value = getselectedQuote.value
      isLoader.value =false
      console.log('y');
      
      
    } else {
      localQuote.value = data.value
      isLoader.value =false
    }

  useSeoMeta({
    title: localQuote.value?.author,
    twitterTitle: localQuote.value?.author,
    ogType: 'website',
    ogTitle: localQuote.value?.author,
    description: localQuote.value?.quote,
    twitterDescription: localQuote.value?.quote,
    ogDescription: localQuote.value?.quote,
    applicationName: "The Speakers",
    ogImage: "/images/og.png",
    twitterImage: "/images/og.png",
    keywords: localQuote.value?.tags?.toString(),
  });
  useHead({
    meta: [{ name: "keywords", content: localQuote.value?.tags?.toString() }],
  });
</script>
