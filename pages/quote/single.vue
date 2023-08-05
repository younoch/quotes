<template>
  <div class="blog padding-bottom">
    <div class="container">
      <div class="blog__wrapper">
        <div class="row">
          <div class="col-lg-8">
            <MainSide :singleQuote="singleQuote" />
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
</template>

<script setup lang="ts">

import { storeToRefs } from "pinia";
import { useLayoutStore } from "~/stores/layout";
import LeftSide from "@/components/partials/blog/LeftSide.vue";
import MainSide from "@/components/partials/quote/MainSide.vue";
import { useQuoteStore } from "~/stores/quote";
import { IQuoeteList } from "~/components/partials/quote";

const { get } = useApi();
const route = useRoute();
const layoutStore = useLayoutStore();
const { getQuoteList, getTagList } = storeToRefs(useQuoteStore());

layoutStore.assignLayoutData({
  title: "Blog Details",
  subtitle: "Blog Single",
});

const singleQuote = ref<IQuoeteList>();

if (getQuoteList.value.length) {
  singleQuote.value = getQuoteList.value.find(
    (element) => element._id === route.query.id
  );
} else {
  await get("/get-single-quote/" + route.query.id)
    .then((res) => {
      singleQuote.value = res.data.data;
      
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {});
}

useHead({
  title: "Quote",
  meta: [
    { name: 'description', content: singleQuote.value?.author },
    { name: 'og:description', content: singleQuote.value?.author },
    { name: 'title', content: singleQuote.value?.quote },
    { name: 'og:title', content: singleQuote.value?.quote },
    { name: "keywords", content: "the, speakers, quote, quotes," + singleQuote.value?.tags.join(",")},
  ],
})
</script>
